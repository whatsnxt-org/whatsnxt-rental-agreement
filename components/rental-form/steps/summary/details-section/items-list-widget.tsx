"use client";

import { useItemsList, useSteps } from "@/hooks/use-store-hooks";
import { ItemsList } from "@/store/items-list-store";
import { LiaFileContractSolid } from "react-icons/lia";
import DetailsWidget from "./details-widget";

const ItemsListWidget = () => {
  const { setStep } = useSteps();
  const { items } = useItemsList();

  const filteredListFields = Object.keys(items).filter(
    (key) => items[key as keyof ItemsList] > 0
  ) as (keyof ItemsList)[];

  if (filteredListFields.length === 0) return null;
  return (
    <DetailsWidget
      icon={<LiaFileContractSolid className="w-5 h-5" />}
      title="Items List"
      onChange={() => setStep(5)}
    >
      <div className="flex flex-col gap-2 text-muted-foreground text-xs font-semibold">
        <span className="text-foreground text-base capitalize">
          <div className="flex items-center gap-2">
            {filteredListFields.map((field, i) => (
              <div key={field}>
                <span className="capitalize whitespace-break-spaces">{`${field}  -  ${items[field]}`}</span>
                {filteredListFields.length - 1 > i && (
                  <span className="whitespace-break-spaces">{`, `}</span>
                )}
              </div>
            ))}
          </div>
        </span>
      </div>
    </DetailsWidget>
  );
};

export default ItemsListWidget;
