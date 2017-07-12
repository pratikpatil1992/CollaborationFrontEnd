app.controller('userCtrl',['$scope','$q','UserService','$location','$rootScope','$cookieStore','$http',
						function ($scope, $q, UserService, $location, $rootScope, $cookieStore, $http) {
							
							$scope.image='';
	
							this.createUser = function(user)
							{
								console.log("createUser...");
								UserService.createUser(user)
										.then(
												function(d) {
													alert("Thank you for registering");
													$location.path("/login");
												},
												function(errResponse) {
													console.error('Error while creating User');
												});
							};
							
							this.logout=function()
							{
								console.log("logout...");
								UserService.logout()
									.then(
											function()
											{
												$rootScope.currentUser='';
												$cookieStore.remove('currentUser');
												alert("Logged out successfully");
												$location.path("/login");
											},
											function(errResponse){
												console.error('Error while logging out');
							                });
							
							};
							
							this.validate = function() 
							{
										console.log("login...");
										UserService.validate($scope.user)
										.then(
												function(data){
													$rootScope.currentUser=data;
													$cookieStore.put('currentUser',$rootScope.currentUser);
													$location.path("/");   //url after submitting
												},
												function(errResponse){
													console.error('Error while logging in');
												}			
									
											  )
							};
							
							this.createuser=function()
							{
								console.log("createuser...");
								UserService.createuser($scope.user)
								.then(
										function()
										{
											$location.path("/");
										},
										function(errResponse){
											console.error('Error while creating user');
										}
									  );
							};
							
							this.getuser=function(id)
							{
								UserService.getuser(id);
							};
							
							this.searchpeople=function()
							{
								console.log("searchpeople");
								UserService.search($scope.name)
								.then(
										function(u)
										{
											console.log(u);
											$scope.searchresults=u;
										},
										function(errResponse)
										{
											console.log("error");
										}
									 )
							};
							
							this.setimage=function(){
								console.log("setimage");
								console.log($scope.image);
								UserService.setimage($scope.image,$rootScope.currentUser.id)
								.then(
										function(response)
										{
											console.log(response);
											alert("Image uploaded successfully");
										},
										function(errResponse)
										{
											console.log("Error");
										}
									  );
							}
}]);