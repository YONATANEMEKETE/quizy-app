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
    questions: [
      {
        no: 1,
        title: 'What is the chemical symbol for water?',
        answer: 'H₂O',
        options: [
          {
            choice: 1,
            text: 'O₂',
          },
          {
            choice: 2,
            text: 'H₂O',
          },
          {
            choice: 3,
            text: 'CO₂',
          },
          {
            choice: 4,
            text: 'NaCl',
          },
        ],
      },
      {
        no: 2,
        title: 'Which element is the most abundant in the Earths crust?',
        answer: 'Oxygen',
        options: [
          {
            choice: 1,
            text: 'Oxygen',
          },
          {
            choice: 2,
            text: 'Silicon',
          },
          {
            choice: 3,
            text: 'Aluminum',
          },
          {
            choice: 4,
            text: 'Iron',
          },
        ],
      },
      {
        no: 3,
        title: 'What is the pH of a neutral substance?',
        answer: '7',
        options: [
          {
            choice: 1,
            text: '0',
          },
          {
            choice: 2,
            text: '7',
          },
          {
            choice: 3,
            text: '14',
          },
          {
            choice: 4,
            text: '5',
          },
        ],
      },
      {
        no: 4,
        title: 'Which of the following is an alkali metal?',
        answer: 'Sodium',
        options: [
          {
            choice: 1,
            text: 'Helium',
          },
          {
            choice: 2,
            text: 'Sodium',
          },
          {
            choice: 3,
            text: 'Chlorine',
          },
          {
            choice: 4,
            text: 'Carbon',
          },
        ],
      },
      {
        no: 5,
        title: 'What is the chemical formula for table salt?',
        answer: 'NaCl',
        options: [
          {
            choice: 1,
            text: 'H₂SO₄',
          },
          {
            choice: 2,
            text: 'NaCl',
          },
          {
            choice: 3,
            text: 'CO₂',
          },
          {
            choice: 4,
            text: 'CH₄',
          },
        ],
      },
      {
        no: 6,
        title: 'Which gas is produced during photosynthesis?',
        answer: 'Oxygen',
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
        no: 7,
        title: 'Which of the following substances is a noble gas?',
        answer: 'Argon',
        options: [
          {
            choice: 1,
            text: 'Oxygen',
          },
          {
            choice: 2,
            text: 'Nitrogen',
          },
          {
            choice: 3,
            text: 'Argon',
          },
          {
            choice: 4,
            text: 'Carbon dioxide',
          },
        ],
      },
      {
        no: 8,
        title: 'What is the atomic number of carbon?',
        answer: '6',
        options: [
          {
            choice: 1,
            text: '6',
          },
          {
            choice: 2,
            text: '12',
          },
          {
            choice: 3,
            text: '14',
          },
          {
            choice: 4,
            text: '16',
          },
        ],
      },
      {
        no: 9,
        title: 'Which of the following is an example of a chemical change?',
        answer: 'Burning wood',
        options: [
          {
            choice: 1,
            text: 'Melting ice',
          },
          {
            choice: 2,
            text: 'Dissolving sugar in water',
          },
          {
            choice: 3,
            text: 'Burning wood',
          },
          {
            choice: 4,
            text: 'Cutting paper',
          },
        ],
      },
      {
        no: 10,
        title:
          'What type of bond involves the sharing of electron pairs between atoms?',
        answer: 'Covalent bond',
        options: [
          {
            choice: 1,
            text: 'Ionic bond',
          },
          {
            choice: 2,
            text: 'Covalent bond',
          },
          {
            choice: 3,
            text: 'Hydrogen bond',
          },
          {
            choice: 4,
            text: 'Metallic bond',
          },
        ],
      },
    ],
  },
  {
    subject: 'Physics',
    questionsNo: 10,
    time: 10,
    image: physics,
    colorBg: 'bg-[#c6ff75]',
    questions: [
      {
        no: 1,
        title: 'What is the unit of force?',
        answer: 'Newton',
        options: [
          {
            choice: 1,
            text: 'Joule',
          },
          {
            choice: 2,
            text: 'Watt',
          },
          {
            choice: 3,
            text: 'Newton',
          },
          {
            choice: 4,
            text: 'Pascal',
          },
        ],
      },
      {
        no: 2,
        title: 'What is the speed of light in a vacuum?',
        answer: '300,000 km/s',
        options: [
          {
            choice: 1,
            text: '150,000 km/s',
          },
          {
            choice: 2,
            text: '300,000 km/s',
          },
          {
            choice: 3,
            text: '450,000 km/s',
          },
          {
            choice: 4,
            text: '600,000 km/s',
          },
        ],
      },
      {
        no: 3,
        title:
          'Which law states that "For every action, there is an equal and opposite reaction"?',
        answer: "Newton's Third Law",
        options: [
          {
            choice: 1,
            text: "Newton's First Law",
          },
          {
            choice: 2,
            text: "Newton's Second Law",
          },
          {
            choice: 3,
            text: "Newton's Third Law",
          },
          {
            choice: 4,
            text: 'Law of Conservation of Energy',
          },
        ],
      },
      {
        no: 4,
        title: 'What is the formula for calculating kinetic energy?',
        answer: '½mv²',
        options: [
          {
            choice: 1,
            text: 'mv²',
          },
          {
            choice: 2,
            text: '½mv²',
          },
          {
            choice: 3,
            text: '½mv',
          },
          {
            choice: 4,
            text: 'mv',
          },
        ],
      },
      {
        no: 5,
        title: 'What is the acceleration due to gravity on Earth?',
        answer: '9.8 m/s²',
        options: [
          {
            choice: 1,
            text: '8.9 m/s²',
          },
          {
            choice: 2,
            text: '9.8 m/s²',
          },
          {
            choice: 3,
            text: '10.2 m/s²',
          },
          {
            choice: 4,
            text: '11.1 m/s²',
          },
        ],
      },
      {
        no: 6,
        title: 'What is the primary energy source of the Sun?',
        answer: 'Nuclear fusion',
        options: [
          {
            choice: 1,
            text: 'Nuclear fission',
          },
          {
            choice: 2,
            text: 'Chemical reaction',
          },
          {
            choice: 3,
            text: 'Nuclear fusion',
          },
          {
            choice: 4,
            text: 'Combustion',
          },
        ],
      },
      {
        no: 7,
        title: 'Which particle has a positive charge?',
        answer: 'Proton',
        options: [
          {
            choice: 1,
            text: 'Electron',
          },
          {
            choice: 2,
            text: 'Neutron',
          },
          {
            choice: 3,
            text: 'Proton',
          },
          {
            choice: 4,
            text: 'Photon',
          },
        ],
      },
      {
        no: 8,
        title:
          'What is the term for the resistance of an object to changes in its motion?',
        answer: 'Inertia',
        options: [
          {
            choice: 1,
            text: 'Velocity',
          },
          {
            choice: 2,
            text: 'Inertia',
          },
          {
            choice: 3,
            text: 'Momentum',
          },
          {
            choice: 4,
            text: 'Acceleration',
          },
        ],
      },
      {
        no: 9,
        title: 'Which physical quantity is measured in amperes?',
        answer: 'Electric current',
        options: [
          {
            choice: 1,
            text: 'Voltage',
          },
          {
            choice: 2,
            text: 'Electric current',
          },
          {
            choice: 3,
            text: 'Resistance',
          },
          {
            choice: 4,
            text: 'Capacitance',
          },
        ],
      },
      {
        no: 10,
        title:
          'What is the name of the force that pulls objects toward the center of the Earth?',
        answer: 'Gravity',
        options: [
          {
            choice: 1,
            text: 'Magnetism',
          },
          {
            choice: 2,
            text: 'Friction',
          },
          {
            choice: 3,
            text: 'Tension',
          },
          {
            choice: 4,
            text: 'Gravity',
          },
        ],
      },
    ],
  },
  {
    subject: 'Maths',
    questionsNo: 10,
    time: 15,
    image: maths,
    colorBg: 'bg-[#d3b4fd]',
    questions: [
      {
        no: 1,
        title: 'What is 5 + 7?',
        answer: '12',
        options: [
          {
            choice: 1,
            text: '10',
          },
          {
            choice: 2,
            text: '11',
          },
          {
            choice: 3,
            text: '12',
          },
          {
            choice: 4,
            text: '13',
          },
        ],
      },
      {
        no: 2,
        title: 'What is 15 - 9?',
        answer: '6',
        options: [
          {
            choice: 1,
            text: '5',
          },
          {
            choice: 2,
            text: '6',
          },
          {
            choice: 3,
            text: '7',
          },
          {
            choice: 4,
            text: '8',
          },
        ],
      },
      {
        no: 3,
        title: 'What is 9 × 3?',
        answer: '27',
        options: [
          {
            choice: 1,
            text: '24',
          },
          {
            choice: 2,
            text: '27',
          },
          {
            choice: 3,
            text: '30',
          },
          {
            choice: 4,
            text: '33',
          },
        ],
      },
      {
        no: 4,
        title: 'What is 25 ÷ 5?',
        answer: '5',
        options: [
          {
            choice: 1,
            text: '4',
          },
          {
            choice: 2,
            text: '5',
          },
          {
            choice: 3,
            text: '6',
          },
          {
            choice: 4,
            text: '7',
          },
        ],
      },
      {
        no: 5,
        title: 'What is the square root of 64?',
        answer: '8',
        options: [
          {
            choice: 1,
            text: '6',
          },
          {
            choice: 2,
            text: '7',
          },
          {
            choice: 3,
            text: '8',
          },
          {
            choice: 4,
            text: '9',
          },
        ],
      },
      {
        no: 6,
        title: 'What is 12% of 50?',
        answer: '6',
        options: [
          {
            choice: 1,
            text: '5',
          },
          {
            choice: 2,
            text: '6',
          },
          {
            choice: 3,
            text: '7',
          },
          {
            choice: 4,
            text: '8',
          },
        ],
      },
      {
        no: 7,
        title: 'What is 0.5 × 100?',
        answer: '50',
        options: [
          {
            choice: 1,
            text: '40',
          },
          {
            choice: 2,
            text: '45',
          },
          {
            choice: 3,
            text: '50',
          },
          {
            choice: 4,
            text: '55',
          },
        ],
      },
      {
        no: 8,
        title: 'What is 7²?',
        answer: '49',
        options: [
          {
            choice: 1,
            text: '42',
          },
          {
            choice: 2,
            text: '45',
          },
          {
            choice: 3,
            text: '49',
          },
          {
            choice: 4,
            text: '56',
          },
        ],
      },
      {
        no: 9,
        title: 'What is the value of π (Pi) rounded to two decimal places?',
        answer: '3.14',
        options: [
          {
            choice: 1,
            text: '3.12',
          },
          {
            choice: 2,
            text: '3.13',
          },
          {
            choice: 3,
            text: '3.14',
          },
          {
            choice: 4,
            text: '3.15',
          },
        ],
      },
      {
        no: 10,
        title: 'What is the next prime number after 7?',
        answer: '11',
        options: [
          {
            choice: 1,
            text: '9',
          },
          {
            choice: 2,
            text: '11',
          },
          {
            choice: 3,
            text: '13',
          },
          {
            choice: 4,
            text: '15',
          },
        ],
      },
    ],
  },
  {
    subject: 'General',
    questionsNo: 10,
    time: 5,
    image: general,
    colorBg: 'bg-[#f5f5f5]',
    questions: [
      {
        no: 1,
        title: 'Who was the first president of the United States?',
        answer: 'George Washington',
        options: [
          {
            choice: 1,
            text: 'Thomas Jefferson',
          },
          {
            choice: 2,
            text: 'Abraham Lincoln',
          },
          {
            choice: 3,
            text: 'George Washington',
          },
          {
            choice: 4,
            text: 'John Adams',
          },
        ],
      },
      {
        no: 2,
        title: 'Which planet is known as the Red Planet?',
        answer: 'Mars',
        options: [
          {
            choice: 1,
            text: 'Venus',
          },
          {
            choice: 2,
            text: 'Mars',
          },
          {
            choice: 3,
            text: 'Jupiter',
          },
          {
            choice: 4,
            text: 'Saturn',
          },
        ],
      },
      {
        no: 3,
        title: 'What is the largest ocean on Earth?',
        answer: 'Pacific Ocean',
        options: [
          {
            choice: 1,
            text: 'Atlantic Ocean',
          },
          {
            choice: 2,
            text: 'Indian Ocean',
          },
          {
            choice: 3,
            text: 'Pacific Ocean',
          },
          {
            choice: 4,
            text: 'Southern Ocean',
          },
        ],
      },
      {
        no: 4,
        title: 'Which country is known for the Eiffel Tower?',
        answer: 'France',
        options: [
          {
            choice: 1,
            text: 'Italy',
          },
          {
            choice: 2,
            text: 'Spain',
          },
          {
            choice: 3,
            text: 'France',
          },
          {
            choice: 4,
            text: 'Germany',
          },
        ],
      },
      {
        no: 5,
        title: 'What is the capital of Japan?',
        answer: 'Tokyo',
        options: [
          {
            choice: 1,
            text: 'Beijing',
          },
          {
            choice: 2,
            text: 'Seoul',
          },
          {
            choice: 3,
            text: 'Tokyo',
          },
          {
            choice: 4,
            text: 'Bangkok',
          },
        ],
      },
      {
        no: 6,
        title: 'Which element has the chemical symbol O?',
        answer: 'Oxygen',
        options: [
          {
            choice: 1,
            text: 'Osmium',
          },
          {
            choice: 2,
            text: 'Oxygen',
          },
          {
            choice: 3,
            text: 'Gold',
          },
          {
            choice: 4,
            text: 'Silver',
          },
        ],
      },
      {
        no: 7,
        title: 'Who wrote the play "Romeo and Juliet"?',
        answer: 'William Shakespeare',
        options: [
          {
            choice: 1,
            text: 'Charles Dickens',
          },
          {
            choice: 2,
            text: 'William Shakespeare',
          },
          {
            choice: 3,
            text: 'Mark Twain',
          },
          {
            choice: 4,
            text: 'Jane Austen',
          },
        ],
      },
      {
        no: 8,
        title: 'Which sport is known as "the beautiful game"?',
        answer: 'Soccer',
        options: [
          {
            choice: 1,
            text: 'Basketball',
          },
          {
            choice: 2,
            text: 'Tennis',
          },
          {
            choice: 3,
            text: 'Soccer',
          },
          {
            choice: 4,
            text: 'Baseball',
          },
        ],
      },
      {
        no: 9,
        title: 'What is the largest country by land area?',
        answer: 'Russia',
        options: [
          {
            choice: 1,
            text: 'Canada',
          },
          {
            choice: 2,
            text: 'China',
          },
          {
            choice: 3,
            text: 'United States',
          },
          {
            choice: 4,
            text: 'Russia',
          },
        ],
      },
      {
        no: 10,
        title: 'Which language is the most spoken worldwide?',
        answer: 'Mandarin Chinese',
        options: [
          {
            choice: 1,
            text: 'English',
          },
          {
            choice: 2,
            text: 'Spanish',
          },
          {
            choice: 3,
            text: 'Mandarin Chinese',
          },
          {
            choice: 4,
            text: 'Hindi',
          },
        ],
      },
    ],
  },
];
