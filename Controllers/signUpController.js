app.controller("signUpController",signUpController);
function signUpController($scope, createAccountService){
    $scope.userInfo = {};
    $scope.createAccount = function(){
        createAccountService.create($scope.userInfo).then(function(res){
            console.log(res);
        },function(err){
            console.log(err);
        });


    }
}