import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    //return this.store.findAll('public-message');
    return this.store.query('public-message', {
       orderBy: 'recipient',
      '.indexOn': 'recipient',
      equalTo: 'Everyone'
    })
  }
});
