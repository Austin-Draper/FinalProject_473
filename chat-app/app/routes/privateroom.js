import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('public-message', params.message_id)
    // let sender = msg.get(sender);
    // console(sender);
  }

});
