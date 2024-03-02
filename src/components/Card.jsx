import StarRoundedIcon from '@mui/icons-material/StarRounded';
import CDNURL from '../../utils/common/cdnURl';
import { useNavigate } from 'react-router-dom';

const Card = ({ resturantData }) => {
  const navigate = useNavigate();
  const resId = resturantData?.info?.id;
  
  return (
    <div
      onClick={() => {
        navigate(`/resturant/${resId}`, {state:resId});
      }}
      className="basis-1/5 cursor-pointer"
    >
      <img
        className="rounded-2xl w-full h-48 object-cover"
        src={CDNURL + resturantData?.info?.cloudinaryImageId}
      />
      <div className="w-11/12 m-auto flex-1 mt-2">
        <span className="text-xl font-bold">{resturantData?.info?.name}</span>
        <div className="flex items-center gap-1">
          <StarRoundedIcon />
          <div>{resturantData?.info?.avgRating} ·</div>
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
