angular.module('starter.services', [])
.constant("configs",{
    "enderecoapi":"http://138.197.191.31:3000/v1/"
})
.factory('Auth',function($http, configs, $state){
    return{
        login: function (email, password) {
            return $http.post(configs.enderecoapi + 'auth/signin', {
                email : email,
                password: password
            });
        },
        cadastro: function(){
            return true;
        },
        verificaLogin: function(usuario){
            return this.login(usuario.username, usuario.password).then(
                function(response){
                    console.log('OK!');
                    console.log(response);
                    return response.data;
                },
                function(error){
                    console.log('ERRO!');
                    console.log(error);
                    return response.error;
                });
        },
        salvaLocalStorage: function(nome, valor){
            localStorage.setItem(nome, valor);
        }
    }
})