import { NowRequest, NowResponse } from '@vercel/node'

import ICharacter from './interface';
/* using require, because this is closed but not fixed: https://github.com/Microsoft/TypeScript/issues/25400 */
const allCharacters: ICharacter[] = require('./characters.json');

const charactersList = (req: NowRequest, res: NowResponse) => {
  const name = req.query.name?.toString();

  if (name) {
    const lowerCaseName = name.toLowerCase();
    const filteredMatchingCharacters = allCharacters
      .filter(character => character.name.toLowerCase().includes(lowerCaseName));

    return res.status(200).json(filteredMatchingCharacters);
  }
  
  res.status(200).json(allCharacters);
};

export default charactersList;
