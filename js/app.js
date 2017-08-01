var myapp=angular.module("myapp",["ionic","mycart"]);
myapp.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
   $ionicConfigProvider.backButton.text("返回");
    $ionicConfigProvider.backButton.previousTitleText("返回");


    //android tabs在底部
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('bottom');//默认为left

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');


    $stateProvider.state("tabs",{
        url:"/tabs",
        abstract:true,
        templateUrl:"views/tabs/tabs.html"
    });
    $stateProvider.state("tabs.home",{
        url:"/home",
        views:{"tabs-home":{
            templateUrl:"views/home/home.html",
            controller:"homeCtrl"
        }}
    });
    $stateProvider.state("tabs.activity",{
        url:"/activity",
        views:{"tabs-home":{
            templateUrl:"views/activity/activity.html"
        }}
    });
    //菜谱路由
    $stateProvider.state("tabs.cookmain",{
        url:"/cookmain",
        views:{"tabs-home":{
            templateUrl:"views/cookbook/cookmain.html"
        }}
    });
    //菜谱下的详细菜单路由
    $stateProvider.state("tabs.cookbook",{
        url:"/cookbook",
        views:{"tabs-home":{
            templateUrl:"views/cookbook/cookbook.html"
        }}
    });

    $stateProvider.state("tabs.chat",{
        url:"/chat",
        views:{"tabs-chat":{
            templateUrl:"views/chat/chat.html",
            controller:"chatCtrl"
        }}
    });
    $stateProvider.state("tabs.location",{
        url:"/location",
        views:{"tabs-location":{
            templateUrl:"views/location/location.html",
            controller:"locationCtrl"

        }}
    });
    $stateProvider.state("tabs.cart",{
        url:"/cart",
        views:{"tabs-cart":{
            templateUrl:"views/cart/cart.html",
            controller:"cartCtrl"
        }}
    });
    $stateProvider.state("tabs.checkout",{
        url:"/checkout",
        views:{"tabs-cart":{
            templateUrl:"views/cart/checkoutSummary.html",
            controller:"checkoutCtrl"
        }}
    });
    $stateProvider.state("tabs.order",{
        url:"/placeorder",
        views:{"tabs-cart":{
            templateUrl:"views/cart/placeOrder.html"
        }}
    });
    $stateProvider.state("tabs.complete",{
        url:"/complete",
        views:{"tabs-cart":{
            templateUrl:"views/cart/complete.html",
            controller:"cartCtrl"
        }}
    });
    $urlRouterProvider.otherwise("/tabs/home")
})