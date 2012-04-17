/**
 * Check that the string is one of the valid options
 * 
 * @param arguments {strings} the valid strings
 * @return {function} function(string)
 */
function validateOption(){
  var args = arguments;
  return function(test){
    for(var i = 0; i<args.length; i++){
      if(args[i] === test)return true;
    }
    return false;
  };
}

var validateRating = validateOption('g', 'pg', 'r', 'x');
var validateDefault = validateOption('404', 'mm', 'identicon', 'monsterid', 'wavatar', 'retro');

/**
 * Strategy to use email to retrieve and check gravatar url
 * If you want this strategy to fall through to other strategies, it must specify a default of 404.
 * 
 * @param [opts] {object} optional options for the request.
 * @param [opts.email] {string} the property of the user object containing the email default: "email"
 * @param [opts.size] {integer} the size of the resulting avatar default:50
 * @param [opts.rating] {string} display up to this rating, can be 'g', 'pg', 'r' or 'x' default:'g'
 * @param [opts.default] {string} default image type to display from gravatar, can be '404', 'mm', 'identicon', 'monsterid', 'wavatar' or 'retro' default: '404'
 * @param [opts.forcedefault] {boolean} force the default image to be used (useful as an option to fall through to, can't use with 404) default: false
 * @param [opts.useHTTPs] {boolean} set to false if you want to request it without https default: true
 * @api public
 */
module.exports = function(opts){
  opts = opts || {};
  opts.email = opts.email || "email";
  opts.size = opts.size || 50;
  opts.rating = opts.rating || 'g';
  opts.default = opts.default || '404';
  opts.forcedefault = (opts.forcedefault === true);
  if(!validateRating(opts.rating)) throw "invalid rating for gravatar";
  if(!validateDefault(opts.default)) throw "invalid default gravatar";
  if(opts.forcedefault && opts.default === '404') throw "can't use forcedefault with 404 on gravatar (it's pointless)"
  var gravOpts = {s:opts.size, r:opts.rating, d:opts.default};
  if(opts.forcedefault)gravOpts.f = "y";
  return function(user, callback){
    if(user[opts.email]) callback(require("gravatar").url(user[opts.email], gravOpts, (opts.useHTTPs !== false)));
    else callback();
  };
};