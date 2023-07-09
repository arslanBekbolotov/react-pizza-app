export interface IGoods{
    id: string;
    title: string;
    description: string;
    price: string;
    buttonLabel: string;
    imageUrl: string;
}

export interface IPopular{
    id: string;
    title: string;
    price: string;
    imageUrl: string;
}

export interface IGoodsCategory{
    [id:string]:IGoods[];
}

export type IGoodsData = IGoodsCategory[];

