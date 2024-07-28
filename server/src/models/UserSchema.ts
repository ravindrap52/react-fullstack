import { model, Schema } from 'mongoose';
import { IUser } from './interface/userInterface';

const userSchema: Schema = new Schema<IUser>({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  }
});
export const User = model('User', userSchema);