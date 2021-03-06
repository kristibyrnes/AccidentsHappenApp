(function() {
  function WizardService($http){

    return {
      getList: getList,
      setList: setList,
      deleteItem: deleteItem,
      getVideo: getVideo,
      setVideo: setVideo,
      deleteVideo: deleteVideo,
      updateVideo: updateVideo
    };

    function getList(){
      return $http({
        method: "GET",
        url: "/incidents"
        }).then(function(response) {
        return response.data;
        });
    };

    function setList(incident){
      return $http({
        method: "POST",
        url: "/incidents",
        data: incident
      });
    };

    function deleteItem(id){
      return $http({
        method: "DELETE",
        url: "/incidents/"+id
      });
    };

    function getVideo(){
      return $http({
        method: "GET",
        url: "/videos"
        }).then(function(response) {
        return response.data;
        });
    };

    function setVideo(video){
      return $http({
        method: "POST",
        url: "/videos",
        data: video
      });
    };

    function deleteVideo(id){
      return $http({
        method: "DELETE",
        url: "/videos/"+id
      });
    };

    function updateVideo(video, id){

    return $http({
             method: "PUT",
             url: "/videos/" + id,
             data: video
         });
  };

  };
  angular.module("app")
    .factory("WizardService",WizardService)
}());
