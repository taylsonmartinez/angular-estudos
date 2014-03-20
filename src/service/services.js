/* 
Um 'Service' em Angular é um singleton, isto é, temos uma única instância para toda a aplicação. Serviços podem ser compartilhados em toda nossa aplicação, inclusive em controllers quando precisam compartilhar código em comum.
*/

angular.module('services', ['ngResource'])
    .factory('FuncionarioService', function($resource) {
        return $resource('/funcionarios/:id');
    }
);