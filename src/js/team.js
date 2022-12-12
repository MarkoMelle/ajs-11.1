/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.chars = [];
  }

  addChar(char) {
    this.chars.push(char);
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.chars.length;
    return {
      next: () => {
        if (current < last) {
          return { value: this.chars[current++], done: false };
        }
        return { done: true };
      },
    };
  }
}
