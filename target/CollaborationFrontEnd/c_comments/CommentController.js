app.controller('comCtrl', [
	'$scope',
	'CommentService',
	'$location','$rootScope',function($scope,CommentService,$location,$rootScope) {
	
	var self=this;
	$scope.allcomments=[];
	

	self.getAllComments = function(blogId) {
		console.log("getAllComments...")
		CommentService.getComments(blogId)
				.then(
						function(c) {
							console.log(c);
							$scope.allComments = c;
						},
						function(errResponse) {
							console.error('Error while fetching comments');
						});
	}
	
	self.postcomment=function()
	{
		console.log("postcomment...")
		CommentService.postcomment($rootScope.selectedBlog.id,$rootScope.currentUser.id,$scope.comment)
				.then(
						function()
						{
							$location.path("/blog");
						},
						function(errResponse)
						{
							console.error('Error while posting comment');
						});
				
	}
	;

}])