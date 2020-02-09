import assert from 'assert';
import app from '../../src/app';

describe('\'apps\' service', () => {
  it('registered the service', () => {
    const service = app.service('apps');

    assert.ok(service, 'Registered the service');
  });
});
