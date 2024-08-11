import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
} from '@nestjs/common';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorators';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() user: AuthDto) {
    return this.authService.signIn(user?.username, user?.password);
  }

  @Get('profile')
  Profile(@Request() req) {
    return req.user;
  }

  @Public()
  @Get('users')
  Users() {
    return this.authService.users();
  }
}
