import {
  Armchair,
  Backpack,
  Bed,
  Heater,
  Lightbulb,
  Microwave,
  Monitor,
  Refrigerator,
  Sofa,
  WashingMachine,
} from "lucide-react";
import { PiFan } from "react-icons/pi";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { TbAirConditioning } from "react-icons/tb";
import { MdOutlineDinnerDining } from "react-icons/md";

export const defaultItemsList: Record<string, number> = {
  Fans: 0,
  "Light bulb / tube": 0,
  Bed: 0,
  Table: 0,
  Chair: 0,
  Sofa: 0,
  AC: 0,
  Geyser: 0,
  Fridge: 0,
  Oven: 0,
  Stove: 0,
  TV: 0,
  "Washing Machine": 0,
  "Dining Table": 0,
};

export const defaultItemListIcons: Record<string, JSX.Element> = {
  Fans: <PiFan className="w-4 h-4" />,
  "Light bulb / tube": <Lightbulb className="w-4 h-4" />,
  Bed: <Bed className="w-4 h-4" />,
  Table: <MdOutlineTableRestaurant className="w-4 h-4" />,
  Chair: <Armchair className="w-4 h-4" />,
  Sofa: <Sofa className="w-4 h-4" />,
  AC: <TbAirConditioning className="w-4 h-4" />,
  Geyser: <Backpack className="w-4 h-4" />,
  Fridge: <Refrigerator className="w-4 h-4" />,
  Oven: <Microwave className="w-4 h-4" />,
  Stove: <Heater className="w-4 h-4" />,
  TV: <Monitor className="w-4 h-4" />,
  "Washing Machine": <WashingMachine />,
  "Dining Table": <MdOutlineDinnerDining />,
};
