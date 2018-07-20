//window.ipcRenderer = require('electron').ipcRenderer;
console.log('preload.js loaded');
var HID = require('node-hid');
var devices = HID.devices();
console.log(devices);
