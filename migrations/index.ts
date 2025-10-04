import * as migration_20251004_212320 from './20251004_212320';

export const migrations = [
  {
    up: migration_20251004_212320.up,
    down: migration_20251004_212320.down,
    name: '20251004_212320'
  },
];
