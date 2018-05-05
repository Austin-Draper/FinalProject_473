// app/controllers/privateroom.js
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  emailAddress: '',

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isLongEnough: gte("message.length", 5),
  isBothValid: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothValid'),

  actions: {

    savePrivateMessage() {
      const senderEmail = this.get('emailAddress');
      const textMessage = this.get('message');
      const recipient = 'Everyone';
      const messageTime = Date();

      const newPublicMessage = this.store.createRecord('public-message', {sender: senderEmail, message: textMessage, recipient: recipient, sendingTime: messageTime});
      newPublicMessage.save();

      //alert(`Saving of the following email address and Message is in progress: ${this.get('emailAddress')} - ${this.get('message')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}: ${this.get('message')}`);
      //this.set('message', '');
    }
  }
});
