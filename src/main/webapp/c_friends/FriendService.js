app.service('FriendService',['$http','$rootScope', function($http,$rootScope) {
	var BASE_URL="http://localhost:8080/SocioCode";
	 return {
		 
		 getAllFriends: function(id) 
		 {
	         	console.log("calling getAllFriends");
	                 return $http.get(BASE_URL+'/friends/'+id)
	                         .then(
	                                 function(response){
	                                     return response.data;
	                                 }, 
	                                null
	                         );
	      },
	      
	      getAllRequests: function(id) 
			 {
		         	console.log("calling getAllRequests");
		                 return $http.get(BASE_URL+'/requests/'+id)
		                         .then(
		                                 function(response){
		                                     return response.data;
		                                 }, 
		                                null
		                         );
		      },
		      
		      getSentRequests: function(id) 
				 {
			         	console.log("calling getSentRequests");
			                 return $http.get(BASE_URL+'/sentrequests/'+id)
			                         .then(
			                                 function(response){
			                                     return response.data;
			                                 }, 
			                                null
			                         );
			      },
	 
	 	 SendFriendRequest: function(id,userId) 
	 	 {
	 		 	console.log("calling SendFriendRequest");
	 		 	return $http.post(BASE_URL+'/sendreq/'+id+'/'+userId)
	 		 	.then(
	 		 			function(response)
        	  			{
        	  				console.log("inside sendreq");
        	  				return response.data;
        	  			},
        	  			null
                );
	 		 	
	 	 },

	     AcceptFriendRequest: function(id,userId) 
		 {
		 		console.log("calling AcceptFriendRequest");
		 		return $http.post(BASE_URL+'/acceptreq/'+id+'/'+userId)
		 		.then(
		 				function(response)
	        	  		{
	        	  			console.log("inside acceptreq");
	        	  			return response.data;
	        	  			
	        	  		},
	        	  		null
	                  );
		 		
		 }
		 
		 
	 }
}])