app.service('createAccountService', function($http, $q){
 var vm = this;
    vm.create = function(detail){
        var deferred = $q.defer();
        var obj = {
            method: 'POST',
            url : "http://localhost:8000/addUserInfo",
            headers: {content_Type: 'application/json'},
            data: detail
        };

        $http(obj).then(function(succ){
            console.log(succ);
            deferred.resolve(succ)
        },function(err){
            deferred.reject(err);
        });
        return deferred.promise;
    }
});