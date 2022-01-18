## Cookies
<p align="center">
<br><a href="https://travis-ci.com/katherineheadshall/cookies">
    <img src="https://app.travis-ci.com/katherineheadshall/cookies.svg?branch=main">
    </a>
    <br>
    <br>
    <b>Skip the hard steps to manage the cookie in the front-end, use the standard from W3C.</b>
</p>

![This is an image](https://media.kasperskydaily.com/wp-content/uploads/sites/94/2020/03/04172323/36c3-listening-back-featured.jpg)

## Install

```
$ npm install --save @katherineheadshall/cookies
```

## Usage

__`setObject`__

```js
import { setObject } from '@katherineheadshall/cookies';

let user = setObject('user', {id: 1, username: 'example user'});
console.log(user); // returns the parsed stored cookie in cookie format
```

## Example

__`getObject`__
```js
import { getObject } from '@katherineheadshall/cookies';
// can also be imported as comonjs module:
// const cookies = require('@katherineheadshall/simple-storage');
// Getting an already stored user object
getObject('user').then(user => {
  console.log(user);
  // => {object}
});
```

## API

```js
// you can provide an default value if the cookie cannot be found, this also works for getObject
storage.get('cookieName', null)
```

`cookieName` `:`  __`string`__

| __`cookies-available-methods`__      | __`Output`__  |
|---------------------------------------------|---------------|
| __`get`__                                   | `string or defaultValue`      |
| __`set`__                                   | `string`      |
| __`setObject`__                             | `any`         |
| __`getObject`__                             | `string or defaultValue`         |
| __`remove`__                                | `string`        |

## Remove an already created Cookie

```js
// commonjs
cookies.remove('cookieName')
```

```js
// es6
remove('cookieName')
```

## License

[MIT](https://github.com/katherineheadshall/simple-storage/blob/main/LICENSE)
