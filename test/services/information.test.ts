import assert from 'assert';
import app from '../../src/app';

describe('\'information\' service', () => {
  it('registered the service', () => {
    const service = app.service('information');

    assert.ok(service, 'Registered the service');
  });
});
