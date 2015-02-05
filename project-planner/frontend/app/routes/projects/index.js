import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return this.store.find('project');
  },

  setupController: function(controller, model){
    this._super(controller, model);

    var newProject = this.store.createRecord('project');
    controller.set('newProject', newProject);

  },


  actions: {
    saveProject: function(project){
      project.save();

      var newProject = this.store.createRecord('project');
      this.controller.set('newProject', newProject);
    }
  }

});
