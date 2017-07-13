app.controller("ChatForumController", function($scope, ChatForumService) {
	console.log('ChatForumController')
  $scope.messages = [];
  $scope.message = ""
  $scope.max = 50;
  $scope.addMessage = function() {
	  console.log("addMessage")
    ChatForumService.send($scope.message);
    $scope.message = "";
  };

  ChatForumService.receive().then(null, null, function(message) {
	  console.log("receive")

    $scope.messages.push(message);  // this messages we have to display in html text area
  });
});