import { Application } from '../declarations';
import users from './users/users.service';
import robots from './robots/robots.service';
import apps from './apps/apps.service';
import information from './information/information.service';

import shoppingcart from './shoppingcart/shoppingcart.service';

// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(robots);

  app.configure(apps);
  app.configure(information);


  app.configure(shoppingcart);
}
