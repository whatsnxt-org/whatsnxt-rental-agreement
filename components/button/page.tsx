export const Button = ({title}: {title: string}) => (
    <div className="w-full h-28 md:bg-white md:z-20 flex flex-col gap-2 md:fixed md:bottom-0 md:left-0 md:justify-center md:items-center">
        <button className="bg-wnr-light-green w-full text-sm rounded-lg p-4 text-white font-bold md:w-11/12">
          {title}
        </button>
        <p className="text-xs text-gray">
          By continuing, I agree to get updates on WhatsApp
        </p>
      </div>
)