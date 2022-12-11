/* eslint-disable no-plusplus */
export default class Team {
  #counter = 0;

  addChar(char) {
    this[`char${this.#counter++}`] = char;
  }

  [Symbol.iterator]() {
    const thisObj = this;
    let current = 0;
    const last = this.#counter;
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
