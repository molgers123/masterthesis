import assert from 'assert';
import app from '../../src/app';

describe('\'shoppingcart\' service', () => {
  it('registered the service', () => {
    const service = app.service('shoppingcart');

    assert.ok(service, 'Registered the service');
  });
});
