export interface IProduct {
  // name_: any;
  id: string;
  imgUrl: string[];
  title: string;
  rating: number;
  price: number;
  newPrice?: number;
  description: string;
  colors: string[];
  size: string[];
  dressStyle: string;
  category: string;
  addDate: Date;
  soldCount: number;
}

export interface IProductInCart {
  id: string;
  imgUrl: string[];
  title: string;
  rating: number;
  price: number;
  newPrice?: number;
  description: string;
  color: string[];
  size: string[];
  dressStyle: string;
  category: string;
  addDate: Date;
  soldCount: number;
  inCart:number;
}

export interface ICart {
  products: IProductInCart[];
  promoCode: string;
  totalPrice: number;
  totalDiscount: number;
  totalItems: number;
  totalPriceAfterDiscount: number;
  totalPriceAfterPromoCode: number;
  totalPriceAfterPromoCodeAndDiscount: number;
  totalPriceAfterPromoCodeAndDiscountAndShipping: number;
  shippingCost: number;
  shippingMethod: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  paymentMethod: string;
  paymentStatus: string;
  orderStatus: string;
  orderDate: Date;
  orderId: string;
  orderTrackingNumber: string;
  orderTrackingUrl: string;
  orderTrackingStatus: string;
  orderTrackingDate: Date;
}