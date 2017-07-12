app.service('CommentService',['$http','$rootScope', function($http,$rootScope) {
	var BASE_URL="http://localhost:8080/SocioCode";
	 return {
		 getComments: function(blogId)
		 {
			 console.log("calling getComments in comment service");
			 return $http.get(BASE_URL+'/comments/'+blogId)
			 .then
			 (
					 function(response)
					 {
						 console.log(response.data);
						 return response.data;
					 },
					 null
			  );
		 },
	 
	 postcomment:function(blogId,userId,comment)
	 {
		 console.log("calling postcomment in comment service");
		 return $http.post(BASE_URL+'/postcomment/'+blogId+'/'+userId,comment)
		 .then
		 (
				 function(response)
				 {
					 console.log(response.data);
				 },
				 null
		);
	 }
	 }
}])