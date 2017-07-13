var app = angular.module("myApp", ["ngRoute","ngCookies"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
    	
        templateUrl : "home.html"
    })
    .when("/allblogs", {
        templateUrl : "c_blogs/blogs.html",
        controller: 'blogCtrl'
      
    })
    .when("/blogcontent", {
        templateUrl : "c_blogs/blogcontent.html",
        controller: 'comCtrl',
    })
    .when("/createblog", {
        templateUrl : "c_blogs/createblog.html",
        controller: 'blogCtrl'
    })
    .when("/jobs", {
        templateUrl : "c_jobs/jobs.html",
        controller: 'jobCtrl'
    })
    .when("/appliedjobs", {
        templateUrl : "c_jobs/appliedjobs.html",
        controller: 'jobCtrl'
    })
    .when("/createuser", {
        templateUrl : "c_users/signup.html",
        controller: 'userCtrl'
    })
    .when("/createjob", {
        templateUrl : "c_jobs/createjob.html",
        controller: 'jobCtrl'
    })
    .when("/login", {
        templateUrl : "c_users/login.html",
        controller: 'userCtrl'
    })
    .when("/friends", {
        templateUrl : "c_friends/friends.html",
        controller: 'friendCtrl'
    })
    .when("/acceptreq", {
        templateUrl : "c_friends/friends.html",
        controller: 'friendCtrl'
    })
    .when("/sentreq", {
        templateUrl : "c_friends/friends.html",
        controller: 'friendCtrl'
    })
    .when("/myprofile", {
        templateUrl : "c_users/myprofile.html",
        controller: 'userCtrl'
    })
    .when("/searchpeople", {
        templateUrl : "c_users/searchpeople.html",
        controller: 'userCtrl'
    })
    .when("/chat", {
        templateUrl : "c_chat/chat_forum.html",
        controller: 'ChatForumController'
    })
    ;
});
