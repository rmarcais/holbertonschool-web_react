import { Map } from 'immutable';

const map = new Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

const map2 = map.set(2, 'Benjamin').set(4, 'Olivier');

export { map, map2 };
