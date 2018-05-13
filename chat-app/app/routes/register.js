import Route from '@ember/routing/route';
import { inject } from '@ember/service'
// import firebase from '@ember';

export default Route.extend({
  firebaseApp: inject(),
  session: inject(),

  actions: {
    register() {
      const auth = this.get('firebaseApp').auth();
      const email = this.controller.get('userEmail');
      const password = this.controller.get('userPassword');

      auth.createUserWithEmailAndPassword(email, password).then((userResponse) => {
        this.controller.set('responseMessage', `You have succesfully create a new user with the following uid:` + userResponse.uid);
        this.controller.set('responseError', '');
        alert(`You have succesfully registered a new user with the email address : ${this.controller.get('userEmail')}`);
        this.controller.set('userEmail', '');
        this.controller.set('userPassword', '');
        this.controller.set('confirmedPassword', '');
        // this.transitionTo('index');
      }, (error) => {
        if (error) {
          this.controller.set('responseError', error);
          this.controller.set('responseMessage', '');
        }
      });
    }
  }
});
