import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserSchema } from '../models/user.models';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://dnt1997:vOJI8EnkMG2P9dEL@cluster0.x7bzfmo.mongodb.net/jktravelwold?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([
      {
        name: 'user',
        schema: UserSchema,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
