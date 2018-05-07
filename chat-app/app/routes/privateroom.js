import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    let selectedMsg = this.store.findRecord('public-message', params.message_id)
    let selectedSender = selectedMsg.get('sender');
    console.log(selectedSender);
    return this.store.query('public-message', {
      orderBy: 'sender',
      equalTo: selectedMsg.get('sender')
    })
  }
});
