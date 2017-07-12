app.service('UserService',['$http','$rootScope', function($http,$rootScope) {
	var BASE_URL="http://localhost:8080/SocioCode";
	 return {
		 validate:function(usr)
		 {
			 console.log("calling validate");
			 return $http.post(BASE_URL+"/validate",usr)
			 .then(
                     function(response){
                         return response.data;
                     }, 
                    null
             );
		 },
		 
		 createuser:function(usr)
		 {
			 
			 console.log("calling createuser");
			 return $http.post(BASE_URL+"/createuser",usr)
			 .then(function(response)
					 {
				 		return response.data;
					 },
					 null
				   )
				   ;
			 alert("Registered successfully");
		 },
		 
		 logout:function()
		 {
			 console.log("calling logout");
			 return $http.get(BASE_URL+"/logout");
		 },
		 
		 search: function(name)
		 {
			 console.log("calling search");
			 return $http.post(BASE_URL+'/searchpeople/',name)
			 .then
			 (
					 function(response)
					 {
						 console.log("inside checkfriends");
						 console.log(response.data);
						 return response.data;
					 },
					 null
			  );
		 },
		 
		 getuser:function(id)
		 {
			 
			 return $http.get(BASE_URL+"/user/"+id)
			 .then(
					 function(response)
					 {
				 		$rootScope.selectedUser=response.data;
				 		return response.data;
				 
				 }, 
				 null);
		 },
		 
		 setimage:function(image,id)
		 {
			 
			 return $http.post(BASE_URL+'/setimage/'+id,image)
			 .then(
					 function(response)
					 {
						 return response.data;
					 },
					 null
				  );
		 }
		 
         
	 }
        
}]);