interface ExpencesObject {
  id: string;
  title: string;
  amount: number;
  date: Date
}

type ExpencesArray = ExpencesObject[];

export { ExpencesObject, ExpencesArray }