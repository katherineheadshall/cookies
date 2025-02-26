"use strict";

const { convertDate } = require("./_dateConverter");

const cookies = {
    /**
     * @description Allow you to create an Cookie.
     * @param {string} cookieName the name you will give to your cookie.
     * @param {string} value you can pass a single string or number, for objects use the setObject method instead.
     * @param {object} options you can provide additional options for the cookie, options: expires (in days, example: 1 or 30), path, domain, secure and many more, for the complete api check: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
     */
    set(cookieName, value, options = { path: '/' }) {
      let cookie = cookieName + "=" + value;
      if (options.expires !== undefined) {
        options.expires = convertDate(options.expires).toUTCString();
      }
      let cookieOptions = ''
      for (let option in options) {
        if (!options[option]) {
          continue
        }

        cookieOptions  += '; ' + option

        if (options[option] === true) {
          continue
        }
        /* RFC 6265 section 5.2:
            If the set-cookie-string contains a %x3B (";") character:

            The name-value-pair string consists of the characters up to,
            but not including, the first %x3B (";"), and the unparsed-
            attributes consist of the remainder of the set-cookie-string
            (including the %x3B (";") in question).
        */
        cookieOptions += '=' + options[option].split(';')[0]
      }
      return window.document.cookie = cookie + cookieOptions;
    },
    /**
     * @description Allow you to get an Cookie, the return value is a string or a default value you can provide.
     * @param {string} cookieName should be an Cookie name.
     * @param {string} defaultValue if no cookie is found you can provide an default value to be returned.
     */
    get(cookieName, defaultValue) {
      let name = cookieName + '=';
      let decodedCookie = decodeURIComponent(window.document.cookie);
      let preCookieData = decodedCookie.split(';');
      for (let i = 0; i < preCookieData.length; i++) {
        let cookie = preCookieData[i];
        while (cookie.charAt(0) == ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) == 0) {
          return cookie.substring(name.length, cookie.length);
        }
      }
      return defaultValue;
    },
    /**
     * @description Allow you to create an Cookie of the type Object.
     * @param {string} cookieName the name you will give to your cookie.
     * @param {string} value you can pass an plain object, for only numbers or strings use the set method instead.
     * @param {object} options you can provide additional options for the cookie, options: expires (in days, example: 1 or 30), path, domain, secure and many more, for the complete api check: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
     */
    setObject(cookieName, value, options = { path: '/' }) {
      let cookie = cookieName + "=" + JSON.stringify(value);
      if (options.expires !== undefined) {
        options.expires = convertDate(options.expires).toUTCString();
      }
      let cookieOptions = ''
      for (let option in options) {
        if (!options[option]) {
          continue
        }

        cookieOptions  += '; ' + option

        if (options[option] === true) {
          continue
        }
        /* RFC 6265 section 5.2:
            If the set-cookie-string contains a %x3B (";") character:

            The name-value-pair string consists of the characters up to,
            but not including, the first %x3B (";"), and the unparsed-
            attributes consist of the remainder of the set-cookie-string
            (including the %x3B (";") in question).
        */
        cookieOptions += '=' + options[option].split(';')[0]
      }
      return window.document.cookie = cookie + cookieOptions;
    },
    /**
     * @description Allow you to get an Cookie, the return value is an object or a default value you can provide.
     * @param {string} cookieName should be an Cookie name.
     * @param {string} defaultValue if no cookie is found you can provide an default value to be returned.
     */
     getObject(cookieName, defaultValue) {
       let name = cookieName + '=';
       let decodedCookie = decodeURIComponent(window.document.cookie);
       let preCookieData = decodedCookie.split(';');
       for (let i = 0; i < preCookieData.length; i++) {
         let cookie = preCookieData[i];
         while (cookie.charAt(0) == ' ') {
           cookie = cookie.substring(1);
         }
         if (cookie.indexOf(name) == 0) {
           return JSON.parse(cookie.substring(name.length, cookie.length));
         }
       }
       return defaultValue;
     },
    /**
     * @description Allow you to delete an Cookie, the return value is always null.
     * @param {string} cookieName the name of the already created Cookie.
     * @param {string} options you can provide additional options for the cookie, options: expires (in days, example: 1 or 30), path, domain, secure and many more, for the complete api check: https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
     */
    remove(cookieName, options = { path: '/' }) {
      let name = cookieName + '=';
      let deletePattern;
      let baseDeletePattern = ' ; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
      if (Object.keys(options).length > 1) {
        let cookieDeleteOptions = ''
        for (let option in options) {
          if (!options[option]) {
            continue
          }

          cookieDeleteOptions  += '; ' + option

          if (options[option] === true) {
            continue
          }
          /* RFC 6265 section 5.2:
              If the set-cookie-string contains a %x3B (";") character:

              The name-value-pair string consists of the characters up to,
              but not including, the first %x3B (";"), and the unparsed-
              attributes consist of the remainder of the set-cookie-string
              (including the %x3B (";") in question).
          */
          cookieDeleteOptions += '=' + options[option].split(';')[0]
        }
        deletePattern = cookieDeleteOptions;
      } else {
        deletePattern = baseDeletePattern;
      }
      return window.document.cookie = name + deletePattern;
    }
}

module.exports = cookies;
