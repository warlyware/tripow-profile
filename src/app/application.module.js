angular.module('tripow', ['ngMaterial']);

angular.module('tripow').run(() => {
    console.log('i am angular!');

    var colors = [
        {
            name: 'blue',
            hex: '#71AAD5'
        }, {
            name: 'grey',
            hex: '#CFCFCF'
        }
    ];

    let canvas;
    let currentColor;
    let nextColor;
    let lerpIndex = 0;
    let shifted = false;
    let counter;

    let sketch = (sketchInstance) => {
        sketchInstance.setup = () => {
            currentColor = colors[0];
            nextColor = colors[1];
            canvas = sketchInstance.createCanvas(window.innerWidth, window.innerHeight);
        }

        sketchInstance.draw = () => {
            let bgColor;
            counter = (sketchInstance.millis() / 10000) % 1;
            lerpIndex = counter;
            console.log('counter', counter);
            console.log('lerpIndex', lerpIndex);
            if (counter >= 0.95) {
                lerpIndex = 0;
                if (!shifted) {
                    shiftColors(sketchInstance);
                    sketchInstance.background(sketchInstance.color(currentColor.hex));
                    shifted = true;
                }
            } else {
                shifted = false;
                bgColor = sketchInstance.lerpColor(
                    sketchInstance.color(currentColor.hex),
                    sketchInstance.color(nextColor.hex),
                    lerpIndex
                );
                sketchInstance.background(bgColor);
            }
        }
    }
	let myP5 = new p5(sketch);

    function shiftColors(sketchInstance) {
        if (currentColor.name == colors[0].name) {
            currentColor = colors[1];
            nextColor = colors[0];
        } else {
            currentColor = colors[0];
            nextColor = colors[1];
        }
    }

});