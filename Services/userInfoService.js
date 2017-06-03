app.service('userInfoService', function($http, $q){
    var vm = this;
    vm.info = function(detail){
        var deferred = $q.defer();
        var obj = {
            method: 'PUT',
            url : "http://localhost:8000/addUserInfo/5924d8413a7f4e0ac41b0ff1",
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
    };

    vm.getInfo = function(){
        var deferred = $q.defer();
        var obj = {
            method: 'GET',
            url : "http://localhost:8000/getUserInfo/5924d8413a7f4e0ac41b0ff1",
            headers: {content_Type: 'application/json'}
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