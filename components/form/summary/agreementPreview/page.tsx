import { Dialog } from "@mui/material";
import { RxCross2 } from "react-icons/rx";

export const AgreementPreview = ({open, onClose}: {open: boolean, onClose: Function}) => {

  return (
    <Dialog open={open} onClose={() => onClose()} className="w-screen h-screen">
      <div className="w-full h-auto p-4">
      <RxCross2 
      onClick={() => onClose()}
      fontSize={30}
       className="absolute top-2 left-2 text-slate-500 bg-slate-300 bg-opacity-45 p-1 rounded-full hover:cursor-pointer" />
        <h2 className="font-bold text-2xl text-center">Agreement Preview</h2>
        <br />
        <img
          className="w-full h-full object-cover rounded-sm"
          src="https://housing-ca.s3-ap-southeast-1.amazonaws.com/housing-edge/assets/SJ112AA575.png"
          alt="rupee"
        />
        <br />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Dialog>
  );
};
