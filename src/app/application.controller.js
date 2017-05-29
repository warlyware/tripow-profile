angular.module('tripow')
    .controller('ApplicationController', ApplicationController);

    ApplicationController.$inject = ['$mdMedia'];

    function ApplicationController($mdMedia) {
        var vm = this;

        const fonts = [
            'asset',
            'exo',
            'archivo-black',
            'cinzel',
            'kanit',
            'paytone-one',
            'syncopate',
            'limelight'

        ];
        let currentFontIndex = 0;
        vm.currentFont = fonts[currentFontIndex];

        vm.changeFont = () => {
            if (currentFontIndex === fonts.length - 1) {
                currentFontIndex = 0;
            } else {
                currentFontIndex += 1;
            }
            vm.currentFont = fonts[currentFontIndex];
        }

        return vm;
    }