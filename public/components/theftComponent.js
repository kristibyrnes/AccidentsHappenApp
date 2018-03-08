(function() {
  var theftComponent = {
    templateUrl: "partials/theft-partial.html",
    controller: function(WizardService,$location) {
      var $ctrl = this;
      $ctrl.theftDb = {};
      var type = "";

      $ctrl.accident = 1;

      $ctrl.getForm = function(item) {
        $ctrl.accident = item;
      }

      $ctrl.goBack = function() {
        $ctrl.accident = $ctrl.accident - 1;
      }

      $ctrl.setDescription = function(items){
        $ctrl.theftDb = items;
        console.log($ctrl.theftDb)
        $ctrl.getForm(3);
      }

      $ctrl.stolenItems = function(items) {
        $ctrl.theftDb = items;
        console.log($ctrl.theftDb)
        $ctrl.getForm(4);
      }

      $ctrl.setEvents = function(items) {
        $ctrl.theftDb = items;
        $ctrl.theftDb.type = "theft";
        console.log($ctrl.theftDb)
        $ctrl.getForm(5);
      }

      $ctrl.sendToService = function(){
        WizardService.setList($ctrl.theftDb);
        $location.path('/form')
        console.log($ctrl.theftDb);
      }
    }
  };


  angular.module("app")
    .component("theftComponent", theftComponent)
}());
