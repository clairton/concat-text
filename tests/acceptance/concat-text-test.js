import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';

var App;

module("Acceptance: concat-text", {
  setup: function(){
    App = startApp();
  },
  teardown: function(){
    App.registry = App.buildRegistry();
    App.reset();
  }
});

test('Show Application Name', function(assert) {
  visit('/').then(function() {
    var a = find('.concat-text');
    assert.equal(a.text(), 'abc');
  });
});
