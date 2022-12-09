import Team from '../team';

test('should iterize the characters', () => {
  const charsArr = [
    {
      name: 'Демон', type: 'Demon', health: 50, level: 1, attack: 40, defence: 10,
    },
    {
      name: 'Лучник', type: 'Bowman', health: 50, level: 2, attack: 40, defence: 10,
    },
  ];
  const received = [];
  const team = new Team(charsArr);
  for (const char of team) {
    received.push(char);
  }
  const expected = [{
    name: 'Демон', type: 'Demon', health: 50, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Лучник', type: 'Bowman', health: 50, level: 2, attack: 40, defence: 10,
  }];
  expect(received).toEqual(expected);
});
