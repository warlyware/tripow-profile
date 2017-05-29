angular.module('tripow', ['ngMaterial']);

angular.module('tripow').run(() => {
    console.log('i am angular!');

    let canvas;
    let colorA;
    let colorB;
    let lerpIndex = 0;
    let switching = false;
    let counter;

    let sketch = (sketchInstance) => {
        sketchInstance.setup = () => {
            colorA  = sketchInstance.color('#71AAD5');
            colorB  = sketchInstance.color('#CFCFCF');
            canvas = sketchInstance.createCanvas(window.innerWidth, window.innerHeight);
        }

        sketchInstance.draw = () => {
            let bgColor;
            counter = (sketchInstance.millis() % 5000)/5000.0;
            if (counter > 0.95) {
                lerpIndex = 0;
                switching = true;
                swapColors(colorA, colorB);
            } else {
                lerpIndex = counter;
                bgColor = sketchInstance.lerpColor(colorA, colorB, lerpIndex);
                sketchInstance.background(bgColor);
            }
            console.log('counter', counter);
            console.log('lerpIndex', lerpIndex);
        }
    }

    function swapColors() {
        let tempA = colorA;
        let tempB = colorB;
        colorA = tempB;
        colorB = tempA;
    }

	let myP5 = new p5(sketch);

});