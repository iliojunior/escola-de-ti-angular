angular
    .module('pessoa')
    .factory('PessoaService', PessoaService)

function PessoaService($http) {

    var HOST = 'http://escola-de-ti.herokuapp.com/person'

    function save(pessoa) {
        $http({
            method: 'POST',
            url: HOST + '/create',
            data: pessoa
        });
    }

    var factory = {
        save: save
    };

    return factory;
}