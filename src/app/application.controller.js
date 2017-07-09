import { BackgroundColorLerper } from './components/bg-color-lerper';

angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$timeout', '$mdMedia'];

    function ApplicationController($timeout, $mdMedia) {
        let vm = this;

        vm.menuIsOn = false;
        vm.canvasReady = true;
        vm.$mdMedia = $mdMedia;

        vm.showMenu = () => {
            $timeout(() => {
                vm.canvasReady = false;
                vm.menuIsOn = true;
            }, 500);
        }

        vm.closeMenu = () => {
            vm.menuIsOn = false;
            $timeout(()=> {
                vm.canvasReady = true;
                let bgColorLerper = new BackgroundColorLerper;
                bgColorLerper.init();
                bgColorLerper.run();
            }, 600);
        }

        return vm;
    }