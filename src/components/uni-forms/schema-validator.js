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
      if (validator[vt]) {
        var v = validator[vt](rule, value, options)
        if (v != null) {
          result = v
          break
        } else {
        }
      }
    }
    return result
  }

  _getValidateType(rule) {
    var result = ''
    if (rule.required) {
      result = 'required'
    } else if (rule.type) {
      result = 'type'
    } else if (rule.enum || rule.maximum || rule.minimum || rule.maxLength || rule.minLength) {
      result = 'range'
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
      return validatorHelper.format({
        s: ""
      }, rule.message || options.messages.required);
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

  type(rule, value, options) {
    var customTypes = Object.keys(types);
    var ruleType = rule.type;

    if (customTypes.indexOf(ruleType) > -1) {
      if (!types[ruleType](value)) {
        return validatorHelper.format(rule, rule.message || options.message[ruleType]);
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
  regexp(value) {
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
    default: 'field 验证错误 {s}',
    required: '{s} 必填',
    enum: '{s} 必须在{s}和{s}之间',
    whitespace: '{s} 不能为空',
    date: {
      format: '{s} date {s} is invalid for format {s}',
      parse: '{s} date could not be parsed, {s} is invalid ',
      invalid: '{s} date {s} is invalid',
    },
    types: {
      string: '{s} 不是 {s}',
      array: '{s} 不是 {s}',
      object: '{s} 不是 {s}',
      number: '{s} 不是 {s}',
      date: '{s} 不是 {s}',
      boolean: '{s} 不是 {s}',
      integer: '{s} 不是 {s}',
      float: '{s} 不是 {s}',
      regexp: '{s} 不是有效的 {s}',
      email: '{s} 不是有效的 {s}',
      url: '{s} 不是有效的 {s}'
    },
    string: {
      len: '{label} must be exactly {s} characters',
      min: '{label} 不能少于 {minLength} 个字符',
      max: '{label} 不能超过 {maxLength} 个字符',
      range: '{label} 必须介于 {minLength} 和 {maxLength} 个字符之间'
    },
    number: {
      len: '{label} must equal {s}',
      min: '{label} 不能小于 {minimum}',
      max: '{label} 不能大于 {maximum}',
      range: '{label} must be between {s} and {s}',
    },
    pattern: {
      mismatch: '{s} value {s} does not match pattern {s}',
    }
  };
}


SchemaValidator.message = new Message();

export default SchemaValidator
