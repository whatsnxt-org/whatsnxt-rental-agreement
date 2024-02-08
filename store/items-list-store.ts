"use client";

import { TSet } from "./form-store";

export type ItemsList = {
  Fans: number;
  "Light bulb / tube": number;
  Bed: number;
  Table: number;
  Chair: number;
  Sofa: number;
  AC: number;
  Geyser: number;
  Fridge: number;
  Oven: number;
  Stove: number;
  TV: number;
  "Washing Machine": number;
  "Dining Table": number;
};

export type ItemsListStore = {
  items: ItemsList;
  increment: (field: keyof ItemsList) => void;
  decrement: (field: keyof ItemsList) => void;
};

export type Items = Record<keyof ItemsList, number>;

// TODO: add extra fields
export const defaultItemsList: Items = {
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

export const itemsListStore = (set: TSet) => ({
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
});

export default itemsListStore;
