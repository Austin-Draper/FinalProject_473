import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | privateroom/messages', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:privateroom/messages');
    assert.ok(route);
  });
});
