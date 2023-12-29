import EternalSunshine from "../assets/EternalSunshine.webp";

export const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[28rem] h-[16rem] overflow-hidden rounded-md">
        <img
          src={EternalSunshine}
          alt="Eternal Sunshine Image"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <h1 className="text-4xl font-bold text-emerald-900 dark:text-emerald-50 mt-4">
        Your movie library
      </h1>
      <p className="text-xl text-emerald-900 dark:text-emerald-50">
        To remember the emotions that you felt watching them
      </p>
    </div>
  );
};
