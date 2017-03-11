var modulo = angular.module('pessoa');

modulo.config(config)

function config($stateProvider) {
    $stateProvider
        .state('pessoa-create', {
            url: '/pessoa/create',
            controller: 'PessoaCreateController',
            templateUrl: 'modules/pessoa/pessoa-create.html'
        })
        .state('pessoa-create', {
            url: '/pessoa/list',
            controller: 'PessoaListController',
            templateUrl: 'modules/pessoa/pessoa-list.html'
        });
}
