import type { IProduct } from "../types/Products";

const sampleTitles = [
  "Elegant Dress",
  "Casual Shirt",
  "Summer Skirt",
  "Formal Suit",
  "Winter Jacket",
];
const sampleDescriptions = [
  "High-quality fabric with a stylish look.",
  "Perfect for everyday use or formal events.",
  "Designed with comfort and elegance in mind.",
  "A must-have item for your wardrobe.",
];
// const sampleColors = [
//   "black",
//   "white",
//   "red",
//   "blue",
//   "green",
//   "beige",
//   "yellow",
//   "orange",
// ];

const sampleColors = [
  "#000",
  "#fff",
  "#f00",
  "#0f0",
  "#00f",
  "#90f",
  "#ff0",
  "#f0f",
];
const sampleSizes = ["XS", "S", "M", "L", "XL"];
const sampleStyles = ["Casual", "Formal", "Party", "Business", "Gym"];
const sampleCategories = [
  "Dress",
  "Top",
  "T-schirts",
  "Shorts",
  "Hoodie",
  "Jeans",
  "Shirts",
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSubset<T>(arr: T[], count: number): T[] {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateProducts(count = 30): IProduct[] {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    imgUrl: i%2===0 ?[
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/E94506s.jpg`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s2.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s4.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s7.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s8.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s9.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s10.jpg?im=Resize,width=480`,
      `https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/583955s11.jpg?im=Resize,width=480`,
      
      
    ] : [`https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/T12415s.jpg`,],
    title: getRandom(sampleTitles),
    rating: Math.floor(Math.random() * 5) + 1,
    price: parseFloat((Math.random() * 200 + 10).toFixed(2)),
    newPrice:
      Math.random() > 0.5
        ? parseFloat((Math.random() * 150 + 10).toFixed(2))
        : undefined,
    description: getRandom(sampleDescriptions),
    colors: getRandomSubset(sampleColors, Math.floor(Math.random() * 8) + 1),
    size: getRandomSubset(sampleSizes, Math.floor(Math.random() * 5) + 1),
    dressStyle: getRandom(sampleStyles),
    category: getRandom(sampleCategories),
    addDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // случайная дата
    topSalling: Math.random() > 0.7, // 30% топов
    soldCount: Math.floor(Math.random() * 300),
  }));
}

export const products: IProduct[] = generateProducts();
