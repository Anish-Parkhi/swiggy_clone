import { Oval } from 'react-loader-spinner';
import ShimmerCard from './ShimmerCard';

const TopShimmer = () => {
  const cards = [0, 1, 2, 3, 4, 5];
  return (
    <>
      <div className="bg-cyan-950 sticky top-0 p-20 flex flex-col m-auto items-center gap-6 justify-center">
        <Oval
          className="self-center"
          visible={true}
          height="80"
          width="80"
          color="#FAF9F6"
          ariaLabel="oval-loading"
          wrapperStyle={{ color: '#FAF9F6' }}
          wrapperClass=""
        />
        <div className="text-slate-300 text-2xl	">
          Looking for great food near you ...
        </div>
      </div>
      <div className="flex w-2/3 gap-10 mt-4 mb-4 m-auto flex-wrap justify-center ">
        {cards.map((item) => (
          <ShimmerCard />
        ))}
      </div>
    </>
  );
};

export default TopShimmer;
