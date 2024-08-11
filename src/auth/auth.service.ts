import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersServices } from 'src/user/users.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersServices,
    private jwtService: JwtService,
  ) {}
  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = this.userService.findOneUser(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  users() {
    return this.userService.findAllUsers();
  }
}
