export type Webpage = {
  children?: Array<Webpage>;
  content: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  parent?: Webpage | null;
  updatedAt: Date;
};
