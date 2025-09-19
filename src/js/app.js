import { Team } from './set';
import { Character } from './heroes';
import { Bowman } from './heroes';
import { Swordsman } from './heroes';
import { Magician } from './heroes';
import { Daemon } from './heroes';
import { Undead } from './heroes';

let daemon = new Character('Vasily', 'Daemon', 10);
// daemon.stoned
console.log(daemon.attackAction);
console.log(daemon.attackAction = 2);
console.log(daemon.attackAction);
console.log(daemon.attackAction = 2);
console.log(daemon.attackAction);

let daemon2 = new Character('Peter', 'Daemon', 100);

console.log('-->>',daemon2.stonedAction);
console.log((daemon2.stonedAction = 2));
console.log(daemon2.stonedAction);

let daemon3 = new Daemon('Peter');
console.log('->',daemon3.attackAction);
console.log(daemon3.attackAction = 2);
console.log(daemon3.attackAction);
console.log((daemon3.stonedAction = 2));
console.log(daemon3.stonedAction);


let daemon4 = new Character('Pet', 'Daemon', 10);
console.log('-->',daemon4.stonedAction);
console.log((daemon4.stonedAction = 2));
console.log(daemon4.stonedAction);

let daemon13 = new Daemon('Peter');
console.log('---->',daemon13.attackAction);
console.log(daemon13.attackAction = 2);
console.log(daemon13.attackAction);
console.log((daemon13.stonedAction = 2));
console.log(daemon13.stonedAction);




