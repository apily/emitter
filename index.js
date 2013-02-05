/**
 * Emitter
 * Event emitter component
 * 
 * @copyright 2013 Enrico Marino and Federico Spini
 * @license MIT
 */

/**
 * Expose `Emitter`
 */
 
module.exports = Emitter;

/**
 * @constructor Emitter
 */

function Emitter () {
  this._listeners = {};
}

/**
 * @method on
 * @description 
 *   Listen on the given `event` with `fn`.
 * 
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on = function (event, fn) {
  var listeners 
    = this._listeners[event] 
    = this._listeners[event] || [];
   
  listeners.push(fn);
  return this;
};

/**
 * @method off
 * @description
 *   Remove the given callback for `event` 
 *   or all registered callbacks.
 *
 * @param {String} event event
 * @param {Function} fn callback to remove
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off = function (event, fn) {
  var listeners = this._listeners[event];
  var listener;
  var i;
  
  if (!listener) {
   return this;
  }
  if (1 == arguments.length) {
    delete this._listeners[event];
    return this;
  }
  i = listeners.indexOf(fn);
  if (i !== -1) {
   callbacks.splice(i, 1);
  }
  return this;
};
