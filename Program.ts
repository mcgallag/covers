
import * as PIXI from "pixijs";
import Output from "./Output";
import Game from "./Game";

class Program
{
    public static Main(): void

    {
        let game = new Game();
    }
}

// Debug Version
Program.Main();

// Release Version
// window.onload = () => Program.Main();
