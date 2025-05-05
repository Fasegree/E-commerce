import type { IProduct } from "../types/Products";

const sampleTitles = ["Elegant Dress", "Casual Shirt", "Summer Skirt", "Formal Suit", "Winter Jacket"];
const sampleDescriptions = [
  "High-quality fabric with a stylish look.",
  "Perfect for everyday use or formal events.",
  "Designed with comfort and elegance in mind.",
  "A must-have item for your wardrobe.",
];
const sampleColors = ["black", "white", "red", "blue", "green", "beige", "yellow", "orange"];
const sampleSizes = ["XS", "S", "M", "L", "XL"];
const sampleStyles = ["Casual", "Formal", "Party", "Business", "Gym"];
const sampleCategories = ["Dress", "Top", "T-schirts", "Shorts", "Hoodie", "Jeans", "Shirts"];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomSubset<T>(arr: T[], count: number): T[] {
  return arr.sort(() => 0.5 - Math.random()).slice(0, count);
}

function generateProducts(count = 30): IProduct[] {
  return Array.from({ length: count }, (_, i) => ({
    id: (i + 1).toString(),
    imgUrl: [
      `https://source.unsplash.com/random/400x400?fashion&sig=${i}`,
      `https://source.unsplash.com/random/400x400?clothing&sig=${i + 100}`,
    ],
    title: getRandom(sampleTitles),
    starsAmount: Math.floor(Math.random() * 5) + 1,
    price: parseFloat((Math.random() * 200 + 10).toFixed(2)),
    newPrice: Math.random() > 0.5 ? parseFloat((Math.random() * 150 + 10).toFixed(2)) : undefined,
    description: getRandom(sampleDescriptions),
    colors: getRandomSubset(sampleColors, Math.floor(Math.random() * 3) + 1),
    size: getRandomSubset(sampleSizes, Math.floor(Math.random() * 3) + 1),
    dressStyle: getRandom(sampleStyles),
    category: getRandom(sampleCategories),
    addDate: new Date(Date.now() - Math.floor(Math.random() * 10000000000)), // случайная дата
    topSalling: Math.random() > 0.7, // 30% топов
  }));
}

export const products: IProduct[] = generateProducts();
