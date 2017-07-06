'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sendMessage: function sendMessage(api, message) {

    return (0, _axios2.default)(api + '/send', { body: message, method: 'POST' });
  }
};