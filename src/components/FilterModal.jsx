import StarRounded from '@mui/icons-material/StarRounded';

const FilterModal = ({
  setRating,
  rating,
  handleClose,
  setDeliveryTime,
  deliveryTime,
}) => {
  return (
    <div className="bg-white p-10 rounded-lg">
      <div>Ratings</div>
      <div className="mt-4 flex justify-start gap-4">
        <button
          onClick={() => {
            rating !== 4.5 ? setRating(4.5) : setRating(0);
          }}
          className={
            rating === 4.5
              ? 'bg-orange-700 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
              : ' bg-white text-black flex font-bold py-2 px-4 rounded-3xl border-2'
          }
        >
          <span>4.5</span>
          <StarRounded />
        </button>
        <button
          onClick={() => {
            rating !== 4 ? setRating(4) : setRating(0);
          }}
          className={
            rating === 4
              ? 'bg-orange-700 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
              : ' bg-white text-black flex font-bold py-2 px-4 rounded-3xl border-2'
          }
        >
          <span>4</span>
          <StarRounded />
        </button>
        <button
          onClick={() => {
            rating !== 3 ? setRating(3) : setRating(0);
          }}
          className={
            rating === 3
              ? 'bg-orange-700 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
              : ' bg-white text-black flex font-bold py-2 px-4 rounded-3xl border-2'
          }
        >
          <span>3</span>
          <StarRounded />
        </button>
      </div>

      {/* delivery time filter  */}

      <div className="mt-5">Delivery Time</div>
      <div className="mt-4 flex justify-start gap-4">
        <button
          onClick={() => {
            deliveryTime !== 20 ? setDeliveryTime(20) : setDeliveryTime(200);
          }}
          className={
            deliveryTime === 20
              ? 'bg-orange-700 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
              : ' bg-white text-black flex font-bold py-2 px-4 rounded-3xl border-2'
          }
        >
          <span>{`> 20 mins`}</span>
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            setRating(0);
            setDeliveryTime(100);
            handleClose();
          }}
          className="bg-white text-black flex font-bold py-2 px-4 rounded-xl border-2 mt-4 self-end"
        >
          clear filter
        </button>
      </div>
    </div>
  );
};

export default FilterModal;
