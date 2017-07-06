'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  sendMessage: function sendMessage(api, message) {

    return fetch(api + '/send', { body: message, method: 'POST' });
  }
};