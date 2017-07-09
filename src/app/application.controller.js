angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$timeout', '$mdMedia'];

    function ApplicationController($timeout, $mdMedia) {
        let vm = this;

        vm.menuIsOn = false;

        vm.showMenu = () => {
            $timeout(() => {
                vm.menuIsOn = true;
            }, 500);
        }

        vm.letters = [
            ['X', 'V', 'H', 'G', '5'],
            ['F', '4', 'O', 'C', 'F']
        ];

        return vm;
    }