import assert from 'assert';
import app from '../../src/app';

describe('\'robots\' service', () => {
  it('registered the service', () => {
    const service = app.service('robots');

    assert.ok(service, 'Registered the service');
  });
});
