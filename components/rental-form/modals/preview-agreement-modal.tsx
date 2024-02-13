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
      <DialogContent className="px-0 max-w-[425px] lg:max-w-xl h-[90%]">
        <ScrollArea className="pb-6 mt-3 px-6 h-[100%] overflow-y-hidden">
          <DialogHeader>
            <DialogTitle className="text-center text-3xl">
              Agreement Preview
            </DialogTitle>
            <div className="space-y-4">
              <AgreementModalContent />
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
          <ScrollArea className="pb-12 h-[700px] overflow-y-hidden">
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

export const AgreementModalContent = () => {
  const {
    basicDetails,
    propertyDetails,
    contractDetails,
    landlordDetails,
    tenantDetails,
    itemsList: { items },
  } = useStore();

  const propertyAddress = `Flat No.${propertyDetails.houseNo}, ${propertyDetails.address}, ${propertyDetails.locality}, ${propertyDetails.pincode}. ${basicDetails.city}, ${basicDetails.state} ( House Type - ${propertyDetails.space}, Floor No: ${propertyDetails.floor} )`;
  const agreementStartDate = format(contractDetails.startDate, "d/m/yyyy");
  const chosenItemsList = Object.entries(items).filter((entry) => entry[1] > 0);
  return (
    <div className="pb-6 space-y-6 text-sm leading-6 print:text-justify">
      <Image src={rupeeImg} alt="Rupee" className="h-[250px] w-full" />
      <h2 className="font-semibold underline underline-offset-4 text-center text-base">
        LEASE DEAD
      </h2>

      <ol className="list-decimal ps-6 space-y-2">
        <li>
          <p className="print:text-justify">
            Property Address:
            <HighlightedSpan>{propertyAddress}</HighlightedSpan>
          </p>
        </li>
        <li>
          <p className="print:text-justify">
            Rent: Rs
            <HighlightedSpan>${contractDetails.monthlyRent}</HighlightedSpan>
            per month from
            <HighlightedSpan>
              {format(contractDetails.startDate, "d/m/yyyy")}
            </HighlightedSpan>
          </p>
        </li>
        <li>
          <p className="print:text-justify">
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
          <p className="print:text-justify">
            Security Amount: Rs
            <HighlightedSpan>{contractDetails.securityAmount}</HighlightedSpan>
          </p>
        </li>

        {contractDetails.tenantCharges && (
          <li>
            <p className="print:text-justify">
              Electricity/Water Charges: As per Meters payable as per the
              billing cycle paid by Lessee before the due dates.
            </p>
          </li>
        )}

        {contractDetails.increaseRent && (
          <li>
            <p className="print:text-justify">
              Escalation after expiry:
              <HighlightedSpan>
                {`${contractDetails.increaseRentPercentage}%`}
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

      <p className="text-center">Between</p>
      {landlordDetails.landlords.map((landlord, i) => (
        <p key={`agreement-landlords-${i}`}>
          Mr./Mrs.
          <HighlightedSpan>{landlord.fullname}</HighlightedSpan>
          So/Do Mr
          <HighlightedSpan>{landlord.parentName}</HighlightedSpan>
          (Hereinafter called the Lessor No. 1 and/ or the First Party)
        </p>
      ))}
      {/* <p>
        Mr./Mrs.
        <HighlightedSpan>
          {landlordDetails.landlords[0].fullname}
        </HighlightedSpan>
        So/Do Mr
        <HighlightedSpan>
          {landlordDetails.landlords[0].parentName}
        </HighlightedSpan>
        (Hereinafter called the Lessor No. 1 and/ or the First Party)
      </p> */}

      <p className="text-center">And</p>

      {tenantDetails.tenants.map((tenant, i) => (
        <p key={`agreement-tenants-${i}`}>
          Mr./Mrs.
          <HighlightedSpan>{tenant.fullname}</HighlightedSpan>
          So/Do Mr
          <HighlightedSpan>{tenant.parentName}</HighlightedSpan>
          (Hereinafter called the Second Party)
        </p>
      ))}
      {/* <p>
        Mr./Mrs.
        <HighlightedSpan>{tenant.fullname}</HighlightedSpan>
        So/Do Mr
        <HighlightedSpan>{tenant.parentName}</HighlightedSpan>
        (Hereinafter called the Second Party)
      </p> */}

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

      <ol className="ps-6 list-decimal space-y-2">
        <li>
          <p>
            That the second party shall pay the monthly rent of
            <HighlightedSpan>{`Rs ${contractDetails.monthlyRent}`}</HighlightedSpan>
            in respect of the demised premises located at
            <HighlightedSpan>{propertyAddress}</HighlightedSpan>
            The rent shall be paid per month in advance through advance rental
            on or before the
            <HighlightedSpan>{contractDetails.rentPaymentDate}</HighlightedSpan>
            day of each English calendar month to each of Lessor(s) / First
            Party in the proportion as agreed by the First Party amongst
            themselves. In case of TDS deduction, the Lessee shall furnish the
            TDS certificate to the Lessor(s) at the end of each calendar quarter
            well within time so as to enable the Lessor(s) to file his income
            tax return within the stipulated timeframe. Each of the parties will
            bear the consequences for any non-compliance on account of the tax
            liability of its part.
          </p>
        </li>

        <li>
          <p>
            That the second party has deposited a sum of
            <HighlightedSpan>{`Rs ${contractDetails.securityAmount}`}</HighlightedSpan>
            as interest free refundable security deposit, which will be refunded
            (Interest Free) by the First Party at the time of vacating the
            demised premises after deducting any outstanding rent, electricity,
            water (unless electricity and water charges if to be borne by
            lessor(s)), sewerage and maintenance charges, bills, etc., if any,
            which are payable by the Lessee at the time of vacating the demised
            premises. Lessor(s) shall have the right to adjust all the dues
            including but not limited to rent, maintenance, electricity, water,
            sewerage, etc. of the notice period from the Refundable Security
            deposit except the electricity and water charges if to be borne by
            Lessor(s).
          </p>
        </li>

        <li>
          <p>
            That the electricity and water charges will be paid timely regularly
            every month by the Lessee as per actual bills provided by the
            service provider. A copy of the payment receipts will be provided by
            the Lessee to the Lessor(s) on demand.
          </p>
        </li>

        <li>
          <p>
            That the Lessor(s) shall hand over the premises to the Lessee in a
            habitable condition. The detailed list of items provided as part of
            this lease is enumerated as ANNEXURE 1 to this Deed.
          </p>
        </li>

        <li>
          <p>
            That in case any damage is caused by the LESSEE to the aforesaid
            premises, fixtures, fittings, etc.(except normal wear and tear), the
            LESSEE shall be liable to make good the same to ensure that those is
            restored in the same condition as they were at the time of signing
            of this lease other than the changes made by the LESSEE with the
            consent of the LESSOR(S). In case of LESSEE fails to do so,
            LESSOR(S) shall be entitled to deduct the costs of doing the same
            from the interest free security deposit.
          </p>
        </li>

        {contractDetails.increaseRent && (
          <li>
            <p>
              That after the expiry of the monthly rent shall be increased at
              the escalation of
              <HighlightedSpan>{`${contractDetails.increaseRentPercentage}%`}</HighlightedSpan>
              or at mutually agreed by all the parties at the time of renewal in
              the discussion as per prevailing market conditions.
            </p>
          </li>
        )}

        <li>
          <p>
            That the Second Party shall have no right, to make any addition,
            alteration in the said demised premises except furnishings. The
            Lessor(s) shall not be liable to pay any charges against the
            expenses incurred by the Lessee for any additional furnishing at the
            demised premises.
          </p>
        </li>

        <li>
          <p>
            That the Second Party shall have no right to sub-let the whole or
            part of demised premises to any other person or entity at any time.
            Further, The Lessor(s) or his authorized representative has the
            right to visit the demised premises on any working day during
            business hours after taking the Lessee’s permission.
          </p>
        </li>

        <li>
          <p>
            That the demised premises shall be used by the Lessee in a cordial
            and civilized manner without causing any nuisance or disturbance to
            the other occupants of the building complex. The Lessee shall use
            the demised premises for its bonafide legal purposes and shall not
            do or cause any actions or activities of illegal, immoral, unsocial
            nature in the said demised premises and will not create any nuisance
            to the neighborhood in any manner whatsoever.
          </p>
        </li>

        <li>
          <p>
            That day-to-day repair such as fuses, leakage of water taps,
            replacement of defective MCBs, Bulbs, Tube lights, Tube light
            Fittings, connecting sanitary pipes, doors, door locks, etc. shall
            be done by the Lessee at its own costs. However, major repairs such
            as leakage from the wall/ceiling, etc. would be rectified by the
            Lessor(s) on the request of Lessee.
          </p>
        </li>

        <li>
          <p>
            That in case the Lessee defaults in payment of rent for any month or
            commits any breach of any of the terms and conditions of this deed,
            the LESSOR(S) shall be entitled to get back the possession of the
            demised premises after providing reasonable notice to the Lessee. In
            such case, notice to the lessee shall be given by each of Lessor(s)
            / First Party.
          </p>
        </li>

        <li>
          <p>
            That the Lessee shall make sure that all the payments have been made
            on regular basis by them to the Service Providers or Government
            Authorities on account of any services utilized by them or
            taxes/levies demanded by or payable to Government Authorities on
            account of their transactions. The Lessee shall be liable at all
            times even after vacation of the said residential space for dues if
            any arising of the tenure of occupation of the Lessee which is
            liable to be paid by the Lessee.
          </p>
        </li>

        <li>
          <p>
            That any outstanding amount towards rental or maintenance, if not
            settled by the Lessee, will be adjusted from the security deposit of
            <HighlightedSpan>{`Rs ${contractDetails.securityAmount}`}</HighlightedSpan>
            provided to the LESSOR(S). The notice period to be served by either
            party would be of
            <HighlightedSpan>{`${contractDetails.noticePeriod} Month`}</HighlightedSpan>
            . Either the LESSOR(S) or the LESSEE may terminate this agreement
            without assigning any reasons whatsoever by giving one month’s
            advance notice to the other party. The respective notices shall be
            send and provided to each of the parties at their aforesaid
            addresses mentioned above.
          </p>
        </li>

        <li>
          <p>
            The Lessor(s) will ensure that all outstanding bills/ charges on the
            above said demised premises on account of electricity, water, and
            any other incidentals prior to the start of lease from
            <HighlightedSpan>
              {format(contractDetails.startDate, "d/m/yyyy")}
            </HighlightedSpan>
            are settled and paid. Any payment on account of the above pertaining
            to the period before the start of lease w.e.f.
            <HighlightedSpan>
              {format(contractDetails.startDate, "d/m/yyyy")}
            </HighlightedSpan>
            will be settled by the Lessor(s). In the unlikely instance that the
            connection/s for electricity or water is disconnected due to
            non-payment or negligence of the LESSEE, the charges to restoring
            such connections shall be borne fully by the LESSEE and if not paid
            the same can be deducted from the security deposit provided to the
            Lessor(s).
          </p>
        </li>

        <li>
          <p>
            That after the expiry of this Lease Deed, if the LESSOR(S) does not
            wish to renew it or to continue further, the Lessee is bound to
            vacate the demised premises immediately upon expiry of the lease to
            the Lessor(s) in all good faith and handover the peaceful possession
            to the Lessor(s) failing which the Lessee will pay damages at the
            rate of double the monthly rent as stipulated in this Deed.
          </p>
        </li>

        <li>
          <p>
            That the Lessor(s)/ his authorized agents shall acknowledge and give
            valid & duly stamped receipts as and when requested by the LESSEE as
            conclusive proof of rent payments on demand from the Lessee. The
            registration charges and stamp duty expenses will be shared by all
            parties in an equal ratio.
          </p>
        </li>

        <li>
          <p>
            It is further agreed between the parties that in case of any dispute
            the
            <HighlightedSpan>{basicDetails.city}</HighlightedSpan>
            court shall have the exclusive jurisdiction over the disputes.
          </p>
        </li>

        <li>
          <p>
            This Deed shall be governed by and interpreted in accordance with
            the laws of India. All disputes, differences, disagreements,
            controversies or claims arising out of or in connection with this
            Deed, including the validity, effect, and interpretation thereof,
            shall, at the request of either party, be referred to the sole
            arbitrator mutually appointed by all the parties, who shall conduct
            the arbitration proceedings in English and in accordance with the
            provisions of the Arbitration and Conciliation Act, 1996, or any
            amendment or statutory modification or replacement/substitution
            thereof. Any award made by the arbitrator shall be final and binding
            on the Parties. The cost and expenses of the arbitration
            proceedings, including fees of the arbitrators, shall be borne
            equally by the Parties. The venue of arbitration shall be as
            mutually decided by the parties.
          </p>
        </li>

        <li>
          <p>
            Without any prejudice to a Party’s other rights and claims under
            this Lease or otherwise, if one party breaches any of its
            representations, obligations, warranties, covenants or undertakings
            or violates any provision hereunder, it shall indemnify and keep the
            other Party and/or service providers harmless against all direct
            damages and costs suffered or borne by it/them thereby including but
            not limited to costs incurred in defending all claims/actions, or
            proceedings that may arise or may be otherwise necessary to ensure
            exclusive, quiet and peaceful access, occupation and use of the
            Leased Premises in accordance with this Deed. Without prejudice to
            other rights enjoyed by either Party (non- defaulting Party) under
            the Deed and Applicable Laws, the other Party (Defaulting Party)
            shall be responsible for and will indemnify against all claims,
            demands, suits, proceedings, judgments, direct damage, and relevant
            costs that the non-defaulting Party may suffer or incur in
            connection with loss of life and/or personal injury to the occupants
            of the Leased Premises and/or damage to the Building if the same
            arise from any wrongful/negligent act or omission of the defaulting
            Party.
          </p>
        </li>

        <li>
          <p>
            Force Majeure: If the whole or any part of the said Premises shall
            at any time during the term of the lease be destroyed or damaged due
            to any force majeure circumstances including storm, tempest, flood,
            Act of God, an act of terrorism, war or any other irresistible force
            or the Lessee is deprived of the use of the said Premises for
            reasons not attributable to the Lessee, the Lessor(s) hereby
            undertakes to restore the said Premises as expeditiously as possible
            or, as the case may be, to remove the impediment in its use and
            occupation as expeditiously as possible. Notwithstanding the
            foregoing, upon the happening of any such event as aforesaid, the
            Lessee shall not be liable to pay Lease Rent during the period the
            Lessee is deprived of the use of the said Premises or any part
            thereof. The Lessee shall also have the option to terminate the
            Lease after the event by giving one month’s notice and without
            payment of any rent in lieu thereof and without incurring any
            liability to pay any other amount whatsoever to the Lessor(s).
          </p>
        </li>

        <li>
          <p>
            Notice: Any notice or communication to be addressed by one party to
            the other shall be in writing and shall be served at the addresses
            as given hereinabove by registered post with A/D or at such other
            addresses as may be notified in writing by one party to another. Any
            change in such address shall be promptly notified to the other party
            in writing.
          </p>
        </li>

        <li>
          <p>Miscellaneous:</p>
          <div>
            <ol className="ps-6 list-decimal space-y-2">
              <li>
                <p>
                  This Lease Agreement constitutes the entire agreement
                  concerning the subject matter hereof between the Lessor(s) and
                  the Lessee and supersedes any prior representations or
                  agreements, whether written or oral between the Lessor(s) and
                  Lessee. No modification or amendment of this Agreement or
                  waiver of any of its provisions shall be binding upon the
                  parties hereto unless made in writing and duly signed by all
                  the Parties.
                </p>
              </li>

              <li>
                <p>
                  If any provision of this Agreement is held to be
                  unenforceable, the remaining provisions of this Agreement
                  shall continue to remain in full force and effect.
                </p>
              </li>

              <li>
                <p>Leegality.com is the e-witness to this rental agreement.</p>
              </li>
            </ol>
          </div>
        </li>
      </ol>

      <br />

      <p>Signature of the Lessor(s) / First Party</p>

      <br />

      <p>Signature of the Lessee / Second Party</p>

      <br />

      {chosenItemsList.length > 0 && (
        <div className="space-y-2">
          <p>Annexure 1</p>
          <p>
            Items provided by the LESSOR(S) at the time of execution of Lease
            Deed between the LESSOR(S) and the LESSEE are as follows:
          </p>
          <ItemsListTable items={chosenItemsList} />
        </div>
      )}
    </div>
  );
};

const ItemsListTable = ({ items }: { items: [string, number][] }) => {
  return (
    <table className="w-full  border-black border-collapse text-center">
      <thead>
        <tr>
          <td className="border border-black">Sr No.</td>
          <td className="border border-black">Item</td>
          <td className="border border-black">Number of Unites</td>
        </tr>
      </thead>
      <tbody>
        {items.map((itemEntry, i) => (
          <tr key={itemEntry[0]}>
            <td className="border border-black">{i + 1}</td>
            <td className="border border-black capitalize">{itemEntry[0]}</td>
            <td className="border border-black">{itemEntry[1]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default PreviewAgreementModal;
