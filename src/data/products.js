// === Category tiles (Products page) ===
// Replace with your actual images:
import catCakes from "../assets/images/cat1.png";
import catPastries from "../assets/images/cat2.png";
import catSweets from "../assets/images/cat3.png";
import catGift from "../assets/images/cat4.png";
import catSavories from "../assets/images/cat5.png";
import catBreads from "../assets/images/cat6.png";
import catCookies from "../assets/images/cat7.png";
import catCream from "../assets/images/cat8.png";
import catMuffins from "../assets/images/cat9.png";
import catChips from "../assets/images/cat10.png";
import catChoc from "../assets/images/cat11.png";
import catRusk from "../assets/images/cat12.png";

// === Example cakes (Category: cakes) ===
import cake1 from "../assets/images/cake1.png";
import cake2 from "../assets/images/cake2.png";
import cake3 from "../assets/images/cake3.png";
import cake4 from "../assets/images/cake4.png";
import cake5 from "../assets/images/cake5.png";
import cake6 from "../assets/images/cake6.png";
import cake7 from "../assets/images/cake7.png";
import cake8 from "../assets/images/cake8.png";
import cake9 from "../assets/images/cake9.png";
import cake10 from "../assets/images/cake10.png";
import cake11 from "../assets/images/cake11.png";
import cake12 from "../assets/images/cake12.png";
import cake13 from "../assets/images/cake13.png";
import cake14 from "../assets/images/cake14.png";
import cake15 from "../assets/images/cake15.png";
import cake16 from "../assets/images/cake16.png";
import cake17 from "../assets/images/cake17.png";
import cake18 from "../assets/images/cake18.png";

import sweet1 from "../assets/images/sweet1.png";
import sweet2 from "../assets/images/sweet2.png";
import sweet3 from "../assets/images/sweet3.png";
import sweet4 from "../assets/images/sweet4.png";
import sweet5 from "../assets/images/sweet5.png";
import sweet6 from "../assets/images/sweet6.png";
import sweet7 from "../assets/images/sweet7.png";
import sweet8 from "../assets/images/sweet8.png";
import sweet9 from "../assets/images/sweet9.png";
import sweet10 from "../assets/images/sweet10.png";
import sweet11 from "../assets/images/sweet11.png";
import sweet12 from "../assets/images/sweet12.png";

import cook1 from "../assets/images/cook1.png";
import cook2 from "../assets/images/cook2.png";
import cook3 from "../assets/images/cook3.png";
import cook4 from "../assets/images/cook4.png";
import cook5 from "../assets/images/cook5.png";
import cook6 from "../assets/images/cook6.png";
import cook7 from "../assets/images/cook7.png";
import cook8 from "../assets/images/cook8.png";
import cook9 from "../assets/images/cook9.png";
import cook10 from "../assets/images/cook10.png";
import cook11 from "../assets/images/cook11.png";
import cook12 from "../assets/images/cook12.png";

import savour1 from "../assets/images/savour1.png";
import savour2 from "../assets/images/savour2.png";
import savour3 from "../assets/images/savour3.png";
import savour4 from "../assets/images/savour4.png";
import savour5 from "../assets/images/savour5.png";
import savour6 from "../assets/images/savour6.png";
import savour7 from "../assets/images/savour7.png";
import savour8 from "../assets/images/savour8.png";
import savour9 from "../assets/images/savour9.png";
import savour10 from "../assets/images/savour10.png";
import savour11 from "../assets/images/savour11.png";
import savour12 from "../assets/images/savour12.png";



export const COLORS = {
  brand: "#D99A6C",
  soft: "#F3E5AB",
  cream: "#FFF8F0",
};

export const categories = [
  { slug: "cakes",     name: "CAKES",               count: 20, img: catCakes },
  { slug: "pastries",  name: "PASTRIES",            count: 12, img: catPastries },
  { slug: "sweets",    name: "SWEETS",              count: 25, img: catSweets },
  { slug: "gift-box",  name: "GIFT BOX",            count: 14, img: catGift },
  { slug: "savories",  name: "SEVORIES",            count: 31, img: catSavories },
  { slug: "breads",    name: "BREADS",              count: 8,  img: catBreads },
  { slug: "cookies",   name: "COOKIES & BISCUITS",  count: 19, img: catCookies },
  { slug: "cream-roll",name: "CREAM ROLL",          count: 4,  img: catCream },
  { slug: "muffins",   name: "MUFFINS & FRUIT CAKE",count: 7,  img: catMuffins },
  { slug: "chips",     name: "CHIPS",               count: 6,  img: catChips },
  { slug: "chocolates",name: "CHOCHOLATES",         count: 10, img: catChoc },
  { slug: "rusk",      name: "RUSK",                count: 7,  img: catRusk },
];

