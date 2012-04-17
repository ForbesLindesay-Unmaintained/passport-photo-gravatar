# Passport Photo Gravatar

## Installation

    npm install passport-photo-gravatar

## Usage

```javascript
var photo = require("passport-photo");
var gravatar = require("passport-photo-gravatar");

photo.use(gravatar());
/* Try facebook search here */
//Default methods are never cached and must not return 404.
photo.useDefault(gravatar({default:"identicon"}));

photo({facebookid:445461, access_token:"User's Access Token",email:"user@example.com"}, function(err, avatarURL){
  if(!err) require('request')(avatarURL).pipe(require('fs').createWriteStream("./avatar.jpg"));
});
```


## API
 
Strategy to use email to retrieve and check gravatar url
If you set opts.default to something other than `'404'` it won't fall through to other strategies.

@param [opts] {object} optional options for the request.
@param [opts.email] {string} the property of the user object containing the email default: "email"
@param [opts.size] {integer} the size of the resulting avatar default:50
@param [opts.rating] {string} display up to this rating, can be 'g', 'pg', 'r' or 'x' default:'g'
@param [opts.default] {string} default image type to display from gravatar, can be '404', 'mm', 'identicon', 'monsterid', 'wavatar' or 'retro' default: '404'
@param [opts.forcedefault] {boolean} force the default image to be used (can't use with 404) default: false
@param [opts.useHTTPs] {boolean} set to false if you want to request the image without https default: true

## License

(The MIT License)

Copyright (c) FPF Lindesay

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the 'Software'), to deal in the Software without restriction, including without limitation 
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and 
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions 
of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.