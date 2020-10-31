import { UsersEntity } from './users.entity';

describe('Users', () => {
  it('should be defined', () => {
    expect(new UsersEntity()).toBeDefined();
  });
});
