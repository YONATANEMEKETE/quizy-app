export type quizCardsProps = {
  subject: string;
  questionsNo: number;
  time: number;
  image: any;
  colorBg: string;
  questions: question[];
};

export type question = {
  no: number;
  title: string;
  options: option[];
  answer: string;
};

export type option = {
  text: string;
  choice: number;
};
