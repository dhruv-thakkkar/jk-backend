/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { User, UserDocument } from '../models/user.models';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly UserModel: Model<UserDocument>,
  ) {}

  //  reading the user collection
  async readUser() {
    console.log("user--->",this.UserModel)
    return this.UserModel.find({})
      .then((user) => {
        return user;
      })
      .catch((err) => console.log(err));
  }

  async createUser(user: User): Promise<User>{
    const newUser = new this.UserModel(user)
    return newUser.save()
 }

}
