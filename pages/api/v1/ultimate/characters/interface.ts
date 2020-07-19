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
  order: string;
  series: {
    icon: string;
    name: string;
  };
};

export default Character
