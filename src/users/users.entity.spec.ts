import { Users } from './users.entity';

describe('Users', () => {
  it('should be defined', () => {
    expect(new Users()).toBeDefined();
  });
});
