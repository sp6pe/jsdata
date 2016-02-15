'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('create', {
		url: '/create/:userId',
		templateUrl: 'js/create/create.html',
		controller: 'CreateCtrl' ,
		resolve:  {
			author:function($stateParams, User){
				//console.log('stuff received', $stateParams.userId );
				return User.find($stateParams.userId);

			}
		}
		/*
				add a resolve block that has an author function which 
				users $stateParams to retrieve the author object
		*/
	})
})

// add necessary dependencies here 
app.controller('CreateCtrl', function($scope,author, Post,$state) {
	 console.log(author);
	// $scope.yay=author;
	// console.log($scope.yay);
	$scope.previewTrue = false;

	$scope.preview = function() {
		$scope.previewTrue = !$scope.previewTrue;
	}

	// $scope.author =author;

	$scope.newPost ={};
	//$scope.newPost.username = author.username;
	$scope.newPost.author = author;

	$scope.createNewPost = function(){
		Post.create($scope.newPost).then(function(post){
		$state.go('main')
		})

	} 

	//console.log($scope.newPost());

	/*

	TODOS: 
	1 - create the object that the form can use via ng-model
  2 - create a function that 
	 		a) persists the ng-modeled post object 
			b) changes the state to 'main'  

	*/
	
}) 