import Game from "./Game.js";
import GameViwe from "./GameViwe.js";

let game = new Game();
let gameviwe = new GameViwe();

game.makeMove(3);//X
game.makeMove(9);//O
game.makeMove(4);//X
game.makeMove(7);//O
game.makeMove(5);//X
console.log(game.board);
console.log(game.findWinningComintion());
