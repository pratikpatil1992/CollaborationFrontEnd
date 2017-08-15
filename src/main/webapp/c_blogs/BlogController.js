app.controller
('blogCtrl',
	[
		'$scope','$rootScope','BlogService','$location',function($scope,$rootScope,BlogService,$location) 
{
	
	var self =this;
	self.allblogs=[];
	
	$scope.blog={
			errorCode: '',
			errorMessage: '',
			id: '',
			title: '',
			user_id: '',
			date_time:'',
			status: '',
			reason: '',
			description: ''
			};
	
	self.getAllBlogs = function() {
		console.log("fetchAllBlogs...")
		BlogService.getAllBlogs()
				.then(
						function(d) {
							self.allblogs = d;
						},
						function(errResponse) {
							console.error('Error while fetching blogs');
						});
	};
	
	
	self.view = function(bid) {
		console.log("getblog...");
		BlogService.view(bid)
		.then(
				function(c){
					$rootScope.selectedBlog=c;
              	    console.log($rootScope.selectedBlog);
					$location.path("/blogcontent");
				},
				function(errResponse){
					console.error('Error while fetching blog');
				}
		)
				
		};
		
		self.createblog = function() {
					console.log("createblog...");
					$scope.blog.user_id=$rootScope.currentUser.id;
					console.log($scope.blog.user_id);
					BlogService.createblog($scope.blog)
					.then(
							function(){
								alert("Thank you for writing a blog.");
								$location.path("/allblogs");   //url after submitting
							},
							function(errResponse){
								console.error('Error while creating blog');
							}			
		)
		};
		
		self.deleteblog=function(id)
		{
			console.log("deleteblog...");
			BlogService.deleteblog(id)
			.then(
					function()
					{
						alert("blog deleted.");
			     		self.getAllBlogs();
					},
					function(errResponse)
					{
						console.error('Error while deleting blog');
					}
				  )
		};
		
		this.searchblogs=function()
		{
			console.log("searchblogs");
			BlogService.searchblog($scope.blogtitle)
			.then(
					function(b)
					{
						console.log(b);
						$scope.searchblogresults=b;
					},
					function(errResponse)
					{
						console.log("error");
					}
				 );
		};
	
}]);