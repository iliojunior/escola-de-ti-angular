angular
    .module('pessoa')
    .controller('PessoaListController', PessoaListController);

function PessoaListController($scope, PessoaService) {
    function init() {
        PessoaService
            .getPessoas()
            .then(function (response) {
                $scope.pessoas = response.data;
            })
            .catch(function (error) {

            });
    }

    init()

}