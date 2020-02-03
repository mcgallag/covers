define(["require", "exports", "pixijs", "Util"], function (require, exports, PIXI, Util_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Game = /** @class */ (function () {
        function Game() {
            var _this = this;
            //private _imagePath = "https://dl.dropboxusercontent.com/s/o962271u2hnx70k/cat.png";
            this._imagePath = "https://raw.githubusercontent.com/8Observer8/8observer8.github.io/master/Assets/LearnPixiJS/Images/cat.png";
            //Create a Pixi Application
            this._app = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                antialias: true,
                transparent: true,
                resolution: 1
            });
            //Add the canvas that Pixi automatically created for you to the HTML document
            document.body.appendChild(this._app.view);
            //load an image and run the `setup` function when it's done
            PIXI.Loader.shared
                .load()
                .add(this._imagePath)
                .load(function () { return _this.Setup(); });
        }
        //This `setup` function will run when the image has loaded
        Game.prototype.Setup = function () {
            //Create the cat sprite
            var cat = new PIXI.Sprite(PIXI.Loader.shared.resources[this._imagePath].texture);
            cat.transform.position.x = 500;
            cat.transform.position.y = 100;
            cat.transform.pivot.x = cat.width / 2;
            cat.transform.pivot.y = cat.height / 2;
            var x = Util_1.map(0.0, -1.0, 1.0, 0.0, 500.0);
            console.log("yayyyy?? " + x);
            //You can also create the `cat` sprite from the texture, like this:
            // let cat = new PIXI.Sprite(PIXI.utils.TextureCache["images/cat.png"]);
            //Add the cat to the stage
            this._app.stage.addChild(cat);
            // This code does not work
            //If you ever need to, here's how you can clean out WebGL's GPU
            //memory manually
            // Object.keys(PIXI.utils.TextureCache).forEach((texture) =>
            // {
            //     PIXI.utils.TextureCache[texture].destroy(true);
            // });
        };
        return Game;
    }());
    exports.default = Game;
});
//# sourceMappingURL=Game.js.map