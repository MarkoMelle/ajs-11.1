import Character from '../char';
import Team from '../team';

test('should iterize the characters', () => {
  const received = [];
  const team = new Team();
  team.addChar(new Character('Демон', 'Demon'));
  team.addChar(new Character('Лучник', 'Bowman'));
  for (const char of team) {
    received.push(char);
  }
  const expected = [{
    name: 'Демон', type: 'Demon', health: 100, level: 1, attack: 40, defence: 10,
  },
  {
    name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 40, defence: 10,
  }];
  expect(received).toEqual(expected);
});
