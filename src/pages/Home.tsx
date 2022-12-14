import addadata from "../data/data.json";

const Home = () => {
  return (
    <div className="flex flex-col text-center h-full lg:flex-row-reverse">
      <div className="flex bg-saraimg bg-center bg-cover h-[50%] lg:h-[100%] lg:w-1/2">
        <p> </p>
      </div>
      <div className="flex flex-col justify-center items-center m-auto w-10/12 pb-16 h-1/2 lg:pb-0 lg:h-full lg:w-1/2">
        <div className="flex items-center justify-center py-5 lg:pt-0 ">
          <h1 className="text-[#0f1e2d] text-4xl font-bold">
            {addadata.home.title}
          </h1>
          <img className="w-7 h-7 ml-2" src="./wave.png" alt="waveicon" />
        </div>

        <p className="text-xl xl:w-10/12 3xl:w-2/3 4xl:text-2xl">
          {addadata.home.info}
        </p>
      </div>
    </div>
  );
};
export default Home;
