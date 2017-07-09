export class BackgroundColorLerper {

    constructor(
        colors,
        canvas,
        currentColor,
        nextColor,
        lerpOn,
        shifted,
        counter,
        fadeCounter,
        sketchInstance,
        tripowElement,
        fontSize,
        opacity
    ) { ; }

    init() {
        this.counter = 0;
        this.fadeCounter = 0;
        this.shifted = false;
        this.fontSize = 56;
        this.opacity = 1;

        this.colors = [
            {
                name: 'dark-blue',
                hex: '#5070F3'
            }, {
                name: 'red',
                hex: '#FC5E5F'
            }
        ];
    }

    run() {
        let sketch = (sI) => {
            this.sketchInstance = sI;
            this.sketchInstance.setup = () => {
                this.setupSketch();
            }

            this.sketchInstance.draw = () => {
                this.drawSketch();
            }

            this.sketchInstance.windowResized = () => {
                this.sketchInstance.resizeCanvas(window.innerWidth, window.innerHeight);
            }
        }
        let myP5 = new p5(sketch);
    }

    setupSketch() {
        this.currentColor = this.colors[0];
        this.nextColor = this.colors[1];
        this.canvas = this.sketchInstance.createCanvas(window.innerWidth, window.innerHeight);
        this.canvas.parent('canvas');
        this.tripowElement = this.sketchInstance.select('#tripow');
        this.tripowElement.mousePressed(() => {
            this.handleTripowClick();
        });
        this.sketchInstance.background(this.sketchInstance.color('#000'));
        this.lerpOn = true;
    }

    drawSketch() {
        let bgColor;
        this.counter = (this.sketchInstance.millis() / 10000) % 1;
        if (this.lerpOn) {
            this.lerpBackgroundColor();
        } else {
            this.fadeToBlack();
        }
    }

    handleTripowClick() {
        this.lerpOn = false;
    }

    lerpBackgroundColor() {
        if (this.counter >= 0.98) {
            this.counter = 0;
            if (!this.shifted) {
                this.shiftColors(this.sketchInstance);
                this.sketchInstance.background(this.sketchInstance.color(this.currentColor.hex));
                this.shifted = true;
            }
        } else {
            this.shifted = false;
            this.bgColor = this.sketchInstance.lerpColor(
                this.sketchInstance.color(this.currentColor.hex),
                this.sketchInstance.color(this.nextColor.hex),
                this.counter
            );
            this.sketchInstance.background(this.bgColor);
        }
    }

    fadeToBlack() {
        if (this.fadeCounter < 1) {
            this.fadeCounter += .005;
            this.bgColor = this.sketchInstance.lerpColor(
                this.sketchInstance.color(this.bgColor),
                this.sketchInstance.color('#000'),
                this.fadeCounter
            );
            this.sketchInstance.background(this.bgColor);
        }
        if (this.fadeCounter > 0.1) {
            this.fontSize += 0.25;
            this.opacity -= 0.05;
            this.tripowElement.style('font-size', `${this.fontSize}px`);
            this.tripowElement.style('opacity', `${this.opacity}`);
        }
    }

    shiftColors(sketchInstance) {
        if (this.currentColor.name == this.colors[0].name) {
            this.currentColor = this.colors[1];
            this.nextColor = this.colors[0];
        } else {
            this.currentColor = this.colors[0];
            this.nextColor = this.colors[1];
        }
    }

}