const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="h-25 w-25 rounded-full shadow-lg overflow-hidden flex items-center justify-center bg-white ml-2.5">
        <img
          src="/imagedog.png"
          alt="WoofHood Logo"
          className="h-full w-full object-contain scale-120"
        />
      </div>
    </div>
  );
};

export default Logo;
