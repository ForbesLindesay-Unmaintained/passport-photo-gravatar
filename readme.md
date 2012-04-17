
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