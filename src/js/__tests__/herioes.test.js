import { Character } from '../heroes';
import { Bowman } from '../heroes';
import { Swordsman } from '../heroes';
import { Magician } from '../heroes';
import { Daemon } from '../heroes';
import { Undead } from '../heroes';
import { Zombie } from '../heroes';

test('search errors', () => {
  expect(function() {
    new Zombie('');
  }).toThrow(new Error('Name must have lenght from 2 to 10 symbols'));

  expect(function() {
    new Character('homo', '');
  }).toThrow(new Error("Don't right type of person"));
});

test('test for objects', () => {
  expect(new Character('Monster', 'Daemon')).toEqual({
    name: 'Monster',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined
  });

  expect(new Bowman('BBBB')).toEqual({
    name: 'BBBB',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });

  expect(new Swordsman('SSSS')).toEqual({
    name: 'SSSS',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });

  expect(new Magician('MMMM')).toEqual({
    name: 'MMMM',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });

  expect(new Daemon('DDDD')).toEqual({
    name: 'DDDD',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40
  });

  expect(new Undead('UUUU')).toEqual({
    name: 'UUUU',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25
  });

  expect(new Zombie('ZZZZ')).toEqual({
    name: 'ZZZZ',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10
  });
});


test('проверка атаки', () => {
    let daemon = new Character('Vasia', 'Daemon', 100)
    expect(daemon.attackAction).toBe(100)
    expect(daemon.attackAction = 2).toBe(2)
    expect(daemon.attackAction).toBe(90)
    expect(daemon.attackAction = 20).toBe(20)
    expect(daemon.attackAction).toBe(0)
   
    let magician = new Character('Pedro', 'Magician', 100)
    expect(magician.attackAction).toBe(100)
    expect(magician.attackAction = 2).toBe(2)
    expect(magician.attackAction).toBe(90)
    expect(magician.attackAction = 20).toBe(20)
    expect(magician.attackAction).toBe(0)
   
})

test('проверка дурмана', () => {
    let daemon = new Character('Boris', 'Daemon', 100)
    expect(daemon.stonedAction).toBe(100)
    expect(daemon.stonedAction = 2).toBe(2)
    expect(daemon.stonedAction).toBe(85)

    let magician = new Character('Nick', 'Magician', 100)
    expect(magician.stonedAction).toBe(100)
    expect(magician.stonedAction = 2).toBe(2)
    expect(magician.stonedAction).toBe(85)
})

test('строим и атакуем мага Васю', () => {
    let magician1 = new Magician('Vasia')
    expect(magician1.attackAction).toBe(10)
    expect(magician1.attackAction = 2).toBe(2)
    console.log(magician1.attackAction);
    expect(magician1.attackAction).toBe(9)
    
})

test('строим и атакуем демона Жору', () => {
    let daemon1 = new Daemon('Жорж')
    expect(daemon1.attackAction).toBe(10)
    expect(daemon1.attackAction = 2).toBe(2)
    console.log(daemon1.attackAction);
    expect(daemon1.attackAction).toBe(9)

})

test('строим и атакуем демона дурманом ДДД', () => {
    let daemon = new Daemon('ДДД')
    expect(daemon.stonedAction).toBe(10)
    expect(daemon.stonedAction = 2).toBe(2)
    expect(daemon.stonedAction).toBe(4)
    expect(daemon.stonedAction = 20).toBe(20)
    expect(daemon.stonedAction).toBe(0)
})

test('строим и атакуем мага дурманом МММ', () => {
    let magician = new Magician('МММ')
    expect(magician.stonedAction).toBe(10)
    expect(magician.stonedAction = 2).toBe(2)
    expect(magician.stonedAction).toBe(4)
    expect(magician.stonedAction = 20).toBe(20)
    expect(magician.stonedAction).toBe(0)
})

test('вылет по ошибке', () => {
    let daemon = new Character('Piter', 'Daemon', 100)
    expect(daemon.attackAction).toBe(100)
    expect(function() {
        daemon.attackAction = 0
    }).toThrow(new Error('Дистанция атаки не корректна'));
    expect(function() {
        daemon.stonedAction = 0
    }).toThrow(new Error('Дистанция одурманивания не корректна'));
})
