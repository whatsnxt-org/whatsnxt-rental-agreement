"use client";

import { defaultItemsList } from "@/constants/default-items-list";
import { TSet } from "./form-store";

export type ItemsList = Record<string, number>;

export type ItemsListStore = {
  items: ItemsList;
  increment: (field: keyof ItemsList) => void;
  decrement: (field: keyof ItemsList) => void;
  addItem: (name: string) => void;
};

export type Items = Record<keyof ItemsList, number>;

// TODO: add extra fields
// export const defaultItemsList: Items = {
//   Fans: 0,
//   "Light bulb / tube": 0,
//   Bed: 0,
//   Table: 0,
//   Chair: 0,
//   Sofa: 0,
//   AC: 0,
//   Geyser: 0,
//   Fridge: 0,
//   Oven: 0,
//   Stove: 0,
//   TV: 0,
//   "Washing Machine": 0,
//   "Dining Table": 0,
// };

export const itemsListStore = (set: TSet): ItemsListStore => ({
  items: defaultItemsList,
  increment: (field: keyof ItemsList) =>
    set((prev) => ({
      ...prev,
      itemsList: {
        ...prev.itemsList,
        items: {
          ...prev.itemsList.items,
          [field]: prev.itemsList.items[field] + 1,
        },
      },
    })),
  decrement: (field: keyof ItemsList) =>
    set((prev) => ({
      ...prev,
      itemsList: {
        ...prev.itemsList,
        items: {
          ...prev.itemsList.items,
          [field]:
            prev.itemsList.items[field] > 0
              ? prev.itemsList.items[field] - 1
              : 0,
        },
      },
    })),

  addItem: (name) =>
    set((prev) => ({
      ...prev,
      itemsList: {
        ...prev.itemsList,
        items: {
          ...prev.itemsList.items,
          [name]: 0,
        },
      },
    })),
});

export default itemsListStore;
