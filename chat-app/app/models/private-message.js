import DS from 'ember-data';

export default DS.Model.extend({
  sender: DS.attr('string'),
  receiver: DS.attr('string'),
  message: DS.attr('string'),
  recipient: DS.attr('string'),
  sendingTime: DS.attr('string')
});
