'use strict';

app.config(function($stateProvider) {

	$stateProvider.state('signup', {
		url: '/signup',
		templateUrl: 'js/signup/signup.html',
		controller: 'SignupCtrl'
	})
})

// add necessary dependencies here
app.controller('SignupCtrl', function($scope,User, $state) {

   //$scope.signup ={};

   $scope.changeState = function(data){
    //console.log($stateParams);
    $state.go('create', {'userId': data._id})

   }

   $scope.sendSignup = function (signup){
    //console.log(signup);
      User.create(signup).then(function(data){
          console.log('stuff sent', data);
          $scope.changeState(data)

      })

      }
   

   //console.log($scope.signup);

  

  /*
  TODOS: 
  1 - create the signup object for ng-modelling
  2 - create a `sendSignup` function that
      a) persists the user data 
      b) changes the state to  'create' while sending along important user data
      (HINT: $stateParams)

  */


})