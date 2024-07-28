import { IUser } from '../models/interface/userInterface';
import { User } from '../models/UserSchema';

export const resolvers = {
  Mutation: {
    async createUser(_: any, {userInput: { firstName, lastName, email, password }}: any) {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password
      });
      const res = await newUser.save();
      return {
        id: res.id,
        ...(res._doc as IUser)
      };
    }
  }
};
