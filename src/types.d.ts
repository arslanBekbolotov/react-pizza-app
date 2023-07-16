export interface IGoods {
  id: string;
  title: string;
  description: string;
  price: number;
  buttonLabel: string;
  imageUrl: string;
}

export interface IPopular {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
}

export interface IGoodsMutation extends IGoods {
  count: number;
}
