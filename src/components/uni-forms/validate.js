
var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", 'i')
};

const FORMAT_MAPPING = {
  "int": 'number',
  "bool": 'boolean',
  "double": 'number',
  "long": 'number'
}

function formatMessage(args, resources) {
  var defaultMessage = ['label']
  defaultMessage.forEach((item) => {
    if (args[item] === undefined) {
      args[item] = ''
    }
  })

  let str = resources
  for (let key in args) {
    let reg = new RegExp('{' + key + '}')
    str = str.replace(reg, args[key])
  }
  return str
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && !value) {
    return true;
  }

  if (Array.isArray(value) && !value.length) {
    return true;
  }

  if (type === 'object' && !Object.keys(value).length) {
    return true;
  }

  return false;
}

class RuleValidator {

  constructor(message) {
    this._message = message
  }

  async validateRule(key, value, data) {
    return new Promise(async (resolve, reject) => {
      let result = await this._invokeValidate(key, value, data)
      if (result == null) {
        resolve(1)
      } else {
        reject(new Error(result))
      }
    })
  }

  async _invokeValidate(key, value, data) {
    var result = null

    let rules = key.rules

    let hasRequired = rules.findIndex((item) => { return item.required })
    if (hasRequired < 0) {
      if (value === null || value === undefined) {
        return result
      }
      if (typeof value === 'string' && !value.length) {
        return result
      }
    }

    var message = this._message

    if (rules === undefined) {
      return message['default']
    }

    for (var i = 0; i < rules.length; i++) {
      let rule = rules[i]
      let vt = this._getValidateType(rule)

      if (key.label !== undefined) {
        Object.assign(rule, { label: key.label })
      }

      if (RuleValidatorHelper[vt]) {
        result = RuleValidatorHelper[vt](rule, value, message)
        if (result != null) {
          break
        }
      }

      if (rule.validateFunction) {
        result = await this._validateFunction(rule, value, data, vt)
        if (result != null) {
          break
        }
      }
    }

    return result
  }

  async _validateFunction(rule, value, data, vt) {
    let result = null
    let isAsync = Object.prototype.toString.call(rule.validateFunction).includes('AsyncFunction')
    if (isAsync) {
      try {
        const p = await rule.validateFunction(rule, value, data)
        if (p) {
          result = this._getMessage(rule, p, vt)
        }
      } catch (e) {
        result = this._getMessage(rule, e.message, vt)
      }
    } else {
      let callback = null
      let callbackMessage = null
      let res = rule.validateFunction(rule, value, data, (message) => {
        callback = message
      })
      if (callback) {
        res = !(callback instanceof Error)
        callbackMessage = res ? callback : callback.message
      }
      if (!res) {
        result = this._getMessage(rule, callbackMessage, vt)
      }
    }
    return result
  }

  _getMessage(rule, message, vt) {
    return formatMessage(rule, message || rule.errorMessage || this._message[vt] || message['default'])
  }

  _getValidateType(rule) {
    // TODO
    var result = ''
    if (rule.required) {
      result = 'required'
    } else if (rule.enum) {
      result = 'range'
    } else if (rule.maximum || rule.minimum) {
      result = 'rangeNumber'
    } else if (rule.maxLength || rule.minLength) {
      result = 'rangeString'
    } else if (rule.format) {
      result = 'format'
    } else if (rule.pattern) {
      result = 'pattern'
    } else if (rule.validate) {
      result = 'validate'
    }
    return result
  }
}

const RuleValidatorHelper = {
  required(rule, value, message) {
    if (rule.required && isEmptyValue(value, rule.format || typeof value)) {
      return formatMessage(rule, rule.errorMessage || message.required);
    }

    return null
  },

  range(rule, value, message) {
    if (Array.isArray(value)) {
      return formatMessage(rule, rule.errorMessage || message['pattern'].mismatch);
    }

    if (rule.enum.indexOf(value) < 0) {
      return formatMessage(rule, message['enum']);
    }

    return null
  },

  rangeNumber(rule, value, message) {
    // let { minimum, maximum, exclusiveMinimum, exclusiveMaximum } = rule;
    let min = rule.minimum;
    let max = rule.maximum;
    let exclusiveMin = rule.exclusiveMinimum;
    let exclusiveMax = rule.exclusiveMaximum;
    let val = value;

    if (!types.number(val)) {
      return formatMessage(rule, rule.errorMessage || message['pattern'].mismatch);
    }

    let _min = exclusiveMin ? val <= min : val < min;
    let _max = exclusiveMax ? val >= max : val > max;

    if (min !== undefined && _min) {
      return formatMessage(rule, rule.errorMessage || message['number'].min)
    } else if (max !== undefined && _max) {
      return formatMessage(rule, rule.errorMessage || message['number'].max)
    } else if (min !== undefined && max !== undefined && (_min || _max)) {
      return formatMessage(rule, rule.errorMessage || message['number'].range)
    }

    return null
  },

  rangeString(rule, value, message) {
    let min = rule.minLength;
    let max = rule.maxLength;
    let val = value.length;

    if (typeof value !== 'string') {
      return formatMessage(rule, rule.errorMessage || message['pattern'].mismatch);
    }

    if (min !== undefined && val < min) {
      return formatMessage(rule, rule.errorMessage || message['string'].min)
    } else if (max !== undefined && val > max) {
      return formatMessage(rule, rule.errorMessage || message['string'].max)
    } else if (min !== undefined && max !== undefined && (val < min || val > max)) {
      return formatMessage(rule, rule.errorMessage || message['string'].range)
    }

    return null
  },

  pattern(rule, value, message) {
    if (!types['pattern'](rule.pattern, value)) {
      return formatMessage(rule, rule.errorMessage || message.pattern.mismatch);
    }

    return null
  },

  format(rule, value, message) {
    var customTypes = Object.keys(types);
    var format = FORMAT_MAPPING[rule.format] ? FORMAT_MAPPING[rule.format] : rule.format;

    if (customTypes.indexOf(format) > -1) {
      if (!types[format](value)) {
        return formatMessage(rule, rule.errorMessage || message.types[format]);
      }
    }

    return null
  }
}

