import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import StarIcon from '@mui/icons-material/Star';

const ResturantName = ({ apiData }) => {
  const resturantName = apiData?.data?.cards[0]?.card?.card?.info?.name;
  const costForTwo = apiData?.data?.cards[0]?.card?.card?.info?.costForTwo;
  const rating = apiData?.data?.cards[0]?.card?.card?.info?.avgRatingString;
  const totalRatings =
    apiData?.data?.cards[0]?.card?.card?.info?.totalRatingsString;
  const areaName = apiData?.data?.cards[0]?.card?.card?.info?.areaName;
  const distance =
    apiData?.data?.cards[0]?.card?.card?.info?.feeDetails?.fees[0]?.fee;
  const cuisines = apiData?.data?.cards[0]?.card?.card?.info?.cuisines;

  return (
    <>
      <div className="text-xs mb-5  text-slate-500">
        Home / Chennai / {resturantName}
      </div>
      <div className="flex justify-between">
        <div>
          <div className="text-2xl font-extrabold">{resturantName}</div>
          <div className="text-sm text-slate-500">
            {cuisines?.map((item) => item).join(', ')}
          </div>
          <div className="text-sm	text-slate-500">
            {areaName} {distance / 1000} km
          </div>
        </div>
        <div className="flex flex-col border-2 p-1 rounded-xl justify-center gap-2">
          <div className="flex justify-center items-center gap-1">
            <StarIcon sx={{ fontSize: '1.2rem', color: 'green' }} />
            <div className="self-center">{rating}</div>
          </div>
          <hr />
          <div className="text-xs">{totalRatings}</div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="items-center flex mt-3 gap-1">
          <AccessTimeOutlinedIcon sx={{ fontSize: '1.6rem' }} />
          <div className="text-base">30 mins</div>
        </div>
        <div className="items-center flex mt-3">
          <CurrencyRupeeRoundedIcon sx={{ fontSize: '1.4rem' }} />
          <div className="text-base">{costForTwo / 100} for two</div>
        </div>
      </div>
    </>
  );
};

export default ResturantName;
