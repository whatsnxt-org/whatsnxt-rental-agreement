"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { usePhotocopy } from "@/hooks/use-store-hooks";
import useScreen from "@/hooks/useScreen";
import Image from "next/image";
import winnerImg from "@/assets/winner.svg";

type PhotocopyModalProps = {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
};
const PhotocopyModal = (props: PhotocopyModalProps) => {
  const { isDesktop } = useScreen();
  if (isDesktop) return <DesktopModal {...props} />;
  return <MobileDrawer {...props} />;
};

const DesktopModal = ({ isOpen, onOpenChange }: PhotocopyModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px] lg:max-w-[720px]">
      <div className="space-y-4">
        <ModalContent onClose={() => onOpenChange(false)} />
      </div>
    </DialogContent>
  </Dialog>
);

const MobileDrawer = ({ isOpen, onOpenChange }: PhotocopyModalProps) => (
  <Drawer open={isOpen} onOpenChange={onOpenChange}>
    <DrawerContent>
      <div className="space-y-4">
        <ModalContent onClose={() => onOpenChange(false)} />
      </div>
    </DrawerContent>
  </Drawer>
);

const ModalContent = ({ onClose }: { onClose: () => void }) => {
  const { updatePhotocopy } = usePhotocopy();

  const handleUpdate = (value: { state: boolean; value: number }) => {
    updatePhotocopy(value);
    onClose();
  };
  return (
    <div className="w-full text-center">
      <div className="p-6 pb-12">
        <div className="grid place-content-center gap-4">
          <Image src={winnerImg} alt="" className="mx-auto" />

          <div>
            <h1 className="font-semibold text-lg">Smart Choice!</h1>
            <h2 className="font-semibold text-lg">
              Add a copy for your landlord as well?
            </h2>
          </div>

          <small className="text-muted-foreground text-sm">
            Save delivery costs on ordering 2 photocopies
          </small>

          <div className="space-y-2">
            <Button
              size={"lg"}
              className="w-full"
              onClick={() => handleUpdate({ state: true, value: 350 })}
            >
              Get 2 photocopies @ ₹175 each
            </Button>
            <Button
              size={"lg"}
              variant={"wnrPurplePrimary"}
              className="w-full"
              onClick={() => handleUpdate({ state: true, value: 250 })}
            >
              Get 1 photocopy @ ₹250
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotocopyModal;
