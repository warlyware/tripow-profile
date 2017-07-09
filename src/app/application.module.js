import { BackgroundColorLerper } from './components/bg-color-lerper';

angular.module('tripow', ['ngMaterial', 'ngAnimate']);

angular.module('tripow').run(() => {

    let bgColorLerper = new BackgroundColorLerper;
    bgColorLerper.init();
    bgColorLerper.run();

});