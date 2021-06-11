import Game from "./Game.js";
import GameViwe from "./GameViwe.js";

let game = new Game();
let gameViwe = new GameViwe(document.getElementById("app"));


//define functtions
gameViwe.onTileClick = (i)=>{
       game.makeMove(i);
       gameViwe.update(game);
}

gameViwe.onRestartClick = function(){
       game = new Game();
       gameViwe.update(game);
}

gameViwe.update(game);