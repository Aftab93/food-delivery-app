// Icons import
import { FaEgg, FaUtensilSpoon, FaHamburger, FaPizzaSlice, FaIceCream } from "react-icons/fa";

// Images import as it is
import img1 from "../../assets/menu/1.jpg";
import img2 from "../../assets/menu/2.jpg";
import img3 from "../../assets/menu/3.jpg";
import img4 from "../../assets/menu/4.jpg";
import img5 from "../../assets/menu/5.jpg";
import img6 from "../../assets/menu/6.jpg";
import img7 from "../../assets/menu/7.jpg";
import img8 from "../../assets/menu/8.jpg";
import img9 from "../../assets/menu/9.jpg";
import img10 from "../../assets/menu/10.jpg";
import img11 from "../../assets/menu/11.jpg";
import img12 from "../../assets/menu/12.jpg";
import img13 from "../../assets/menu/13.jpg";
import img14 from "../../assets/menu/14.jpg";
import img15 from "../../assets/menu/15.jpg";
import img16 from "../../assets/menu/16.jpg";
import img17 from "../../assets/menu/17.jpg";
import img18 from "../../assets/menu/18.jpg";
import img19 from "../../assets/menu/19.jpg";
import img20 from "../../assets/menu/20.jpg";
import img21 from "../../assets/menu/21.jpg";
import img22 from "../../assets/menu/22.jpg";
import img23 from "../../assets/menu/23.jpg";
import img24 from "../../assets/menu/24.jpg";
import img25 from "../../assets/menu/25.jpg";

// Icon color map
const categoryIcons = {
  Breakfast: <FaEgg className="text-primary" />,
  Soup: <FaUtensilSpoon className="text-primary" />,
  Lunch: <FaHamburger className="text-primary" />,
  Pizza: <FaPizzaSlice className="text-primary" />,
  Dessert: <FaIceCream className="text-primary" />,
};

export const menuItems = [
  {
    id: 1,
    name: "Pancakes with Syrup",
    price: 4.49,
    image: img1,
    category: "Breakfast",
    icon: categoryIcons["Breakfast"],
  },
  {
    id: 2,
    name: "Omelette Deluxe",
    price: 3.99,
    image: img2,
    category: "Breakfast",
    icon: categoryIcons["Breakfast"],
  },
  {
    id: 3,
    name: "French Toast",
    price: 5.29,
    image: img3,
    category: "Breakfast",
    icon: categoryIcons["Breakfast"],
  },
  {
    id: 4,
    name: "Avocado Toast",
    price: 6.0,
    image: img4,
    category: "Breakfast",
    icon: categoryIcons["Breakfast"],
  },
  {
    id: 5,
    name: "Breakfast Burrito",
    price: 6.5,
    image: img5,
    category: "Breakfast",
    icon: categoryIcons["Breakfast"],
  },
  {
    id: 6,
    name: "Creamy Tomato Soup",
    price: 3.49,
    image: img6,
    category: "Soup",
    icon: categoryIcons["Soup"],
  },
  {
    id: 7,
    name: "Chicken Noodle Soup",
    price: 4.29,
    image: img7,
    category: "Soup",
    icon: categoryIcons["Soup"],
  },
  {
    id: 8,
    name: "Minestrone Soup",
    price: 3.99,
    image: img8,
    category: "Soup",
    icon: categoryIcons["Soup"],
  },
  {
    id: 9,
    name: "Clam Chowder",
    price: 4.99,
    image: img9,
    category: "Soup",
    icon: categoryIcons["Soup"],
  },
  {
    id: 10,
    name: "Lentil Soup",
    price: 3.79,
    image: img10,
    category: "Soup",
    icon: categoryIcons["Soup"],
  },
  {
    id: 11,
    name: "Grilled Chicken Wrap",
    price: 6.5,
    image: img11,
    category: "Lunch",
    icon: categoryIcons["Lunch"],
  },
  {
    id: 12,
    name: "Beef Burger",
    price: 7.99,
    image: img12,
    category: "Lunch",
    icon: categoryIcons["Lunch"],
  },
  {
    id: 13,
    name: "Veggie Burger",
    price: 6.49,
    image: img13,
    category: "Lunch",
    icon: categoryIcons["Lunch"],
  },
  {
    id: 14,
    name: "Caesar Salad",
    price: 5.99,
    image: img14,
    category: "Lunch",
    icon: categoryIcons["Lunch"],
  },
  {
    id: 15,
    name: "Chicken Quesadilla",
    price: 7.49,
    image: img15,
    category: "Lunch",
    icon: categoryIcons["Lunch"],
  },
  {
    id: 16,
    name: "Margherita Pizza",
    price: 8.99,
    image: img16,
    category: "Pizza",
    icon: categoryIcons["Pizza"],
  },
  {
    id: 17,
    name: "Pepperoni Pizza",
    price: 9.49,
    image: img17,
    category: "Pizza",
    icon: categoryIcons["Pizza"],
  },
  {
    id: 18,
    name: "BBQ Chicken Pizza",
    price: 10.99,
    image: img18,
    category: "Pizza",
    icon: categoryIcons["Pizza"],
  },
  {
    id: 19,
    name: "Hawaiian Pizza",
    price: 9.49,
    image: img19,
    category: "Pizza",
    icon: categoryIcons["Pizza"],
  },
  {
    id: 20,
    name: "Veggie Supreme Pizza",
    price: 8.49,
    image: img20,
    category: "Pizza",
    icon: categoryIcons["Pizza"],
  },
  {
    id: 21,
    name: "Chocolate Lava Cake",
    price: 3.99,
    image: img21,
    category: "Dessert",
    icon: categoryIcons["Dessert"],
  },
  {
    id: 22,
    name: "Ice Cream Sundae",
    price: 2.99,
    image: img22,
    category: "Dessert",
    icon: categoryIcons["Dessert"],
  },
  {
    id: 23,
    name: "Fruit Tart",
    price: 4.29,
    image: img23,
    category: "Dessert",
    icon: categoryIcons["Dessert"],
  },
  {
    id: 24,
    name: "Apple Pie",
    price: 3.79,
    image: img24,
    category: "Dessert",
    icon: categoryIcons["Dessert"],
  },
  {
    id: 25,
    name: "Cheesecake",
    price: 4.99,
    image: img25,
    category: "Dessert",
    icon: categoryIcons["Dessert"],
  },
];
