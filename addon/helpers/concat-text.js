import Ember from 'ember';

export function concatText() {
  var string = '';
  //the last is options hash
  var length = arguments.length - 1;
  for(var i = 0; i < length; i++){
    string += arguments[i];
  }
  return string;
}

export default Ember.Helper.helper(concatText);
