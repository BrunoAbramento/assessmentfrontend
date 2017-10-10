angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Auth) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    Auth.verificaLogin($scope.loginData).then(ret => {
      console.log('voltei com:');
      console.log;
      Auth.salvaLocalStorage(JSON.stringify(ret.data));
      Auth.salvaLocalStorage("token",ret.token);
    });
    
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('CachorroCtrl', function($scope){
  $scope.animais =[{
    "id":"1",
    "nome":"Doge",
    "descricao":"Descrição genérica",
    "contato":"12345678",
    "imagem":"http://i0.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
  }];
})

.controller('CachorrosCtrl', function($scope){
  $scope.animais = [{
    "id":"1",
    "nome":"Doge",
    "descricao":"Descrição genérica",
    "contato":"12345678",
    "imagem":"http://i0.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg"
  },
  {
    "id":"2",
    "nome":"Doggo",
    "descricao":"Descrição genérica",
    "contato":"12345678",
    "imagem":"https://www.shitpostbot.com/img/sourceimages/happy-doggo-57b1df2fb27db.jpeg"
  },
  {
    "id":"3",
    "nome":"MoonMoon",
    "descricao":"Descrição genérica",
    "contato":"12345678",
    "imagem":"https://i.imgflip.com/11fr5c.jpg"
  },
  {
    "id":"4",
    "nome":"Corgo",
    "descricao":"Descrição genérica",
    "contato":"12345678",
    "imagem":"http://i.imgur.com/V43tnAC.png"
  }];
})
.controller('GatosCtrl', function($scope){
  $scope.animais = [];
})
.controller('PerfilCtrl', function($scope){
  
});