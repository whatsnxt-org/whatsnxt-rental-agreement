"use client";

import rupeeImg from "@/assets/agreement-sample.png";
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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useStore } from "@/hooks/use-store-hooks";
import useScreen from "@/hooks/useScreen";
import { addMonths, format } from "date-fns";
import Image from "next/image";
import { ReactNode } from "react";

type PreviewAgreementModalProps = {
  isOpen: boolean;
  onOpenChange: (state: boolean) => void;
};
const PreviewAgreementModal = (props: PreviewAgreementModalProps) => {
  const { isDesktop } = useScreen();
  if (isDesktop) return <DesktopModal {...props} />;
  return <MobileDrawer {...props} />;
};

const DesktopModal = ({ isOpen, onOpenChange }: PreviewAgreementModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="px-0 max-w-[425px] lg:max-w-lg h-[90%]">
        <ScrollArea className="mt-3 px-4 h-[100%] overflow-y-hidden">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl">
              Agreement Preview
            </DialogTitle>
            <div className="space-y-4">
              <AgreementModalContent />
              {/* <Button className="w-full" onClick={() => onOpenChange(false)}>
                Back to Summary
              </Button> */}
            </div>
          </DialogHeader>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

const MobileDrawer = ({ isOpen, onOpenChange }: PreviewAgreementModalProps) => (
  <Drawer open={isOpen} onOpenChange={onOpenChange}>
    <DrawerContent className="h-[85%]">
      <DrawerHeader className="text-left">
        <DrawerTitle>Agreement Preview</DrawerTitle>
        <div className="space-y-4">
          <ScrollArea className="h-[700px] overflow-y-hidden">
            <AgreementModalContent />
            <DrawerFooter className="pt-2">
              <Button className="w-full" onClick={() => onOpenChange(false)}>
                Back to Summary
              </Button>
            </DrawerFooter>
          </ScrollArea>
        </div>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
);

const HighlightedSpan = ({ children }: { children: ReactNode }) => (
  <span className="mx-2 px-2 py-1 bg-muted/50 text-wnr-purple rounded-xl font-semibold">
    {children}
  </span>
);

const AgreementModalContent = () => {
  const {
    basicDetails,
    propertyDetails,
    contractDetails,
    landlordDetails,
    tenantDetails,
  } = useStore();

  const propertyAddress = `Flat No.${propertyDetails.houseNo}, ${propertyDetails.address}, ${propertyDetails.locality}, ${propertyDetails.pincode}. ${basicDetails.city}, ${basicDetails.state} ( House Type - ${propertyDetails.space}, Floor No: ${propertyDetails.floor} )`;
  const agreementStartDate = format(contractDetails.startDate, "d/m/yyyy");
  return (
    <div className="pb-6 space-y-6 text-sm">
      <Image src={rupeeImg} alt="Rupee" className="h-[250px] w-full" />
      <h2 className="font-semibold underline underline-offset-4 text-center text-base">
        LEASE DEAD
      </h2>

      <ol className="list-decimal ps-4 space-y-2 leading-6">
        <li>
          <p className="text-balance">
            Property Address:
            <HighlightedSpan>{propertyAddress}</HighlightedSpan>
          </p>
        </li>
        <li>
          <p className="text-balance">
            Rent: Rs
            <HighlightedSpan>${contractDetails.monthlyRent}</HighlightedSpan>
            per month from
            <HighlightedSpan>
              {format(contractDetails.startDate, "d/m/yyyy")}
            </HighlightedSpan>
          </p>
        </li>
        <li>
          <p className="text-balance">
            Period of Lease: Eleven (11) months (
            <HighlightedSpan>
              {format(contractDetails.startDate, "d/m/yyyy")}
            </HighlightedSpan>
            to
            <HighlightedSpan>
              {format(addMonths(contractDetails.startDate, 11), "d/m/yyyy")}
            </HighlightedSpan>
            )
          </p>
        </li>

        <li>
          <p className="text-balance">
            Security Amount: Rs
            <HighlightedSpan>{contractDetails.securityAmount}</HighlightedSpan>
          </p>
        </li>

        {contractDetails.tenantCharges && (
          <li>
            <p className="text-balance">
              Electricity/Water Charges: As per Meters payable as per the
              billing cycle paid by Lessee before the due dates.
            </p>
          </li>
        )}

        {contractDetails.increaseRent && (
          <li>
            <p className="text-balance">
              Escalation after expiry:
              <HighlightedSpan>
                {contractDetails.increaseRentPercentage}
              </HighlightedSpan>
            </p>
          </li>
        )}
      </ol>

      <p>
        This Lease Deed/Rent Agreement is executed at
        <HighlightedSpan>{basicDetails.city}</HighlightedSpan>
        on day
        <HighlightedSpan>{format(new Date(), "d")}</HighlightedSpan>
        of
        <HighlightedSpan>{format(new Date(), "MMMM yyyy")}</HighlightedSpan>
      </p>

      <br />
      <p className="text-center">Between</p>
      <br />
      <p>
        Mr./Mrs.
        <HighlightedSpan>
          {landlordDetails.landlords[0].fullname}
        </HighlightedSpan>
        So/Do Mr
        <HighlightedSpan>
          {landlordDetails.landlords[0].parentName}
        </HighlightedSpan>
        (Hereinafter called the Lessor No. 1 and/ or the First Party)
      </p>

      <br />

      <p className="text-center">And</p>

      <br />

      <p>
        Mr./Mrs.
        <HighlightedSpan>{tenantDetails.tenants[0].fullname}</HighlightedSpan>
        So/Do Mr
        <HighlightedSpan>{tenantDetails.tenants[0].parentName}</HighlightedSpan>
        (Hereinafter called the Second Party)
      </p>

      <br />

      <p>
        Whereas the Lessor(s) are jointly the lawful owners in possession of the
        premises located at
        <HighlightedSpan>{propertyAddress}</HighlightedSpan>
        (hereinafter called the 'demised premises'). The expression Lessor(s)
        and Lessee shall mean and include their respective heirs, successors,
        representatives, and assignees.
      </p>

      <p>
        Whereas on the request of the Lessee, the Lessor(s) have agreed to let
        out the said demised premises to the LESSEE, and the LESSEE has agreed
        to take it on rent w.e.f.
        <HighlightedSpan>{agreementStartDate}</HighlightedSpan>
        for its bonafide residential use. Whereas the LESSOR(S) has represented
        that the said demised premises is free from all encumbrances and the
        LESSOR(S) has a clean and unrestricted right to the said demised
        premises. Whereas the Lessor(s) and Lessee both represented that they
        are legally competent to enter into this Lease Agreement on the terms
        conditions contained herein.
      </p>
    </div>
  );
};
export default PreviewAgreementModal;