// Minimal product sample; expand with all your items (id must be unique)
export const products = [
  {
    id: 1001,
    slug: "black-forest-cake",
    category: "cakes",
    name: "BLACK FOREST CAKE",
    price: 650,
    img: cake1,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1002,
    slug: "choco-delight-cake",
    category: "cakes",
    name: "CHOCO DELIGHT CAKE",
    price: 400,
    img: cake2,
    sizes: ["500g", "1kg", "2kg", "3kg", "4kg", "5kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1003,
    slug: "red-velvet-cake",
    category: "cakes",
    name: "RED VELVET CAKE",
    price: 750,
    img: cake3,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1004,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake4,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1005,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake5,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1006,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake6,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1007,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake7,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1008,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake8,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1009,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake9,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1010,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake10,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1011,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake11,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1012,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake12,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1013,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake13,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1014,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake14,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1015,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake15,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1016,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake16,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1017,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake17,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },{
    id: 1018,
    slug: "pineapple-cake",
    category: "cakes",
    name: "PINEAPPLE CAKE",
    price: 600,
    img: cake18,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },

{
    id: 2001,
    slug: "gulab-jamun",
    category: "sweets",
    name: "GULAB JAMUN",
    price: 300,
    img: sweet1,
  },
  {
    id: 2002,
    slug: "rasgulla",
    category: "sweets",
    name: "RASGULLA",
    price: 320,
    img: sweet2,
  },
  {
    id: 2003,
    slug: "kajukatli",
    category: "sweets",
    name: "KAJU KATLI",
    price: 500,
    img: sweet3,
  },
{
    id: 2004,
    slug: "gulab-jamun",
    category: "sweets",
    name: "GULAB JAMUN",
    price: 300,
    img: sweet4,
  },
  {
    id: 2005,
    slug: "rasgulla",
    category: "sweets",
    name: "RASGULLA",
    price: 320,
    img: sweet5,
  },
  {
    id: 2006,
    slug: "kajukatli",
    category: "sweets",
    name: "KAJU KATLI",
    price: 500,
    img: sweet6,
  },
{
    id: 2007,
    slug: "gulab-jamun",
    category: "sweets",
    name: "GULAB JAMUN",
    price: 300,
    img: sweet7,
  },
  {
    id: 2008,
    slug: "rasgulla",
    category: "sweets",
    name: "RASGULLA",
    price: 320,
    img: sweet8,
  },
  {
    id: 2009,
    slug: "kajukatli",
    category: "sweets",
    name: "KAJU KATLI",
    price: 500,
    img: sweet9,
  },
{
    id: 2010,
    slug: "gulab-jamun",
    category: "sweets",
    name: "GULAB JAMUN",
    price: 300,
    img: sweet10,
  },
  {
    id: 2011,
    slug: "rasgulla",
    category: "sweets",
    name: "RASGULLA",
    price: 320,
    img: sweet11,
  },
  {
    id: 2012,
    slug: "kajukatli",
    category: "sweets",
    name: "KAJU KATLI",
    price: 500,
    img: sweet12,
  },


   {
    id: 3001,
    slug: "choco-chip-cookies",
    category: "cookies",
    name: "CHOCOLATE CHIP COOKIES",
    price: 150,
    img: cook1,
  },
  {
    id: 3002,
    slug: "oatmeal-cookies",
    category: "cookies",
    name: "OATMEAL COOKIES",
    price: 160,
    img: cook2,
  },
  {
    id: 3003,
    slug: "butter-biscuits",
    category: "cookies",
    name: "BUTTER BISCUITS",
    price: 140,
    img: cook3,
  },
{
    id: 3004,
    slug: "choco-chip-cookies",
    category: "cookies",
    name: "CHOCOLATE CHIP COOKIES",
    price: 150,
    img: cook4,
  },
  {
    id: 3005,
    slug: "oatmeal-cookies",
    category: "cookies",
    name: "OATMEAL COOKIES",
    price: 160,
    img: cook5,
  },
  {
    id: 3006,
    slug: "butter-biscuits",
    category: "cookies",
    name: "BUTTER BISCUITS",
    price: 140,
    img: cook6,
  },
  {
    id: 3007,
    slug: "choco-chip-cookies",
    category: "cookies",
    name: "CHOCOLATE CHIP COOKIES",
    price: 150,
    img: cook7,
  },
  {
    id: 3008,
    slug: "oatmeal-cookies",
    category: "cookies",
    name: "OATMEAL COOKIES",
    price: 160,
    img: cook8,
  },
  {
    id: 3009,
    slug: "butter-biscuits",
    category: "cookies",
    name: "BUTTER BISCUITS",
    price: 140,
    img: cook9,
  },
  {
    id: 3010,
    slug: "choco-chip-cookies",
    category: "cookies",
    name: "CHOCOLATE CHIP COOKIES",
    price: 150,
    img: cook10,
  },
  {
    id: 3011,
    slug: "oatmeal-cookies",
    category: "cookies",
    name: "OATMEAL COOKIES",
    price: 160,
    img: cook11,
  },
  {
    id: 3012,
    slug: "butter-biscuits",
    category: "cookies",
    name: "BUTTER BISCUITS",
    price: 140,
    img: cook12,
  },

   {
    id: 4001,
    slug: "masala-mixture",
    category: "savories",
    name: "MASALA MIXTURE",
    price: 200,
    img: savour1,
  },
  {
    id: 4002,
    slug: "banana-chips",
    category: "savories",
    name: "BANANA CHIPS",
    price: 180,
    img: savour2,
  },
  {
    id: 4003,
    slug: "murukku",
    category: "savories",
    name: "MURUKKU",
    price: 220,
    img: savour3,
  },
{
    id: 4004,
    slug: "masala-mixture",
    category: "savories",
    name: "MASALA MIXTURE",
    price: 200,
    img: savour4,
  },
  {
    id: 4005,
    slug: "banana-chips",
    category: "savories",
    name: "BANANA CHIPS",
    price: 180,
    img: savour5,
  },
  {
    id: 4006,
    slug: "murukku",
    category: "savories",
    name: "MURUKKU",
    price: 220,
    img: savour6,
  },
{
    id: 4007,
    slug: "masala-mixture",
    category: "savories",
    name: "MASALA MIXTURE",
    price: 200,
    img: savour7,
  },
  {
    id: 4008,
    slug: "banana-chips",
    category: "savories",
    name: "BANANA CHIPS",
    price: 180,
    img: savour8
  },
  {
    id: 4009,
    slug: "murukku",
    category: "savories",
    name: "MURUKKU",
    price: 220,
    img: savour9,
  },
{
    id: 4010,
    slug: "masala-mixture",
    category: "savories",
    name: "MASALA MIXTURE",
    price: 200,
    img: savour10,
  },
  {
    id: 4011,
    slug: "banana-chips",
    category: "savories",
    name: "BANANA CHIPS",
    price: 180,
    img: savour11,
  },
  {
    id: 4012,
    slug: "murukku",
    category: "savories",
    name: "MURUKKU",
    price: 220,
    img: savour12,
  },

];
export const relatedProducts = [
  {
    id: 1002,
    slug: "black-forest-cake",
    category: "cakes",
    name: "BLACK FOREST CAKE",
    price: 650,
    img: cake12,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1008,
    slug: "choco-delight-cake",
    category: "cakes",
    name: "CHOCO DELIGHT CAKE",
    price: 400,
    img: cake7,
    sizes: ["500g", "1kg", "2kg", "3kg", "4kg", "5kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
  {
    id: 1012,
    slug: "red-velvet-cake",
    category: "cakes",
    name: "RED VELVET CAKE",
    price: 750,
    img: cake13,
    sizes: ["500g", "1kg", "2kg"],
    description:
      "Heavenly rich chocolate with a melt-in-your-mouth texture. Perfect for every sweet tooth.",
    nutrition:
      "Serving size (100g): Energy 323 kcal, Fat 18g, Carbs 38g, Protein 4g (approx).",
    ingredients:
      "All-purpose flour, cocoa, sugar, eggs, butter, cream, chocolate, vanilla.",
    allergies:
      "Contains gluten, eggs, milk. May contain nuts and soy (traces).",
  },
];






export const byCategory = (slug) => products.filter((p) => p.category === slug);
export const getProduct = (idOrSlug) =>
  products.find(
    (p) => String(p.id) === String(idOrSlug) || p.slug === idOrSlug
  );
