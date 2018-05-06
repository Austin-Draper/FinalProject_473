// app/controllers/index.js
import Controller from '@ember/controller';
import {  inject } from '@ember/service';
//import { match, not } from '@ember/object/computed';
import { not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
//import { and } from '@ember/object/computed';

export default Controller.extend({
  session: inject(),
  emailAddress: '',

  // isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  // isBothValid: and('isValid', 'isLongEnough'),
  isDisabled: not('isLongEnough'),

  actions: {

    savePublicMessage() {
      const senderEmail = this.get('session.currentUser.email');
      const textMessage = this.get('message');
      const recipient = 'Everyone';
      const messageTime = Date();

      const newPublicMessage = this.store.createRecord('public-message', {sender: senderEmail, message: textMessage, recipient: recipient, sendingTime: messageTime});
      newPublicMessage.save();

      //alert(`Saving of the following email address and Message is in progress: ${this.get('emailAddress')} - ${this.get('message')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}: ${this.get('message')}`);
      this.set('message', '');
    }
  }
});
