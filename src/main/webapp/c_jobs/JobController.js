app.controller('jobCtrl', [
	'$scope',
	'JobService',
	'$location','$rootScope',function($scope,JobService,$location,$rootScope) {
	
	var self =this;
	self.jobs=[];
	
	self.getAllJobs = function() {
		console.log("fetchAllJobs...")
		JobService.getAllJobs()
				.then(
						function(j) {
							self.jobs = j;
						},
						function(errResponse) {
							console.error('Error while fetching jobs');
						});
	};
	
	self.getAppliedJobs = function() {
		console.log("fetchAllAppliedJobs...")
		JobService.getAppliedJobs($rootScope.currentUser.id)
				.then(
						function(response){
							console.log(response);
						},
						function(errResponse) {
							console.error('Error while fetching applied jobs');
						}
					 );
	};
	
	$scope.job={
			errorCode: '',
			errorMessage: '',
			id: '',
			title: '',
			date_time:'',
			status: '',
			qualification: '',
			description: ''
			};
	
	self.getJobById = function(jid) 
	{
		console.log("getjobbyid...");
		JobService.getJobById(jid)
		.then(
				function(j){
					$location.path("/jobs");
				},
				function(errResponse){
					console.error('Error while fetching job');
				}
		)
				
	};
		self.createjob = function() 
		{
					console.log("createjob...");
					JobService.createjob($scope.job)
					.then(
							function(){
								$location.path("/jobs");   //url after submitting
							},
							function(errResponse){
								console.error('Error while creating job');
							}			
				
		)
		};
		
		self.apply=function(id)
		{
			console.log("apply...")
			JobService.apply(id,$rootScope.currentUser.id)
			.then(
					function(){
						$location.path("/jobs");
					},
					function(errResponse){
						console.error('Error while applying to job');
					}
				)
			alert("Applied sucessfully");
		};
		
		self.deletejob=function(id)
		{
			console.log("delete in angular controller");
			JobService.deletejob(id)
			.then(
					function()
					{
						$location.path("/jobs");
					}
					,
					function(errResponse){
						console.error('Error while deleting job');
					}
				)
		};
		
		this.searchjobs=function()
		{
			console.log("searchblogs");
			JobService.searchjob($scope.jobtitle)
			.then(
					function(b)
					{
						console.log(b);
						$scope.searchjobresults=b;
					},
					function(errResponse)
					{
						console.log("error");
					}
				 );
		};
	
}]);