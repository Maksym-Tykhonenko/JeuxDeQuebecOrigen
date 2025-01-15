import {IMAGES} from '../constants/images';

export interface Event {
  id: string;
  title: string;
  image: any;
  date: string;
  time: string;
  location: string;
  latitude: number;
  longitude: number;
  url: string;
  description: string;
  activities: string[];
}

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Gaming Night',
    image: IMAGES.game,
    date: 'January 5th, 2025',
    time: '6:00 PM – 10:00 PM',
    location: 'Gaming Zone, Main Hall',
    latitude: 44.036611,
    longitude: 1.376229,
    url: 'https://maps.apple.com/?address=1870%20Chemin%20de%20Matras,%2082000%20Montauban,%20France&auid=6615704532537950809&ll=44.036611,1.376229&lsp=9902&q=Game%20Zone&t=m',
    description:
      'Step into our Gaming Zone and immerse yourself in the ultimate gaming experience. Play exciting multiplayer games, explore the latest technology, and challenge others for the top spot. Don’t forget to mark your attendance during the event to earn exclusive bonuses',
    activities: [
      'Free-to-play arcade games.',
      'Multiplayer tournaments.',
      'VR gaming stations.',
      'Live leaderboard updates.',
    ],
  },
  {
    id: '2',
    title: 'Movie Marathon Night',
    image: IMAGES.movie,
    date: 'January 12th, 2025',
    time: '5:00 PM – 11:00 PM',
    location: 'Entertainment Lounge, Room 3',
    latitude: 38.820525,
    longitude: -76.764494,
    url: 'https://maps.apple.com/?address=5010%20Brown%20Station%20Rd,%20Ste%20150,%20Upper%20Marlboro,%20MD%20%2020772,%20United%20States&auid=11985352584911644394&ll=38.820525,-76.764494&lsp=9902&q=Famous%20Lounge&t=m',
    description:
      'Join us for a night of cinematic magic! Relax and enjoy back-to-back screenings of classic and modern hits. Free popcorn and cozy seating are included for all attendees.',
    activities: [
      'Movie Screenings: 3-4 movies spanning various genres.',
      'Trivia Breaks: Win small prizes during intermissions.',
      'Themed Snacks: Complimentary popcorn, soda, and snacks.',
      'Photo Booth: Capture memories with fun props.',
    ],
  },
  {
    id: '3',
    title: 'Live Music Evening',
    image: IMAGES.music,
    date: 'January 19th, 2025',
    time: '7:00 PM – 10:30 PM',
    location: 'Main Stage, Event Hall',
    latitude: 50.488013,
    longitude: 30.475023,
    url: 'https://maps.apple.com/?address=%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B0%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,%20134,%20%D0%9A%D0%B8%D1%97%D0%B2,%2004073,%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0&auid=10725967176226628208&ll=50.488013,30.475023&lsp=9902&q=Event%20Hall%20Freedom&t=m',
    description:
      'Experience an unforgettable night of live music performed by talented local artists. Dance, sing along, or simply enjoy the atmosphere with your favorite drinks.',
    activities: [
      'Live Performances: 2-3 artists playing a mix of genres.',
      'Dance Area: Open floor for dancing.',
      'Meet-and-Greet: Interact with the performers after the show.',
      'Welcome Drinks: Complimentary drinks on arrival.',
    ],
  },
  {
    id: '4',
    title: 'Karaoke Night',
    image: IMAGES.karaoke,
    date: 'February 2nd, 2025',
    time: '7:30 PM – 11:00 PM',
    location: 'Karaoke Lounge, Room 4',
    latitude: 50.45093,
    longitude: 30.509819,
    url: 'https://maps.apple.com/?address=%D0%AF%D1%80%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D1%96%D0%B2%20%D0%92%D0%B0%D0%BB%20%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F,%2013,%20%D0%9A%D0%B8%D1%97%D0%B2,%2001054,%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0&auid=3346737558482483342&ll=50.450930,30.509819&lsp=9902&q=Nota%20Karaoke%20Club&t=m',
    description:
      'Unleash your inner star and sing your heart out at our Karaoke Night! Whether you’re a seasoned performer or a shower singer, the stage is yours.',
    activities: [
      'Singing Competitions: Audience votes for the best act.',
      'DGroup Performances: Sing with friends for added fun.',
      'Themed Playlists: Classic hits, pop, and more.',
      'Special Rewards: For unique or crowd-favorite acts.',
    ],
  },
];
