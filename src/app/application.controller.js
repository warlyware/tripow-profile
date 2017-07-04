angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$mdMedia'];

    function ApplicationController($mdMedia) {
        let vm = this;

        vm.letters = [
            ['X', 'V', 'H', 'G', '5'],
            ['F', '4', 'O', 'C', 'F']
        ];

        return vm;
    }