app.controller('userDashboardController',userDashboardController);

function userDashboardController($scope, userDashboardService){
    $scope.Carts = userDashboardService.products;
};