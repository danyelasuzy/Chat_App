const Logo = () => {
  return (
    <div className="flex-start justify-center">
      <div className="h-15 w-15 rounded-full overflow-hidden flex items-center justify-center md:ml-5 md:h-20 md:w-20">
        <img
          src={`${import.meta.env.BASE_URL}imagedog.png`}
          alt="logo"
          className="h-full w-full object-contain scale-110 "
        />
      </div>
    </div>
  );
};

export default Logo;
