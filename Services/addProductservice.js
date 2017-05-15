
app.service("addProductService",function($http, $q){
   var vm = this;
    vm.save = function(product){
        var deferred = $q.defer();
        var obj ={
            method:"POST",
            url:"http://localhost:8000/addProduct",
            headers: {'Content-Type': 'application/json'},
            data : product
        };
        $http(obj).then(function(succ){
            vm.result = succ;
            deferred.resolve(succ);
        },function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    }
});