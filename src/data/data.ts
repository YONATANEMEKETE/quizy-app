// const cardBgs = ['#d3f8f7', '#ffd7c7', '#c6ff75', '#d3b4fd'];
import biology from '../../public/biology.png';
import chemistry from '../../public/chemistry.png';
import general from '../../public/general.png';
import maths from '../../public/maths.png';
import physics from '../../public/physics.png';

import { quizCardsProps } from '@/Types/types';

export const QuizCards: quizCardsProps[] = [
  {
    subject: 'Biology',
    questionsNo: 10,
    time: 5,
    image: biology,
    colorBg: 'bg-[#d3f8f7]',
  },
  {
    subject: 'Chemistry',
    questionsNo: 10,
    time: 5,
    image: chemistry,
    colorBg: 'bg-[#ffd7c7]',
  },
  {
    subject: 'Physics',
    questionsNo: 10,
    time: 10,
    image: physics,
    colorBg: 'bg-[#c6ff75]',
  },
  {
    subject: 'Maths',
    questionsNo: 10,
    time: 15,
    image: maths,
    colorBg: 'bg-[#d3b4fd]',
  },
  {
    subject: 'General',
    questionsNo: 10,
    time: 5,
    image: general,
    colorBg: 'bg-[#f5f5f5]',
  },
];
