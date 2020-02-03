define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function map(old, oldmin, oldmax, newmin, newmax) {
        return ((old - oldmin) * (newmax - newmin)) / (oldmax - oldmin) + newmin;
    }
    exports.map = map;
});
//# sourceMappingURL=Util.js.map