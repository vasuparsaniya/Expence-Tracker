interface ChartProps {
  value: number;
  maxValue: number | null;
  label: string;
}
type ChartPropsArray = ChartProps[];

export { ChartProps, ChartPropsArray }