app.controller('userProductsController',userProductsController);

function userProductsController($scope, userProductsService,ngDialog){
    $scope.products = userProductsService.products;

    $scope.delete = function(){
        ngDialog.open({
            template: 'usertemplates/deleteDialog.html',
            //controller: 'SomeController'
        });
    }
};

