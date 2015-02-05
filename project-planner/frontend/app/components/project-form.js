import Ember from 'ember';

export default Ember.Component.extend({
  project: null,

  actions: {
    save: function(){
      this.sendAction('save', this.get('project'));
    }
  }
});
