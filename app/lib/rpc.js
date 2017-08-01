/**
 * Created by tdzl2003 on 6/18/16.
 */

import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import URI from 'urijs';
import {
  Platform,
} from 'react-native';
var storage = new Storage({
    // maximum capacity, default 1000 
    size: 1000,

    // Use AsyncStorage for RN, or window.localStorage for web.
    // If not set, data would be lost after reload.
    storageBackend: AsyncStorage,

    // expire time, default 1 day(1000 * 3600 * 24 milliseconds).
    // can be null, which means never expire.
    defaultExpires: 1000 * 3600 * 24*30,

    // cache data in the memory. default is true.
    enableCache: true,

    // if data was not found in storage or expired,
    // the corresponding sync method will be invoked and return 
    // the latest data.
    sync : {
        // we'll talk about the details later.
    }
})  


//const tnurl = 'http://101.231.204.84:8091/sim/getacptn'
const KEY_TOKEN = 'accessToken';
const KEY_TYPE = 'userType';
const ROOT_URL = 'http://jmhui.com:8080/jmcus';

//const ROOT_URL = 'http://192.168.44.137/jmWebTest/jmcus'
//const ROOT_URL = 'http://210.42.41.162/jmWebTest/jmcus'
export const META_URL = 'http://jmhui.com:8080'
const UPLOAD_TOKEN_URL = 'upload';

let token = null;
let userInfo = null;
let userType = 0;


function timeoutPromise(ms, promise) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error("请求超时，请重试"))
    }, ms);
    promise.then(
      (res) => {
        clearTimeout(timeoutId);
        resolve(res);
      },
      (err) => {
        clearTimeout(timeoutId);
        reject(err);
      }
    );
  })
}


export function getToken() {
  return token;
}

export function getUserType(){
  return userType;
}

export function saveType(_userType) {
  userType = _userType;
  return AsyncStorage.setItem(KEY_TYPE, token);
}
export async function loadType() {
  type = await AsyncStorage.getItem(KEY_TYPE);
  return type;
}

export function saveToken(_token) {
  token = _token.token;
  //return AsyncStorage.setItem(KEY_TOKEN, token);
  return storage.save({
    key: KEY_TOKEN,   // Note: Do not use underscore("_") in key!
    rawData: _token
    });
}

export async function loadToken() {
  //token = await AsyncStorage.getItem(KEY_TOKEN);

  token = await storage.load({
    key: KEY_TOKEN,
  })
  console.log('token',token)
  return token;
}

export async function clearToken() {
  await storage.remove({key:KEY_TOKEN});
  token = null;
}

export async function logout(){
  try{
    await clearToken();
    // JPushModule.setAlias("logout",suc=>console.log(suc),error=>console.warn(error)) 
    // if (Platform.OS === 'android') {
    //   JPushModule.clearAllNotifications();
    // }
  }catch(error){
    console.log('logout err',error.message)
  }
}

export async function clearType() {
  await AsyncStorage.removeItem(KEY_TYPE);
  userType = 0;
}
export function getUserInfo(_token) {
  return userInfo
}

export async function saveUserInfo(_userinfo) {
  userInfo =_userinfo
  return userInfo
}

export async function clearUserInfo() {
  
  userInfo = null;
}


async function request(url, options = {method: 'GET'}, params = {'__placeholder': ''}) {
  try {
    /*
    let body = new FormData();
    for (let i in params) {
        if (params[i] != null) {
          body.append(i, params[i]);
        }
    }*/
    let formBody = [];
    for (let property in params) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(params[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    if ( options.method === 'POST') {
      options.body = formBody;
    }
    options.credentials = 'include';

    options.headers = {
      //'Cookie': cookie ? cookie : null,
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers
    };
    if (token) {
      options.headers['token'] = token.token;
    }
    if (__DEV__) {
      console.log(`${options.method} ${url}`);
      if (options.body) {
      console.log('body',options.body);
      }
      if (options.headers) {
      console.log('header',options.headers);
      }
    }
    let response = await timeoutPromise(30000,fetch(url, options))
    if (response.ok) {
      console.log('response',response)
      //let json = await response.text();
      //let json = await response.json()
      //console.log('json',json)
      let obj = await response.json();
      console.log('obj',obj)
      if (obj.code === 0) {
        return obj.data;
      }
      else if (obj.code ===2){
        DeviceEventEmitter.emit('invalidToken',obj.message);
        throw new Error(obj.message);
      }else {
        throw new Error(obj.message);
      }
    }
    else {
      throw new Error(`请求错误，错误码：${response.status}；URL: [${url}]`);
    }

  }
  catch (err) {
    console.warn('Network request error:', err.message, 'URL:', params);
    console.log('err',err)
    throw err;
  }
}

// file: {uri}
export async function upload(file) {
  const uploadData = await request(new URI(ROOT_URL + UPLOAD_TOKEN_URL), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const body = new FormData();
  body.append('token', uploadData.formData.token);
  body.append('accept', uploadData.formData.accept);
  body.append('file', {
    uri: file.uri,
    type: file.type || 'image/jpeg',
    name: uploadData.fieldName,
  });

  const options = {
    method: 'POST',
    headers: {},
    body,
  };

  const resp = await fetch(uploadData.url, options);
  const text = await resp.text();
  console.log('RESP:', text);
  const json = JSON.parse(text);

  // 如果请求失败
  if (resp.status !== 200) {
    throw new ResponseError(json.message, resp.status, json);
  }

  return json.result;
}
/*
export function get(url, options) {
  return request(url, options);
}

export function post(url, data, options) {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}

export function put(url, data, options) {
  return request(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}

export function $delete(url, data, options) {
  return request(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    ...options,
  });
}
*/

export function get(urlKey, params, header) {
  let url = ROOT_URL + urlKey;
  url = new URI(url).query(params).toString();

  return request(url, {
    method: 'GET',
    header
  });
}

export function post(urlKey, params, headers, updateCookie) {
  let url = ROOT_URL;
  params['method'] = urlKey;
  return request(url, {
    method: 'POST',
    headers
  }, params, updateCookie);
}



export async function getTn(url, options = {method: 'POST'}, params = {}) {
  try {
    /*
    let body = new FormData();
    for (let i in params) {
        if (params[i] != null) {
          body.append(i, params[i]);
        }
    }*/

    options.credentials = 'include';

    options.headers = {
      //'Cookie': cookie ? cookie : null,
      'Content-Type': 'application/x-www-form-urlencoded',
      ...options.headers
    };
    if (__DEV__) {
      console.log(`${options.method} ${url}`);
      if (options.body) {
      console.log('body',options.body);
      }
      if (options.headers) {
      console.log('header',options.headers);
      }
    }
    let response = await timeoutPromise(30000,fetch(url, options))
    if (response.ok) {
      console.log('response',response.body)
      //let json = await response.text();
      //let json = await response.json()
      //console.log('json',json)
      let obj = await response.text();
      console.log('obj',obj)
      return obj;

    }
    else {
      throw new Error(`请求错误，错误码：${response.status}；URL: [${url}]`);
    }

  }
  catch (err) {
    console.warn('Network request error:', err.message, 'URL:', url);
    console.log('err',err)
    throw err;
  }
}