import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    //return this.store.findAll('public-message');
    return this.store.findRecord('public-message', params.message_id)
  }
});
