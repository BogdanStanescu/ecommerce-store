export interface IBillboard {
  id: string;
  label: string;
  image_url: string;
}

export interface ICategory {
  id: string;
  name: string;
  billboard: IBillboard;
}

