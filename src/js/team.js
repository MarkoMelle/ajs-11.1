/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.char0 = {
      name: 'Демон', type: 'Demon', health: 50, level: 1, attack: 40, defence: 10,
    };
    this.char1 = {
      name: 'Лучник', type: 'Bowman', health: 50, level: 2, attack: 40, defence: 10,
    };
  }

  [Symbol.iterator]() {
    const thisObj = this;
    let current = 0;
    const last = 2;
    return {
      next() {
        const id = `char${current}`;
        if (current < last) {
          current++;
          return { value: thisObj[id], done: false };
        }
        return { done: true };
      },
    };
  }
}
