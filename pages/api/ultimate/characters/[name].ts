import { NowRequest, NowResponse } from '@vercel/node'

/* using require, because this is closed but not fixed: https://github.com/Microsoft/TypeScript/issues/25400 */
const characters = require('./characters.json');
import ICharacter from './interface';

const character = (req: NowRequest, res: NowResponse) => {
  const { name } = req.query;

  const matchingCharacter: ICharacter = characters.find((character) => character.name.toLowerCase() === name);

  if (matchingCharacter) {
    return res.status(200).json(matchingCharacter);
  }

  return res.status(404);
};

export default character;
