// app/controllers/privateroom.js
import Controller from '@ember/controller';
import { not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';

export default Controller.extend({


  isLongEnough: gte("message.length", 5),
  isDisabled: not('isLongEnough'),

  actions: {

    savePrivateMessage() {
      const senderEmail = this.get('session.currentUser.email');
      const textMessage = this.get('message');
      const recipient = this.get('chat.id'); //this lets us save to the database using the message_id sent through the browser
      const messageTime = Date();

      const newPrivateMessage = this.store.createRecord('private-message', {sender: senderEmail, message: textMessage, recipient: recipient, sendingTime: messageTime});
      newPrivateMessage.save();

      //alert(`Saving of the following email address and Message is in progress: ${this.get('emailAddress')} - ${this.get('message')}`);
      //this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}: ${this.get('message')}`);
      //this.set('message', '');
      this.set('message', '');
    }
  }
});
