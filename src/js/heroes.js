export class Character {
  constructor(name, type, attack, defence) {
    const heroes = [
      'Bowman',
      'Swordsman',
      'Magician',
      'Daemon',
      'Undead',
      'Zombie'
    ];

    if (name && 2 <= name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Name must have lenght from 2 to 10 symbols');
    }
    if (heroes.includes(type)) {
      this.type = type;
    } else {
      throw new Error("Don't right type of person");
    }

    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }

  get attackAction() {
    return this.attack;
  }

  set attackAction(cells) {
    if (cells > 0) {
      const val = this.attack - (this.attack * (cells - 1)) / 10;
      this.attack = val > 0 ? val : 0;
    } else {
      throw new Error('Дистанция атаки не корректна');
    }
  }

  get stonedAction() {
    return this.attack;
  }

  set stonedAction(cells) {
    if (cells > 0) {
      this.attackAction = cells;
      const val = this.attack - Math.log2(cells) * 5;
      this.attack = val > 0 ? val : 0;
    } else {
      throw new Error('Дистанция одурманивания не корректна');
    }
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
  get attackAction() {
    return super.attackAction;
  }

  set attackAction(cells) {
    super.attackAction = cells;
  }

  get stonedAction() {
    return super.stonedAction;
  }

  set stonedAction(cells) {
    super.stonedAction = cells;
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
  get attackAction() {
    return super.attackAction;
  }

  set attackAction(cells) {
    super.attackAction = cells;
  }

  get stonedAction() {
    return super.stonedAction;
  }

  set stonedAction(cells) {
    super.stonedAction = cells;
  }
}
