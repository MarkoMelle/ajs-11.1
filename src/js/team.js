/* eslint-disable no-plusplus */
export default class Team {
  constructor() {
    this.Chars = [];
  }

  addChar(char) {
    this.Chars.push(char);
  }

  [Symbol.iterator]() {
    let current = 0;
    const last = this.Chars.length;
    return {
      next: () => {
        if (current < last) {
          return { value: this.Chars[current++], done: false };
        }
        return { done: true };
      },
    };
  }
}
