// app/routes/login.js
import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  session: inject(),
  beforeModel: function() {
    return this.get('session').fetch().catch(function() {});
  },

  actions: {
    logIn() {
      //logout if currently logging in
      if (this.get('session.isAuthenticated')) {
        this.get('session').close();
      }
      //login
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.controller.get('userEmail'),
        password: this.controller.get('userPassword')
      }).then(function() {
          this.controller.set('userEmail', '');
          this.controller.set('userPassword', '');
          this.transitionTo('index');
        }.bind(this));

      //alert(`Saving of the following email address and Message is in progress: ${this.get('emailAddress')} - ${this.get('message')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}: ${this.get('message')}`);
      //this.set('message', '');
    },
    logOut() {
      this.get('session').close();
    }
  }
});
