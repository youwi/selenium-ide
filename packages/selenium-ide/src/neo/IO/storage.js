// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import browser from "webextension-polyfill";

export function get(...argv) {
  if (browser.storage) {
    return browser.storage.local.get(...argv);
  } else {
    if (isDevelopingDebug()) {
      return debug_get(...argv);
    }
    return Promise.reject(new Error("Storage module is unavailable"));
  }
}

export function set(...argv) {
  if (browser.storage) {
    return browser.storage.local.set(...argv);
  } else {
    if (isDevelopingDebug()) {
      return debug_set(...argv);
    }
    return Promise.reject(new Error("Storage module is unavailable"));
  }
}

/**
 * is using devtool debuging
 * @return {boolean}
 */
function isDevelopingDebug() {
  if (window && window.location) {
    if (window.location.hostname === "127.0.0.1") {
      return true;
    }
    if (window.location.hostname === "localhost") {
      return true;
    }
  }
  return false;
}

/**
 * when debug ..
 * @param argv
 * @return {Promise<any>}
 */
export function debug_get(...argv) {
  let obj = JSON.parse(localStorage._side_data || "{}");
  return new Promise(() => {
    return {...obj, ...argv};
  });
}

/**
 * when debuging
 * @param argv
 * @return {Promise<any>}
 */
export function debug_set(...argv) {
  let obj = {...obj, ...argv};
  localStorage._side_data = JSON.stringify(obj);
  return new Promise(() => {
    return obj;
  });
}

export default {get, set};
