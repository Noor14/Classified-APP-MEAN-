app.controller('userInfoController',userInfoController);


function userInfoController($scope, userInfoService){

    $scope.userInfo = {};
$scope.saveInfo = function(){
    userInfoService.info($scope.userInfo).then(function(res){
     console.log(res);
    },function(err){
        console.log(err);

    })
};
    $scope.getUserInfo = function(){
        userInfoService.getInfo().then(function(res){
            console.log(res);
            $scope.userInfo = res.data;
        },function(err){
            console.log(err);

        })
    };
    $scope.getUserInfo();
};