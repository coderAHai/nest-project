import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getUserList() {
    return await this.userService.findAllUser();
  }

  @Get('config')
  async getConfig() {
    const host = this.configService.get('DB_HOST');
    const port = this.configService.get('DB_PORT');
    return { host, port };
  }
}
