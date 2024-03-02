import Card from './Card';

const ResturantsListing = ({ apiData }) => {
  const data = [1, 2, 3, 4];
  //   console.log(
  //     apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
  //       ?.restaurants
  //   );

  const resturantData =
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  return (
    <div className="p-6 pt-0 mt-0">
      <span className="text-2xl font-extrabold ">
        Restaurants with online food delivery in Chennai
      </span>
      <div className="flex flex-row justify-center gap-8 mt-4 flex-wrap">
        {resturantData?.map((item, index) => (
          <Card resturantData={resturantData[index]} />
        ))}
      </div>
    </div>
  );
};

export default ResturantsListing;
