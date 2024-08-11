import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const getCurrentUser = await this.userService.findOne(username);
    if (getCurrentUser.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: getCurrentUser.userId,
      username: getCurrentUser.username,
    };
    return { access_token: await this.jwtService.signAsync(payload) };
  }
}
