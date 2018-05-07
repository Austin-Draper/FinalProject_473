// app/controllers/login.js
import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';
import { gte } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  userEmail: '',

  isValid: match('userEmail', /^.+@.+\..+$/),
  isLongEnough: gte("userPassword.length", 8),
  isBothValid: and('isValid', 'isLongEnough'),
  isDisabled: not('isBothValid'),

});
