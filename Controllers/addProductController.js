app.controller("addProductController",addProductController);
function addProductController($scope,addProductService){
    $scope.product = {};
    $scope.tags=[];

    $scope.createChip = function(){
            if(event.which == 13 && $scope.product.keyword){
                $scope.tags.push($scope.product.keyword);
                $scope.product.keyword = '';
                console.log($scope.tags);
            }
    };
    $scope.removeChip = function(index){
        $scope.tags.splice(index,1);
    };

    $scope.productSave = function(){
        addProductService.save($scope.product).then(function(res){
            if($scope.productDetail && ! angular.equals($scope.productDetail,{})){
            $scope.productDetail.$setPristine();
            $scope.productDetail.$setUntouched();
            }
            console.log(res);
        },function(err){
            console.log(err);
        });


    }
}