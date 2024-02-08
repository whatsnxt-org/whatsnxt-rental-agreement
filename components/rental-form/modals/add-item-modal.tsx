"use client";

import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Form } from "@/components/ui/form";
import { FormInput } from "@/components/ui/form-input";
import { useItemsList } from "@/hooks/use-store-hooks";
import useScreen from "@/hooks/useScreen";
import {
  AddItemSchema,
  addItemSchema,
} from "@/lib/validations/add-item-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type AddItemModalProps = {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
};
const AddItemModal = (props: AddItemModalProps) => {
  const { isDesktop } = useScreen();
  if (isDesktop) return <DesktopModal {...props} />;
  return <MobileDrawer {...props} />;
};

const DesktopModal = ({ isOpen, onOpenChange }: AddItemModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px] lg:max-md">
      <DialogHeader>
        <DialogTitle className="text-center">Add Item</DialogTitle>
      </DialogHeader>
      <ModalContent onClose={() => onOpenChange(false)} />
    </DialogContent>
  </Dialog>
);

const MobileDrawer = ({ isOpen, onOpenChange }: AddItemModalProps) => (
  <Drawer open={isOpen} onOpenChange={onOpenChange}>
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>Add Item</DrawerTitle>
      </DrawerHeader>
      <ModalContent onClose={() => onOpenChange(false)} />
    </DrawerContent>
  </Drawer>
);

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  const { addItem } = useItemsList();

  const form = useForm<AddItemSchema>({
    resolver: zodResolver(addItemSchema),
    defaultValues: { name: "" },
  });

  const handleAddItem = (data: AddItemSchema) => {
    addItem(data.name);
    onClose();
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleAddItem)} className="px-6 pb-6">
        <div className="space-y-6">
          <FormInput
            control={form.control}
            name="name"
            placeholder="Enter Name"
          />
          <Button type="submit" size={"lg"} className="w-full">
            Done
          </Button>
        </div>
      </form>
    </Form>
  );
};
export default AddItemModal;
