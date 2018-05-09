import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    console.log(this.get('sender'));
    return this.store.findRecord('public-message', params.message_id)
  }
});
