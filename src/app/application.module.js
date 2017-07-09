import { BackgroundColorLerper } from './components/bg-color-lerper';

angular.module('tripow', ['ngMaterial', 'ngAnimate']);

angular.module('tripow').run(() => {

    let bgColorLerper = new BackgroundColorLerper;
    bgColorLerper.init();
    bgColorLerper.run();

});

angular.module('tripow').config(($mdThemingProvider) => {
    let theme = $mdThemingProvider.extendPalette('indigo', {
        '500': '#fff',
        '600': '#828282',
    });

  // Register the new color palette map with the name <code>neonRed</code>
  $mdThemingProvider.definePalette('tripowTheme', theme);

  // Use that theme for the primary intentions
  $mdThemingProvider.theme('default')
    .primaryPalette('tripowTheme');

});