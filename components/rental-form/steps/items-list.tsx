"use client";

import { useItemsList, useSteps } from "@/hooks/use-store-hooks";
import FormHeader, { FormTitle } from "@/components/rental-form/form-header";
import { stepsData } from "@/constants/steps-data";
import FormScrollableArea from "@/components/rental-form/form-scrollable-area";
import FormAction from "@/components/rental-form/form-action";
import { Button } from "@/components/ui/button";
// import { ItemsList } from "@/store/items-list-store";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  StretchHorizontal,
} from "lucide-react";
import { defaultItemListIcons } from "@/constants/default-items-list";
import AddItemModal from "../modals/add-item-modal";

// const itemsListFields = Object.keys(defaultItemsList) as (keyof ItemsList)[];

const ItemsList = () => {
  const { currentStep, prevStep, nextStep } = useSteps();
  const { items, decrement, increment } = useItemsList();
  const [showAllFields, setShowAllFields] = useState(false);
  const [openAddItemModal, setOpenAddItemModal] = useState(false);
  const itemsListFields = Object.keys(items);

  const defaultFieldsCountToShow = 4; // counts from 0, i.e 5 items to be shown
  const extraFieldsCount =
    itemsListFields.length - defaultFieldsCountToShow - 1;

  return (
    <div className="h-full">
      <FormHeader>
        <FormTitle
          currentStep={currentStep + 1}
          totalSteps={stepsData.length}
          desktopTitle={stepsData[currentStep].title.desktop}
          mobileTitle={stepsData[currentStep].title.mobile}
          icon={stepsData[currentStep].icon}
          onPrevStep={prevStep}
        />
      </FormHeader>

      <FormScrollableArea>
        <div className="px-6 lg:px-0 space-y-4 pb-6">
          <span className="text-md font-semibold text-muted-foreground">
            Add Fittings and Furnishings (Optional)
          </span>
          {/* // items List */}
          {itemsListFields.map((field, i) =>
            i > defaultFieldsCountToShow && !showAllFields ? null : (
              <div
                key={field}
                className="flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 grid place-content-center">
                    {defaultItemListIcons[field] ?? (
                      <StretchHorizontal className="w-4 h-4" />
                    )}
                  </div>
                  <span className="capitalize font-semibold text-secondary-foreground">
                    {field}
                  </span>
                </div>
                <Counter
                  value={items[field]}
                  onIncrement={() => increment(field)}
                  onDecrement={() => decrement(field)}
                />
              </div>
            )
          )}

          {/* // show more */}
          {!showAllFields && extraFieldsCount > 0 && (
            <div
              className="flex items-center gap-4 text-muted-foreground text-sm font-semibold cursor-pointer"
              onClick={() => setShowAllFields(true)}
            >
              <div className="flex items-center gap-2">
                <span>{extraFieldsCount}</span>
                More
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          )}

          {showAllFields && (
            <>
              <AddItemModal
                isOpen={openAddItemModal}
                onOpenChange={setOpenAddItemModal}
              />
              <span
                className="flex items-center text-wnr-purple text-sm font-semibold cursor-pointer"
                onClick={() => setOpenAddItemModal(true)}
              >
                <Plus className="w-3 h-3" strokeWidth={3} />
                Add Item
              </span>
            </>
          )}

          {/* // show less */}
          {showAllFields && extraFieldsCount > 0 && (
            <div
              className="flex items-center gap-4 text-muted-foreground text-sm font-semibold cursor-pointer"
              onClick={() => setShowAllFields(false)}
            >
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4" />
            </div>
          )}
        </div>
      </FormScrollableArea>

      <FormAction>
        <div className="px-6 lg:px-0">
          <Button className="w-full" size={"lg"} onClick={() => nextStep()}>
            Next
          </Button>
        </div>
      </FormAction>
    </div>
  );
};

type CounterProps = {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
};
const Counter = ({ value, onDecrement, onIncrement }: CounterProps) => (
  <div className="w-32 grid grid-cols-3 justify-items-center items-center">
    <div>
      {value > 0 && (
        <Button variant={"secondary"} size={"icon"} onClick={onDecrement}>
          <Minus className="w-5 h-5 text-wnr-purple" />
        </Button>
      )}
    </div>
    <div>{value > 0 && <span>{value}</span>}</div>

    <Button variant={"secondary"} size={"icon"} onClick={onIncrement}>
      <Plus className="w-5 h-5 text-wnr-purple" />
    </Button>
  </div>
);

export default ItemsList;
