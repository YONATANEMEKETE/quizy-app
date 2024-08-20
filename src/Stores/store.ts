import { create } from 'zustand';

type storeProp = {
  isAnswer: string;
  setAnswer: (answer: string) => void;
  resetAnswer: () => void;
};

export const useScoreStore = create<storeProp>((set) => ({
  isAnswer: '',
  setAnswer: (answer) => set({ isAnswer: answer }),
  resetAnswer: () => set({ isAnswer: '' }),
}));
