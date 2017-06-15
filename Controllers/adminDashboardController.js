app.controller('adminDashboardController',adminDashboardController);

function adminDashboardController($scope, adminDashboardService, $http, $interval){
    $scope.Carts = adminDashboardService.products;

    function weather(){
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=karachi&units=metric&appid=0834deac64c379731eac8a783d961b5e';
        $http.get(url).then(function(succ){
            console.log(succ.data);
            $scope.weather = succ.data;
            $scope.today = new Date(succ.data.dt *1000);

        },function(err){
            console.log(err)
        });
    }
    weather();
    $interval(function(){
        weather();
    },300000);
}