import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      alert('You are not logging in');
      this.transitionTo('login');
    }
  },
  actions: {

    logOut() {
      this.get('session').close().then(function() {
          this.transitionTo('login');
        }.bind(this));
    }
  }
});
