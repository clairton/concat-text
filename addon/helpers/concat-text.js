import Ember from 'ember';

export function concatText(params) {
  var string = '';
  //the last is options hash
  const length = params.length;
  for(var i = 0; i < length; i++){
    string += params[i];
  }
  return string;
}

export default Ember.Helper.helper(concatText);
