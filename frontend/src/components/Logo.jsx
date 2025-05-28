const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className=" h-14 w-14 mt-1 rounded-full shadow-lg overflow-hidden flex items-center justify-center bg-white ml-2.5 md:h-25 md:w-25">
        <img
          src={`${import.meta.env.BASE_URL}imagedog.png`}
          alt="WoofHood Logo"
          className="h-full w-full object-contain scale-120 "
        />
      </div>
    </div>
  );
};

export default Logo;
