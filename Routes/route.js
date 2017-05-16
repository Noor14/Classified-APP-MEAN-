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
        .state('signUp',{
            url : '/register',
            templateUrl : "templates/signup.html",
            controller : signUpController
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

        })

    .state('user.dashboard',{
        url : '/user-dashboard',
        templateUrl : "usertemplates/userDashboard.html",
        controller : 'userDashboardController'

    })
    .state('user.addProduct', {
        url: '/addProduct',
        templateUrl: "usertemplates/addProduct.html",
        controller:"addProductController"
    })
    .state('user.profileInfo', {
            url: '/user-profile',
            templateUrl: "usertemplates/profileInfo.html",
            controller:"userInfoController"
    })

    .state('user.allProducts', {
            url: '/user-products',
            templateUrl: "usertemplates/userproducts.html",
             controller : 'userProductsController'

    })

    .state('user.resetPassword',{
        url : '/reset-password',
        templateUrl : "usertemplates/resetPassword.html",
        //controller : loginController
    });


});