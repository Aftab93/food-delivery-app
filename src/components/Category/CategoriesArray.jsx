import { MdOutlineFreeBreakfast, MdOutlineSoupKitchen, MdOutlineLocalPizza, MdOutlineLunchDining, MdOutlineIcecream, MdOutlineDinnerDining } from "react-icons/md";
import { TiThSmallOutline } from "react-icons/ti";
import { GiFruitBowl } from "react-icons/gi";

export const categories = [
  {
    id: 1,
    name: "All",
    image: <TiThSmallOutline className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 2,
    name: "Breakfast",
    image: <MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 3,
    name: "Soup",
    image: <MdOutlineSoupKitchen className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 4,
    name: "Lunch",
    image: <MdOutlineLunchDining className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 5,
    name: "Pizza",
    image: <MdOutlineLocalPizza className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 6,
    name: "Dessert",
    image: <MdOutlineIcecream className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
  {
    id: 7,
    name: "Fruits",
    image: <GiFruitBowl className="w-[60px] h-[60px] text-primary hover:text-secondary" />,
  },
];
