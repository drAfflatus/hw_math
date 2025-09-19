export class Team {
  constructor() {
    this.members = new Set();
  }

  inspect(A) {
    return !this.toArray(this.members).find(
      (eltA) => eltA.type === A.type && eltA.name === A.name
    );
  }

  add(pers) {
    if (this.inspect(pers)) {
      this.members.add(pers);
    } else {
      throw new Error('Этот персонаж уже есть в команде');
    }
  }

  addAll(...perss) {
    for (const elts of perss) {
      if (this.inspect(elts)) {
        this.members.add(elts);
      }
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
