angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$timeout', '$mdMedia'];

    function ApplicationController($timeout, $mdMedia) {
        let vm = this;

        vm.menuIsOn = false;
        vm.$mdMedia = $mdMedia;

        vm.showMenu = () => {
            $timeout(() => {
                vm.menuIsOn = true;
            }, 500);
        }

        return vm;
    }