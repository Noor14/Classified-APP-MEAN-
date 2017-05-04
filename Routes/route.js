app.config(function($urlRouterProvider, $stateProvider){
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home',{
            url : '',
            abstract: true,
            templateUrl : "templates/home.html",
            controller : homeController
        })
        .state('home.products',{
            url : '/home',
            templateUrl : "templates/products.html",
            controller : homeController
        })
        .state('home.detail',{
            url : '/detail',
            templateUrl : "templates/productdetail.html"
        })
        .state('home.info',{
            url : '/information',
            templateUrl : "templates/information.html"
        })

     .state('login',{
        url : '/login',
        templateUrl : "templates/login.html",
        //controller : loginController
     })
    .state('password',{
        url : '/password',
        templateUrl : "templates/forgotpassword.html",
        //controller : loginController
    })
        .state('user',{
            url : '',
            abstract : true,
            templateUrl : "usertemplates/user.html",
            controller : userDashboardController

        })

    .state('user.profile',{
        url : '/user-profile',
        templateUrl : "usertemplates/userDashboard.html",
    })
    .state('user.addProduct', {
        url: '/addProduct',
        templateUrl: "usertemplates/addProduct.html",
    })

    .state('user.allProducts', {
            url: '/user-products',
            templateUrl: "usertemplates/userproducts.html",
             controller : userProductsController

    })

    .state('user.resetPassword',{
        url : '/reset-password',
        templateUrl : "usertemplates/resetPassword.html",
        //controller : loginController
    });


});