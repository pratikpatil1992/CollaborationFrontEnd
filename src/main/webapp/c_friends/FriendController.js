app.controller('friendCtrl', [
	'$scope',
	'FriendService',
	'$location','$rootScope',function($scope,FriendService,$location,$rootScope) {
	
	var self=this;
	$scope.allfriends=[];
	$rootScope.friendprofile=[];
	self.getAllFriends = function() {
		console.log("fetchAllFriends...")
		FriendService.getAllFriends($rootScope.currentUser.id)
				.then(
						function(f) {
							console.log(f);
							$scope.allfriends = f;
						},
						function(errResponse) {
							console.error('Error while fetching jobs');
						});
	},
	
	self.sendreq = function(id) {
		console.log("Calling sendreq...")
		FriendService.SendFriendRequest(id,$rootScope.currentUser.id)
				.then(

						function(){
							alert("Friend request sent");
							$location.path("/searchpeople");
						},
						function(errResponse){
							console.error('Error while sending friend request');
						}
					);
	},
	
	self.acceptreq = function(id) {
		console.log("Calling acceptreq...");
		FriendService.AcceptFriendRequest($rootScope.currentUser.id,id)
				.then(

						function(){
							alert("Friend request accepted");
							$location.path("/friends");
						},
						function(errResponse){
							console.error('Error while accepting friend request');
						}
					);
	},
	
	self.getrecreq = function() {
		console.log("getrecreq...")
		FriendService.getAllRequests($rootScope.currentUser.id)
				.then(
						function(r) {
							console.log(r);
							$scope.recreq = r;
						},
						function(errResponse) {
							console.error('Error while fetching jobs');
						});
	},
	
	self.getsentreq = function() {
		console.log("getsentreq...")
		FriendService.getSentRequests($rootScope.currentUser.id)
				.then(
						function(r) {
							console.log(r);
							$scope.sentreq = r;
						},
						function(errResponse) {
							console.error('Error while fetching jobs');
						});
	}
	
}])