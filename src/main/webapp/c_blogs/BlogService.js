app.service('BlogService',['$http','$rootScope', function($http,$rootScope) {
	var BASE_URL="http://localhost:8080/SocioCode";
	 return {
         
		 getAllBlogs: function() {
         	console.log("calling fetchAllBlogs ")
                 return $http.get(BASE_URL+'/blogs')
                         .then(
                                 function(response){
                                     return response.data;
                                 }, 
                                null
                         );
         },
         
         view: function(id) {
          	console.log("calling view")
                  return $http.get(BASE_URL+'/blog/'+id)
                          .then(
                                  function(response){
                                	  
                                      return response.data;
                                  }, 
                                 null
                          );
          }, 
          
          createblog: function(blog) {
           	console.log("calling createblog ")
                   return $http.post(BASE_URL+'/createblog/',blog)
                           .then(
                        		   function(response){
                        			   console.log("inside function")
                                       return response.data;
                                   }, 
                                  null
                           );
           },
           
           deleteblog:function(id){
        	   console.log("calling deleteblog in angular controller")
        	   		return $http.delete(BASE_URL+'/deleteblog/'+id)
        	   		.then(
        	   				function(response)
        	   				{
        	   					console.log("inside function")
        	   					return response.data;
        	   				},
        	   				null
        	   			 );
           }
         
         
	 }
        
}]);