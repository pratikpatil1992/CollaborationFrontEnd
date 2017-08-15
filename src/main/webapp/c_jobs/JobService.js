app.service('JobService',['$http','$rootScope', function($http,$rootScope) {
	var BASE_URL="http://localhost:8080/SocioCode";
	 return {
         
		 getAllJobs: function() {
         	console.log("calling getAllJobs ")
                 return $http.get(BASE_URL+'/jobs')
                         .then(
                                 function(response){
                                	
                                     return response.data;
                                 }, 
                                null
                         );
         },
         
         getAppliedJobs: function(userId){
        	 console.log("calling getAppliedJobs"+userId)
        	 return $http.get(BASE_URL+'/appliedjobs/'+userId)
             .then(
                     function(response){
                    	 $rootScope.appliedjobs=response.data;
                         return response.data;
                     }, 
                    null
             );
         },
      
         getJobById: function(id) {
          	console.log("calling getJobById ")
                  return $http.get(BASE_URL+'/job/'+id)
                          .then(
                                  function(response){
                                	  $rootScope.selectedJob= response.data;
                                	  console.log($rootScope.selectedJob);
                                      return response.data;
                                  }, 
                                 null
                          );
          }, 
          
          createjob: function(job) {
           	console.log("calling createjob ")
                   return $http.post(BASE_URL+'/createjob/',job)
                           .then(
                        		   function(response){
                        			   console.log("inside function")
                                       return response.data;
                                   }, 
                                  null
                           );
           },
         
          apply:function(id,userId){
        	  console.log("calling apply")
        	  	return $http.post(BASE_URL+'/apply/'+id+'/'+userId)
        	  	.then(
        	  			function(response)
        	  			{
        	  				console.log("inside apply")
        	  				return response.data;
        	  			},
        	  			null
        	  		);
          },
          
          deletejob:function(id){
        	  console.log("calling delete in JobService")
        	  	return $http.delete(BASE_URL+'/deletejob/'+id)
        	  	.then(
        	  			function(response)
        	  			{
        	  				console.log("inside delete of rest service")
        	  				return response.data;
        	  			},
        	  			null
        	  		);
          },
          
         searchjob: function(title)
   		 {
   			 console.log("calling search");
   			 return $http.post(BASE_URL+'/searchjobs/',title)
   			 .then
   			 (
   					 function(response)
   					 {
   						 console.log(response.data);
   						 return response.data;
   					 },
   					 null
   			  );
   		 }
          
         
	 }
        
}]);