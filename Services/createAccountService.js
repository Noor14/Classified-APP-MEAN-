app.service('createAccountService', function($http, $q){
 var vm = this;
    vm.create = function(detail){
        var defferd = $q.defer();
        var obj = {
            method: 'POST',
            url : 'http://localhost/createAccount',
            headers: {content_Type: 'application/json'},
            data: detail
        };

        $http(obj).then(function(succ){
            console.log(succ);
            defferd.resolve(succ)
        },function(err){
        defferd.reject(err);
        });
        return defferd.promise;
    }
});