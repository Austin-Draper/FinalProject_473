import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel: function() {
    if (!this.get('session.isAuthenticated')) {
      alert('You have to login before access this page');
      this.transitionTo('login');
    }
  },

  model() {
    //return this.store.findAll('public-message');
    return this.store.query('public-message', {
       orderBy: 'recipient',
      '.indexOn': 'recipient',
      equalTo: 'Everyone'
    })
  }
});
