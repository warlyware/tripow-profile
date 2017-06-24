export class BackgroundColorLerper {

    constructor(
        colors,
        canvas,
        currentColor,
        nextColor,
        lerpIndex,
        shifted,
        counter,
        sketchInstance
    ) { ; }

    init() {
        this.lerpIndex = 0;
        this.shifted = false;

        this.colors = [
            {
                name: 'dark-blue',
                hex: '#5070F3'
            }, {
                name: 'light-blue',
                hex: '#71AAD5'
            }
        ];
    }

    run() {
        let sketch = (sI) => {
            this.sketchInstance = sI;
            this.sketchInstance.setup = () => {
                this.currentColor = this.colors[0];
                this.nextColor = this.colors[1];
                this.canvas = this.sketchInstance.createCanvas(window.innerWidth, window.innerHeight);
            }

            this.sketchInstance.draw = () => {
                let bgColor;
                this.counter = (this.sketchInstance.millis() / 10000) % 1;
                this.lerpIndex = this.counter;
                if (this.counter >= 0.98) {
                    this.lerpIndex = 0;
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
                        this.lerpIndex
                    );
                    this.sketchInstance.background(this.bgColor);
                }
            }

            this.sketchInstance.windowResized = () => {
                this.sketchInstance.resizeCanvas(window.innerWidth, window.innerHeight);
            }
        }
        let myP5 = new p5(sketch);
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