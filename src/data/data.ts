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
    questions: [
      {
        no: 1,
        title: 'What is the powerhouse of the cell?',
        answer: 'Mitochondria',
        options: [
          {
            choice: 1,
            text: 'Nucleus',
          },
          {
            choice: 2,
            text: 'Ribosome',
          },
          {
            choice: 3,
            text: 'Mitochondria',
          },
          {
            choice: 4,
            text: 'Chloroplast',
          },
        ],
      },
      {
        no: 2,
        title: 'Which of the following is a non-renewable energy resource?',
        answer: 'Hydropower',
        options: [
          {
            choice: 1,
            text: 'Solar',
          },
          {
            choice: 2,
            text: 'Wind',
          },
          {
            choice: 3,
            text: 'Coal',
          },
          {
            choice: 4,
            text: 'Hydropower',
          },
        ],
      },
      {
        no: 3,
        title:
          'Which macromolecule is primarily responsible for storing genetic information?',
        answer: 'Proteins',
        options: [
          {
            choice: 1,
            text: 'Carbohydrates',
          },
          {
            choice: 2,
            text: 'Proteins',
          },
          {
            choice: 3,
            text: 'Lipids',
          },
          {
            choice: 4,
            text: 'DNA',
          },
        ],
      },
      {
        no: 4,
        title: 'What process do plants use to convert sunlight into energy?',
        answer: 'Fermentation',
        options: [
          {
            choice: 1,
            text: 'Respiration',
          },
          {
            choice: 2,
            text: 'Photosynthesis',
          },
          {
            choice: 3,
            text: 'Fermentation',
          },
          {
            choice: 4,
            text: 'Digestion',
          },
        ],
      },
      {
        no: 5,
        title: 'Which organ is primarily responsible for filtering blood?',
        answer: 'Kidney',
        options: [
          {
            choice: 1,
            text: 'Heart',
          },
          {
            choice: 2,
            text: 'Liver',
          },
          {
            choice: 3,
            text: 'Kidney',
          },
          {
            choice: 4,
            text: 'Stomach',
          },
        ],
      },
      {
        no: 6,
        title: 'Which vitamin is essential for blood clotting?',
        answer: 'Vitamin K',
        options: [
          {
            choice: 1,
            text: 'Vitamin A',
          },
          {
            choice: 2,
            text: 'Vitamin B12',
          },
          {
            choice: 3,
            text: 'Vitamin C',
          },
          {
            choice: 4,
            text: 'Vitamin K',
          },
        ],
      },
      {
        no: 7,
        title: 'What is the basic unit of life?',
        answer: 'Cell',
        options: [
          {
            choice: 1,
            text: 'Tissue',
          },
          {
            choice: 2,
            text: 'Organ',
          },
          {
            choice: 3,
            text: 'Cell',
          },
          {
            choice: 4,
            text: 'Organism',
          },
        ],
      },
      {
        no: 8,
        title:
          'Which of the following is NOT a part of the respiratory system?',
        answer: 'Stomach',
        options: [
          {
            choice: 1,
            text: 'Lungs',
          },
          {
            choice: 2,
            text: 'Trachea',
          },
          {
            choice: 3,
            text: 'Alveoli',
          },
          {
            choice: 4,
            text: 'Stomach',
          },
        ],
      },
      {
        no: 9,
        title: 'What is the most abundant gas in Earths atmosphere?',
        answer: 'Nitrogen',
        options: [
          {
            choice: 1,
            text: 'Oxygen',
          },
          {
            choice: 2,
            text: 'Carbon dioxide',
          },
          {
            choice: 3,
            text: 'Nitrogen',
          },
          {
            choice: 4,
            text: 'Hydrogen',
          },
        ],
      },
      {
        no: 10,
        title: 'Which blood type is known as the universal donor?',
        answer: 'O',
        options: [
          {
            choice: 1,
            text: 'A',
          },
          {
            choice: 2,
            text: 'B',
          },
          {
            choice: 3,
            text: 'AB',
          },
          {
            choice: 4,
            text: 'O',
          },
        ],
      },
    ],
  },
  {
    subject: 'Chemistry',
    questionsNo: 10,
    time: 5,
    image: chemistry,
    colorBg: 'bg-[#ffd7c7]',
    questions: [],
  },
  {
    subject: 'Physics',
    questionsNo: 10,
    time: 10,
    image: physics,
    colorBg: 'bg-[#c6ff75]',
    questions: [],
  },
  {
    subject: 'Maths',
    questionsNo: 10,
    time: 15,
    image: maths,
    colorBg: 'bg-[#d3b4fd]',
    questions: [],
  },
  {
    subject: 'General',
    questionsNo: 10,
    time: 5,
    image: general,
    colorBg: 'bg-[#f5f5f5]',
    questions: [],
  },
];
