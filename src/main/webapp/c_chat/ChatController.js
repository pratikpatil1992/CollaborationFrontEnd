app.controller("chatCtrl", function($scope, $location, ChatService) {
  $scope.messages = [];
  $scope.message = "";
  $scope.max = 140;
 

  $scope.addMessage = function() {
	  $location.path("/chat")
    ChatService.send($scope.message);
  
    $scope.message = "";
  };

  ChatService.receive().then(null, null, function(message) {
	 
	 
    $scope.messages.push(message);
  });
});