define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var assetIndex = "assets.json";
    var Program = /** @class */ (function () {
        function Program() {
            this.loadAssetIndex();
            // this.game = new Game();
        }
        Program.Main = function () {
            // this.loadAssetIndex();
            var program = new Program();
        };
        Program.prototype.loadAssetIndex = function () {
            window.fetch(document.URL + assetIndex)
                .then(function (response) {
                if (response.ok) {
                    response.json()
                        .then(function (assetObj) {
                        console.log(assetObj.assets.length);
                    });
                }
            });
        };
        return Program;
    }());
    // Debug Version
    Program.Main();
});
// Release Version
// window.onload = () => Program.Main();
//# sourceMappingURL=Program.js.map