// Initializes the `shoppingcart` service on path `/shoppingcart`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Shoppingcart } from './shoppingcart.class';
import createModel from '../../models/shoppingcart.model';
import hooks from './shoppingcart.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'shoppingcart': Shoppingcart & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shoppingcart', new Shoppingcart(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoppingcart');

  service.hooks(hooks);
}
