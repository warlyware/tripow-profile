angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$mdMedia'];

    function ApplicationController($mdMedia) {
        let vm = this;

        return vm;
    }