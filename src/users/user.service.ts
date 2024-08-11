import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users: [
    { id: 1; username: 'Seun'; password: 'testing' },
    { id: 1; username: 'Samuel'; password: 'testing123' },
  ];
  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
