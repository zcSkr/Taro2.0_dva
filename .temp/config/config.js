import Taro, { getStorageSync as _getStorageSync, setStorageSync as _setStorageSync } from "@tarojs/taro-h5";
const requestUrl = 'https://cgf.scyuronghe.com'; //https://wap.scttlg.com  http://47.107.65.90:8080  192.168.2.168:9001
const projectName = 'steak';

module.exports = {
  rootUrl: "https://cgf.scyuronghe.com/steak",
  fileUrl: "https://cgf.scyuronghe.com/steak/",
  uploadUrl: "https://cgf.scyuronghe.com/steak/file/uploadFile",
  getToken: function () {
    try {
      return _getStorageSync('token');
    } catch (e) {}
    return null;
  },
  setToken: function (token) {
    try {
      return _setStorageSync('token', token);
    } catch (e) {}
    return null;
  },
  getUnionuser: function () {
    try {
      return _getStorageSync('unionuser');
    } catch (e) {}
    return null;
  },
  setUnionuser: function (unionuser) {
    try {
      return _setStorageSync('unionuser', unionuser);
    } catch (e) {}
    return null;
  }
};