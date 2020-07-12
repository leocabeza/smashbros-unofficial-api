import { NowRequest, NowResponse } from '@vercel/node'

/* using require, because this is closed but not fixed: https://github.com/Microsoft/TypeScript/issues/25400 */
const characters = require('./characters.json');
import ICharacter from './interface';

const charactersList = (req: NowRequest, res: NowResponse) => {
  const matchingCharacters: ICharacter[] = characters;
  
  res.status(200).json(matchingCharacters);
};

export default charactersList;
