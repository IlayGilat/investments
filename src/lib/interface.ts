export type Stock = {
    id: number;
    name: string;
    symbol: string;
    price: number;
}

export type PortfolioFromDB = {
    id: number;
    userId: number;
    stocks: Record<string, number>;
}

export type Portfolio = {
    id: number;
    userId: number;
    stocks: Map<Stock,number>;
}

export type User = {
    id: number;
    name: string;
    email: string;
}