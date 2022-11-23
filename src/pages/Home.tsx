import addadata from "../data/data.json";

//TODO Add blurry loading animations when loading/loading component
//TODO Add different style in LG
//TODO Better images
//TODO Increase Card size on hover and perhaps blur the other ones
//TODO if no color returned default palette should be returned
//TODO Sanity

const Home = () => {
  return (
    <div className="flex flex-col text-center h-[92%] lg:flex-row-reverse lg:h-[92.2%] xl:h-[93.5%] 2xl:h-[96%] 3xl:h-[96.5%]">
      <div className="flex h-[50%] bg-saraimg bg-center bg-cover lg:h-[100%] lg:w-1/2">
        <p> </p>
      </div>
      <div className="flex flex-col py-4 px-4 h-[50%] md:px-20 md:py-24 md:px-10 md:h-[60%] lg:h-[100%] lg:w-1/2 lg:justify-center 2xl:px-16 3xl:px-22">
        <h1 className="text-[#0f1e2d] text-4xl py-5 lg:pt-0 font-bold 3xl:text-5xl 3xl:py-8">
          {addadata.home.title}
        </h1>
        <p className="text-xl lg:text-xl xl:text-2xl 3xl:text-3xl 3xl:leading-10">
          {addadata.home.info}
        </p>
      </div>
    </div>
  );
};
export default Home;