interface Expences {
  id: string;
  title: string;
  amount: number;
  date: Date
}

type ExpencesArray = Expences[];

export { Expences, ExpencesArray }