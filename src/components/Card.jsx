import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CDNURL from '../../utils/common/cdnURl';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

const Card = ({ resturantData }) => {
  const navigate = useNavigate();
  const resId = resturantData?.info?.id;

  const navigateToRestaurant = useCallback(() => {
    navigate(`/resturant/${resId}`, { state: resId });
  }, [resId, navigate]);

  return (
    <div onClick={navigateToRestaurant} className="basis-1/5 cursor-pointer">
      <img
        className="rounded-2xl w-full h-48 object-cover"
        src={CDNURL + resturantData?.info?.cloudinaryImageId}
      />
      <div className="w-11/12 m-auto flex-1 mt-2">
        <span className="text-base font-bold">
          {resturantData?.info?.name.slice(0, 24)}
          {resturantData?.info?.name.length > 28 && '...'}
        </span>
        <div className="flex items-center gap-1">
          <StarRoundedIcon />
          <div>{resturantData?.info?.avgRating} · </div>
          <div> {resturantData?.info?.sla?.deliveryTime} mins</div>
        </div>
        <div className="text-slate-500">
          {resturantData?.info?.cuisines[0]}, {resturantData?.info?.cuisines[1]}
        </div>
        <span className="text-slate-500">{resturantData?.info?.areaName}</span>
      </div>
    </div>
  );
};

export default Card;
