// Initializes the `information` service on path `/information`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Information } from './information.class';
import createModel from '../../models/information.model';
import hooks from './information.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'information': Information & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/information', new Information(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('information');

  service.hooks(hooks);
}
