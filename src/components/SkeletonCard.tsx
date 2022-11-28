const SkeletonCard = () => {
  return (
    <div className="flex flex-col rounded-3xl w-[22em] m-8 px-4 py-8 bg-gray-200 drop-shadow-lg animate-pulse">
      <div className="flex flex-row justify-between mb-4">
        <h2 className="bg-gray-300 w-1/2 h-6 mb-2 rounded-xl"></h2>
        <div className="bg-gray-300 w-3 h-3 mb-2 rounded-full"></div>
      </div>
      <div className="bg-gray-300 w-full h-36 rounded-xl mb-10"></div>
      <div className="bg-gray-300 w-11/12 h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-5/6 h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-11/12 h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-5/6 h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-full h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-10/12 h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-full h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-full h-4 mb-2 rounded-xl"></div>
      <div className="bg-gray-300 w-1/3 h-4 mb-2 rounded-xl"></div>
    </div>
  );
};

export default SkeletonCard;
