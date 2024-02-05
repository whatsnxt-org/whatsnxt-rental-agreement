"use client";

import { Info } from "lucide-react";
import { SlEnvolopeLetter } from "react-icons/sl";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { usePhotocopy } from "@/hooks/use-store-hooks";

const PhotocopyWidget = () => {
  const { photocopy, updatePhotocopy } = usePhotocopy();
  return (
    <div className="bg-wnr-purple/15 rounded-lg">
      <div className="p-4 pb-2">
        <div className="flex gap-4">
          <div className="w-16 h-8 rounded-xl bg-white grid place-content-center">
            <SlEnvolopeLetter className="text-wnr-purple" />
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-muted-foreground">
                  Add Photocopy
                </span>
                <Info className="text-muted-foreground w-4 h-4" />
              </div>

              <Checkbox
                className="bg-white"
                checked={photocopy}
                onCheckedChange={(v) => updatePhotocopy(!!v)}
              />
            </div>
            <p className="text-muted-foreground text-sm">
              Get the photocopy of the agreement along with the soft copy for
              just $250
            </p>
          </div>
        </div>
      </div>
      <Button className="w-full rounded-lg">
        Confirm Details & Pay {photocopy ? "₹949" : "₹699"}
      </Button>
    </div>
  );
};

export default PhotocopyWidget;
