import validate from 'validate.js';
import moment from 'moment';

// DateTime validation
validate.extend(validate.validators.datetime, {
  // The value is guaranteed not to be null or undefined but otherwise it could be anything.
  parse(value, options) {
    return +moment.utc(value);
  },
  // Input is a unix timestamp
  format(value, options) {
    const format = options.format
      ? options.format
      : options.dateOnly
      ? 'YYYY-MM-DD'
      : 'YYYY-MM-DD hh:mm:ss';
    return moment.utc(value).format(format);
  }
});

export default validate;
