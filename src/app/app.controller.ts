import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from 'src/models/user.models';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  readUser() {
    return this.appService.readUser();
  }

  @Post('/user')
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }
}