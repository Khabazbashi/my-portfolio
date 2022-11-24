import addadata from "../data/data.json";

//TODO Add blurry loading animations when loading/loading component
//TODO Add different style in LG
//TODO Better images
//TODO Increase Card size on hover and perhaps blur the other ones
//TODO if no color returned default palette should be returned

const Home = () => {
  return (
    <div
      className="flex flex-col text-center h-[92%] lg:flex-row-reverse lg:h-[92.2%] xl:h-[94%] 
      2xl:h-[96%] 3xl:h-[96.5%]"
    >
      <div className="flex h-[50%] bg-saraimg bg-center bg-cover lg:h-[100%] lg:w-1/2">
        <p> </p>
      </div>
      <div
        className="flex flex-col py-4 px-4 h-[50%] md:px-40 md:py-32 md:h-[50%] lg:px-10 
        lg:h-[100%] lg:justify-center lg:m-auto lg:w-1/2 3xl:w-2/5 4xl:w-1/3 5xl:w-[29%]"
      >
        <h1 className="text-[#0f1e2d] text-4xl py-5 lg:pt-0 font-bold 4xl:text-5xl">
          {addadata.home.title}
        </h1>
        <p className="text-xl lg:text-xl 4xl:text-2xl">{addadata.home.info}</p>
      </div>
    </div>
  );
};
export default Home;
