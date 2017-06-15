app.controller('loginController', loginController);
function loginController($scope, $state){
    $scope.user = {};
    $scope.login = function(){
        if($scope.user.email == 'nooraliyahoo95@gmail.com' && $scope.user.password == 'noorali'){
           $state.go('admin.dashboard');
        }
        else{
            $state.go('user.dashboard');

        }
    }
}