const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  string(value) {
    return typeof value === 'string';
  },
  number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "boolean": function (value) {
    return typeof value === 'boolean';
  },
  "float": function (value) {
    return types.number(value) && !types.integer(value);
  },
  array(value) {
    return Array.isArray(value);
  },
  object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  date(value) {
    var v
    if (value instanceof Date) {
      v = value;
    } else {
      v = new Date(value);
    }
    return typeof v.getTime === 'function' && typeof v.getMonth === 'function' && typeof v.getYear === 'function' && !isNaN(v.getTime());
  },
  timestamp(value) {
    if (!this.integer(value) || Math.abs(value).toString().length > 16) {
      return false
    }

    return this.date(value);
  },
  email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern(reg, value) {
    try {
      return new RegExp(reg).test(value);
    } catch (e) {
      return false;
    }
  },
  method(value) {
    return typeof value === 'function';
  }
}

class SchemaValidator extends RuleValidator {

  constructor(schema, options) {
    super(SchemaValidator.message);

    this._schema = schema
    this._options = options || null
  }

  updateSchema(schema) {
    this._schema = schema
  }

  async validate(data) {
    var checkResult = this._checkField(data)
    if (checkResult) {
      return checkResult
    }

    var result = await this.invokeValidate(data, false)
    return result.length ? result[0] : null
  }

  async validateAll(data) {
    var checkResult = this._checkField(data)
    if (checkResult) {
      return checkResult
    }

    return await this.invokeValidate(data, true)
  }

  async validateUpdate(data) {
    var checkResult = this._checkField(data)
    if (checkResult) {
      return checkResult
    }

    var result = await this.invokeValidateUpdate(data, false)
    return result.length ? result[0] : null
  }

  async invokeValidate(data, all) {
    let result = []
    let schema = this._schema
    for (let key in schema) {
      let value = schema[key]

      try {
        await this.validateRule(value, data[key], data)
      } catch (error) {
        result.push({
          key: key,
          errorMessage: error.message
        })
        if (!all) break
      }
    }
    return result
  }

  async invokeValidateUpdate(data, all) {
    let result = []
    for (let key in data) {
      try {
        await this.validateRule(this._schema[key], data[key], data)
      } catch (error) {
        result.push({
          key: key,
          errorMessage: error.message
        })
        if (!all) break
      }
    }
    return result
  }

  _checkField(data) {
    var keys = Object.keys(data)
    var keys2 = Object.keys(this._schema)
    if (new Set(keys.concat(keys2)).size === keys2.length) {
      return ''
    }
    return [{ key: 'invalid', errorMessage: SchemaValidator.message['defaultInvalid'] }]
  }
}

function Message() {
  return {
    default: '验证错误',
    defaultInvalid: '非法字段',
    required: '{label}必填',
    'enum': '{label}超出范围',
    whitespace: '{label}不能为空',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    types: {
      string: '{label}类型无效',
      array: '{label}类型无效',
      object: '{label}类型无效',
      number: '{label}类型无效',
      date: '{label}类型无效',
      boolean: '{label}类型无效',
      integer: '{label}类型无效',
      float: '{label}类型无效',
      regexp: '{label}无效',
      email: '{label}类型无效',
      url: '{label}类型无效'
    },
    string: {
      len: '{label}必须为{length}个字符',
      min: '{label}不能少于{minLength}个字符',
      max: '{label}不能超过{maxLength}个字符',
      range: '{label}必须介于{minLength}和{maxLength}个字符之间'
    },
    number: {
      len: '{label}必须等于{length}',
      min: '{label}不能小于{minimum}',
      max: '{label}不能大于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label}格式不匹配'
    }
  };
}


SchemaValidator.message = new Message();

export default SchemaValidator
