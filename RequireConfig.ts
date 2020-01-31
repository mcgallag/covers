requirejs.config({
    baseUrl: "",
    paths: {
        "pixijs": "https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.2.1/pixi.min"
    },
    shim: {
        "pixijs": {
            exports: "PIXI"
        }
    }
});

requirejs(["Program"], () => { });