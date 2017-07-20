app.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

app.controller('userCtrl',['$scope','UserService','$location','$rootScope','$cookies','$http',
						function ($scope,UserService, $location, $rootScope, $cookies, $http) {
							
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
												}
											  );
							};
							
							this.logout=function()
							{
								console.log("logout...");
								UserService.logout()
									.then(
											function()
											{
												$rootScope.currentUser='';
												$cookies.remove('currentUser');
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
													$cookies.put('currentUser',$rootScope.currentUser);
													$location.path("/");   //url after submitting
												},
												function(errResponse){
													console.error('Error while logging in');
												}			
									
											  );
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
								console.log('getuser...');
								UserService.getuser(id)
								.then(
										function(response)
										{
											$scope.selectedUser=response;
										},
										function(errResponse)
										{
											console.error('Error while retrieving user');
										})
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
									 );
							};
							
							this.setimage=function(){
								console.log("setimage");
								  var file =  $scope.image;
								  console.log(file);
								  var fd = new FormData();
								   fd.append('file',file);
								UserService.setimage(fd,$rootScope.currentUser.id)
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