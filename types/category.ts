export interface ICategory {
  id: number;
  name: string;
  param: string;
  children: ICategory[];
}
