import ShimmerResturantCard from './ShimmerResturantCard';

const ShimmerResturant = () => {
  const cards = [0, 1];
  return (
    <div className="w-full m-auto mt-6 ">
      <div className="w-1/5 bg-slate-300 rounded mb-5 p-1"></div>
      <div className="flex justify-center m-auto">
        {cards.map((item, index) => (
          <ShimmerResturantCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default ShimmerResturant;
