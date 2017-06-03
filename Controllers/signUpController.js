app.controller("signUpController",signUpController);
function signUpController($scope, $timeout, createAccountService) {

    $scope.userInfo = {};
    $scope.error = false;


    $scope.createAccount = function () {
        if ($scope.userInfo.password != $scope.userInfo.confirmPassword) {
            return;
        }
        else {

            $scope.userDetail = {
                email: $scope.userInfo.email,
                password: $scope.userInfo.password
            };

            createAccountService.create($scope.userDetail).then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }


    };
    $scope.onBlur = function () {
    $timeout(function () {
        if ($scope.userInfo.password !== $scope.userInfo.confirmPassword) {
            $scope.signupForm.confirmPassword.$error.msg = true;
            $scope.signupForm.confirmPassword.$invalid = true;
            $scope.signupForm.confirmPassword.$valid = false;
        }
    },0)
    }
}