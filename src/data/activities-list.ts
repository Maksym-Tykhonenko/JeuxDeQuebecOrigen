import {IMAGES} from '../constants/images';

export interface Activity {
  id: string;
  title: string;
  image: any;
  description?: string;
  card1?: string;
  card2?: string;
  card3?: string;
  button?: boolean;
}

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Free Shows',
    image: IMAGES.shows,
    description:
      "Get ready for captivating live performances every day. We feature a variety of shows, from music and dance to comedy and theatrical acts. Whether you're looking for a relaxing evening or a high-energy performance, our diverse lineup will satisfy your entertainment cravings.",
    card1:
      'Timing: Shows are scheduled throughout the day, so you can catch one anytime.',
    card2:
      'Special Highlights: VIP performances for loyal guests, and exclusive holiday shows that you will like.',
    card3:
      'Enjoy the Experience: Comfortable seating, themed decorations, and drinks available during performances.',
  },
  {
    id: '2',
    title: 'Festive Aperitifs',
    image: IMAGES.aperitifs,
    description:
      'Our festive aperitif stations are perfect for relaxing and enjoying a delightful drink with friends. We offer a range of cocktails, mocktails, and savory snacks for every taste.',
    card1:
      'Seasonal Specialties: Celebrate each holiday season with exclusive, themed beverages and appetizers.',
    card2:
      'VIP Access: Special offers for loyal customers, including complimentary drinks during select hours.',
    card3:
      'Perfect for Socializing: Meet new people or unwind after the game in our cozy aperitif area, designed for conversation and fun.',
  },
  {
    id: '3',
    title: 'Special Events',
    image: IMAGES.events,
    description:
      'Take your entertainment experience to the next level with our exclusive events. From themed parties to gaming tournaments, there’s always something exciting happening.',
    card1:
      "Themed Parties: Whether it's a masquerade ball, a vintage casino night, or a holiday celebration, our themed parties are a must-see.",
    card2:
      'Exclusive Invitations: VIP members receive special invites to private events with limited access.',
    card3:
      'Celebrity Guests: Special appearances from renowned performers and influencers.',
    button: true,
  },
];
