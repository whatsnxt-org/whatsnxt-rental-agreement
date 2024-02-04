"use client";

import { TSet } from "./form-store";

export type ItemsList = {
  fans: number;
  light: number;
  bed: number;
  table: number;
  chair: number;
  TV: number;
};

export type ItemsListStore = {
  items: ItemsList;
  increment: (field: keyof ItemsList) => void;
  decrement: (field: keyof ItemsList) => void;
};

export type Items = Record<keyof ItemsList, number>;

// TODO: add extra fields
export const defaultItemsList: Items = {
  fans: 0,
  light: 0,
  bed: 0,
  table: 0,
  chair: 0,
  TV: 0,
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
