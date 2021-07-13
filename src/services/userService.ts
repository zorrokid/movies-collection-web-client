import { LogIn } from "../models/login";
import { User } from "../models/user";
import { buildUri } from '../utils/uriBuilder';
import { fetchAsync } from '../utils/fetchUtil';
const registerUri = buildUri('Users/register');
const authenticateUri = buildUri('Users/authenticate');

export const register = async (user: User) => fetchAsync(registerUri, 'POST', user);
export const logIn = async (logIn: LogIn) => fetchAsync(authenticateUri, 'POST', logIn);