type Game = 'SSB' | 'Melee' | 'Brawl' | 'SSBWU/3DS';
type Availability = 'Starter' | 'Unlockable' | 'Downloadable';

interface Character {
  alsoAppearsIn: Game[];
  availability: Availability;
  images: {
    icon: string;
    portrait: string;
  },
  name: string;
  order: number;
  series: {
    icon: string;
    name: string;
  },
  otherFightersFromThisSeries?: Omit<Character, 'otherFightersFromThisSeries'>[]
};

export default Character
