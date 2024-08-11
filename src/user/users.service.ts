import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersServices {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'testing',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'testing123',
    },
  ];

  findOneUser(username: string) {
    return this.users.find((user) => user.username === username);
  }

  findAllUsers() {
    return this.users;
  }
}
