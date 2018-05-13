import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('privateroom', { path: '/:message_id/privateroom'});
  this.route('login');
  this.route('logout');
  this.route('practice');
  this.route('register');
});

export default Router;
