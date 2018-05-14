import Route from '@ember/routing/route';
import {set} from '@ember/object';
import {hash} from 'rsvp';

export default Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      alert('You have to login before access this page');
      this.transitionTo('login');
    }
  },

  model(params) {
     return hash({
       chat: this.store.findRecord('public-message', params.message_id, params.sender),
       allMessages: this.store.query('private-message', {
         orderBy: 'recipient',
         '.indexOn': 'recipient',

         //use this to only get private messages from the database specific
         //to the message_id from the user public message we clicked on to make
         //the private chate open
         //this could be changed to something that will guaranteed make the chat
         //private to just the person logged in and the intended recipient
         //This was tester code, and it works
         equalTo: params.message_id
       }),
   specific: this.store.query('private-message',{
             limitToFirst: 1,
             filter: {recipient: params.message_id, receiver: params.sender}
           })
        });
      },

      setupController(controller, model) {
        this._super(...arguments);
        set(controller, 'chat', model.chat);
        set(controller, 'allMessages', model.allMessages);
        set(controller, 'specific', model.specific);
      }
 });
