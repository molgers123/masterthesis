// Initializes the `robots` service on path `/robots`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Robots } from './robots.class';
import createModel from '../../models/robots.model';
import hooks from './robots.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'robots': Robots & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/robots', new Robots(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('robots');

  service.hooks(hooks);
}
