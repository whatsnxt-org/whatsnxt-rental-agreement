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
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import useScreen from "@/hooks/useScreen";

type ClausesSamplesModalProps = {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
};
const ClausesSamplesModal = (props: ClausesSamplesModalProps) => {
  const { isDesktop } = useScreen();
  if (isDesktop) return <DesktopModal {...props} />;
  return <MobileDrawer {...props} />;
};

const DesktopModal = ({ isOpen, onOpenChange }: ClausesSamplesModalProps) => (
  <Dialog open={isOpen} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[425px] lg:max-w-[720px]">
      <DialogHeader>
        <DialogTitle>Sample Clauses</DialogTitle>
        <div className="space-y-4">
          <ClauseModalContent />
          <Button className="w-full" onClick={() => onOpenChange(false)}>
            Add Clause Now
          </Button>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
);

const MobileDrawer = ({ isOpen, onOpenChange }: ClausesSamplesModalProps) => (
  <Drawer open={isOpen} onOpenChange={onOpenChange}>
    <DrawerContent>
      <DrawerHeader className="text-left">
        <DrawerTitle>Clauses Sample</DrawerTitle>
        <div className="space-y-4">
          <ClauseModalContent />
          <DrawerFooter className="pt-2">
            <Button className="w-full" onClick={() => onOpenChange(false)}>
              Add Clause Now
            </Button>
          </DrawerFooter>
        </div>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
);

const ClauseModalContent = () => (
  <div className="space-y-4">
    <ul className="space-y-2 list-disc px-8 lg:px-4">
      <li>
        <p className="text-sm leading-6 text-secondary-foreground tracking-tight">
          This Lease Agreement constitutes the entire agreement concerning the
          subject matter hereof between the Lessor and the Lessee and supersedes
          any prior representations or agreements, whether written or oral
          between the Lessor and Lessee.
        </p>
      </li>
      <li>
        <p className="text-sm leading-6 text-secondary-foreground tracking-tight">
          Mo modification or amendment of this Agreement or waiver of any of its
          provisions shall be binding upon the parties hereto unless made in
          writing and duly signed by both Parties.
        </p>
      </li>
      <li>
        <p className="text-sm leading-6 text-secondary-foreground tracking-tight">
          If any provision of this Agreement is held to be unenforceable, the
          remaining provisions of this Agreement shall continue to remain in
          full force and effect.
        </p>
      </li>
    </ul>
  </div>
);
export default ClausesSamplesModal;
