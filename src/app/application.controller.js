import { BackgroundColorLerper } from './components/bg-color-lerper';

angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$timeout', '$mdMedia', '$mdDialog'];

    function ApplicationController($timeout, $mdMedia, $mdDialog) {
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

        vm.showVideoDialog = ($event) => {
            $mdDialog.show({
                template: `<div style="position:relative;height:0;padding-bottom:56.25%">
                <iframe src="https://www.youtube.com/embed/XIaBehpmIoA?ecver=2" width="640" height="360"
                frameborder="0" style="position:absolute;width:100%;height:100%;left:0" allowfullscreen></iframe>
                </div>`,
                targetEvent: $event,
                clickOutsideToClose: true,
            });
        }

        return vm;
    }