(function() {
    var witnessComponent = {
      templateUrl: "partials/witness-partial.html",
      controller: function(WizardService,$location) {
        var $ctrl = this;
        $ctrl.accidentDb = {};
        var type;
        $ctrl.accident = 1;

        $ctrl.getType = function(typeOf){
          type = typeOf;
        }
        $ctrl.setPerpCar = function(car) {
          $ctrl.accidentDb = car;
          $ctrl.getForm(4);
        }
        $ctrl.getForm = function(item) {
          $ctrl.accident = item;

        }
        $ctrl.goBack = function(){
          $ctrl.accident = $ctrl.accident - 1;
        }
        $ctrl.setEvent = function (car){
          $ctrl.accidentDb.event = car.event;
          $ctrl.accidentDb.type = type;
          $ctrl.getForm(5);
        }

        $ctrl.sendToService = function(){
          WizardService.setList($ctrl.accidentDb);
          $location.path('/submit')
        }
      }

    };


    angular.module("app")
      .component("witnessComponent", witnessComponent)
  }());
