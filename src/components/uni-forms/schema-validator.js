// JsonSchemaValidator

class SchemaValidator {

  constructor(schema, options) {
    this._schema = schema
    this._options = options || null
  }

  updateSchema(schema) {
    this._schema = schema
  }

  validate(data, rules) {
    var result = this._invokeValidate(data, false, rules)
    return result.length ? result[0] : null
  }

  validateAll(data) {
    return this._invokeValidate(data, true)
  }

  _invokeValidate(data, all, rules) {
    let result = []

    for (let key in data) {
      let vir = this._validateInternal(rules || this._schema[key], data[key])
      if (vir != null) {
        result.push({
          key: key,
          message: vir
        })
      }

      if (!all) break
    }

    return result
  }

  _validateInternal(rules, value, delegate) {
    var result = null
    var options = {
      message: SchemaValidator.message
    }

    for (var i = 0; i < rules.length; i++) {
      let rule = rules[i]
      let vt = this._getValidateType(rule)
      if (!vt) {
        continue
      }

      var v = validator[vt](rule, value, options)
      if (v != null) {
        result = v
        break
      }
	  console.log('-0----',rule,value)
      if (rule.validator) {
        var res = rule.validator(rule, value)
        if (!res) {
          result = validatorHelper.format(rule, rule.message || options.message[vt] || options.message['default'])
          break
        }
      }
    }
    return result
  }

  _getValidateType(rule) {
    var result = ''
    if (rule.required) {
      result = 'required'
    } else if (rule.enum || rule.maximum || rule.minimum || rule.maxLength || rule.minLength) {
      result = 'range'
    } else if (rule.type || rule.format) {
      result = 'type'
    } else if (rule.pattern) {
      result = 'pattern'
    }

    return result
  }
}

var pattern = {
  email: /^\S+?@\S+?\.\S+?$/,
  url: new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",'i')
};

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === 'string' && !value) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  return false;
}

const validator = {
  required(rule, value, options) {
    if (rule.required && isEmptyValue(value, rule.type)) {
      return validatorHelper.format(rule, rule.message || options.message.required);
    }

    return null
  },

  range(rule, value, options) {
    var type = (rule.maximum || rule.minimum) ? 1 : 0
    var min = type ? rule.minimum : rule.minLength;
    var max = type ? rule.maximum : rule.maxLength;

    var key = ['string', 'number'][type];
    var val = type ? value : value.length;
    var enum_value = rule.enum;

    if (enum_value) {
      if (enum_value.indexOf(value) < 0) {
        return validatorHelper.format(rule, options.message[key].len);
      } else {
        return null;
      }
    } else if (min && !max && val < min) {
      return validatorHelper.format(rule, rule.message || options.message[key].min)
    } else if (max && !min && val > max) {
      return validatorHelper.format(rule, rule.message || options.message[key].max)
    } else if (min && max && (val < min || val > max)) {
      return validatorHelper.format(rule, rule.message || options.message[key].range)
    }

    return null
  },

  pattern(rule, value, options) {
    if (!types['pattern'](value)) {
      return validatorHelper.format(rule, rule.message || options.message.pattern.mismatch);
    }

    return null
  },

  type(rule, value, options) {
    var customTypes = Object.keys(types);
    var ruleType = rule.type || rule.format;

    if (customTypes.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        return validatorHelper.format(rule, rule.message || options.message[ruleType]);
      } else {
		  return null
	  }
    }

    return null
  }
}

const types = {
  integer(value) {
    return types.number(value) && parseInt(value, 10) === value;
  },
  number(value) {
    if (isNaN(value)) {
      return false;
    }
    return typeof value === 'number';
  },
  "float": function(value) {
    return types.number(value) && !types.integer(value);
  },
  array(value) {
    return Array.isArray(value);
  },
  object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  pattern(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  method(value) {
    return typeof value === 'function';
  }
}

const validatorHelper = {
  format(args, resources) {
    if (args.label === undefined) {
      args.label = ''
    }

    let str = resources
    for (let key in args) {
      let reg = new RegExp('{' + key + '}')
      str = str.replace(reg, args[key])
    }
    return str
  }
}

function Message() {
  return {
    default: '验证错误 {s}',
    required: '{label}必填',
    enum: '{label}必须在{min}和{max}之间',
    whitespace: '{label}不能为空',
    date: {
      format: '{label}日期{value}格式无效',
      parse: '{label}日期无法解析,{value}无效',
      invalid: '{label}日期{value}无效'
    },
    types: {
      string: '{label}不是{value}',
      array: '{label}不是{value}',
      object: '{label}不是{value}',
      number: '{label}不是{value}',
      date: '{label}不是{value}',
      boolean: '{label}不是{value}',
      integer: '{label}不是{value}',
      float: '{label}不是{value}',
      regexp: '{label}不是有效的{value}',
      email: '{label}不是有效的{value}',
      url: '{label}不是有效的{value}'
    },
    string: {
      len: '{label}必须为{length}个字符',
      min: '{label}不能少于 {minLength}个字符',
      max: '{label}不能超过 {maxLength}个字符',
      range: '{label}必须介于 {minLength}和{maxLength}个字符之间'
    },
    number: {
      len: '{label}必须等于{length}',
      min: '{label}不能小于{minimum}',
      max: '{label}不能大于{maximum}',
      range: '{label}必须介于{minimum}and{maximum}之间'
    },
    pattern: {
      mismatch: '{label} value {value} does not match pattern {pattern}'
    }
  };
}


SchemaValidator.message = new Message();

export default SchemaValidator
