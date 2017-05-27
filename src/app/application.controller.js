angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$mdMedia'];

    function ApplicationController($mdMedia) {
        var vm = this;

        vm.isXs = () => {
            return $mdMedia('xs');
        }

        vm.isSm = () => {
            return $mdMedia('xs');
        }
    }