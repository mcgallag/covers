import * as PIXI from "pixijs";
import Output from "./Output";
import Game from "./Game";

const assetIndex = "assets.json";

class Program {
  private game: Game;

  public static Main(): void {
    // this.loadAssetIndex();
    let program = new Program();
  }
  
  constructor() {
    this.loadAssetIndex();
    // this.game = new Game();
  }

  private loadAssetIndex() {
    window.fetch(document.URL + assetIndex)
      .then(response => {
        if (response.ok) {
          response.json()
            .then(assetObj => {
              console.log(assetObj.assets.length);
            });
        }
      });
  }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();