import { ConfigService } from '@nestjs/config';

export class Helper {
  constructor(private configService: ConfigService) {}

  getSecret(): string {
    return this.configService.get<any>('JWT_SECRET');
  }
  getPort(): number {
    const port = this.configService.get<number>('PORT');
    return port || 3001;
  }
}
