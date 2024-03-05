import cuisinesImageURL from '../../utils/common/imageLinks';

const Cuisines = ({ apiData }) => {
  const cuisineHeader = apiData?.data?.cards[0]?.card?.card?.header?.title;
  return (
    <div className="p-5">
      <span className="text-2xl font-extrabold">{cuisineHeader}</span>
      <div className="flex justify-center gap-3	">
        {cuisinesImageURL.map((item) => {
          return <img className="w-40" key={item.id} src={item.url} />;
        })}
      </div>
      <hr className="h-px my-8 mb-2 bg-gray-200 border-0 dark:bg-gray-400 shadow-md " />
    </div>
  );
};

export default Cuisines;
