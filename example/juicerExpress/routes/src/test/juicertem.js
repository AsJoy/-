/**
 * Created by niuyuanqiang on 16/9/28.
 */
function get() {
  'use strict';
  var _ = _ || {};
  var _out = '';
  _out += '';
  try {
    _out += '';
    var hello = _.hello;
    var div = _.div;
    _out += '    <div>';
    _out += _method.__escapehtml.escaping(_method.__escapehtml.detection(hello));
    _out += '</div>  ';
  } catch (e) {
    _method.__throw("Juicer Render Exception: " + e.message);
  }
  _out += '';
  return _out;
}