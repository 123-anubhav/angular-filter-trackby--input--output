export interface IProduct {

    productName: string;
    qty: number;
    actualPrice: number; //double
    discount: number;
    rating: number;
    price: number; //double
    expiryDate: Date;
    //expiryDateInDays!: number;
    category: string;
}