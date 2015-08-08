import { concatText } from 'concat-text/helpers/concat-text';
import { module, test } from 'qunit';

module('Unit | Helper | concat text');

// Replace this with your real tests.
test('concat', function(assert) {
  var result = concatText('a', 'b', 'c', {a:'option hash'});
  assert.equal(result, 'abc');
});
