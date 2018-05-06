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
      this.get('session').open('firebase', {
        provider: 'password',
        email: this.controller.get('userEmail'),
        password: this.controller.get('userPassword')
      }).then(function() {
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

// export default Route.extend({
//   actions: {
//     logIn() {
//       var controller = this.get('controller');
//       var email = controller.get('userEmail');
//       var password = controller.get('userPassword');
//
//       this.get('session').open('firebase', {
//         provider: 'password',
//         email: email,
//         password: password
//       }).then(function() {
//         this.transitionTo('index');
//       }.bind(this));
//     }
//   },
//
//   logOut() {
//     this.get('session').close();
//   }
// });
