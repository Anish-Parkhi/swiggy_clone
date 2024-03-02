import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import Card from './Card';
import FilterModal from './FilterModal';

const ResturantsListing = ({ apiData }) => {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [isVegSelected, setIsVegSelected] = useState(false);
  const [deliveryTime, setDeliveryTime] = useState(200);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const ModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 1,
  };

  const resturantData =
    apiData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const ratingBasedFilter = resturantData?.filter(
    (prev) =>
      prev.info?.avgRating >= rating &&
      prev?.info?.sla?.deliveryTime <= deliveryTime &&
      (isVegSelected ? prev?.info?.veg === true : true)
  );

  // now make fearture of delivery time

  return (
    <div className="p-6 pt-0 mt-0">
      <div className="sticky top-0 bg-white	p-2">
        <span className="text-2xl font-extrabold ">
          Restaurants with online food delivery in Chennai
        </span>

        {/* filter section  */}
        <div className="flex mt-4 mb-4 gap-4">
          <button
            onClick={handleOpen}
            className="bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 items-center"
          >
            Filter
            <FilterAltOutlinedIcon />
          </button>

          <button
            onClick={() => {
              rating !== 4 ? setRating(4) : setRating(0);
            }}
            className={
              rating !== 0
                ? 'bg-orange-700 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
                : 'bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 items-center'
            }
          >
            Rating 4.0+
          </button>

          <button
            onClick={() => {
              isVegSelected ? setIsVegSelected(false) : setIsVegSelected(true);
            }}
            className={
              isVegSelected
                ? 'bg-green-800	 text-white flex font-bold py-2 px-4 rounded-3xl border-2'
                : 'bg-white text-black font-bold py-2 px-4 rounded-3xl border-2 items-center'
            }
          >
            Veg Only
          </button>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div style={ModalStyle}>
          <FilterModal
            setDeliveryTime={setDeliveryTime}
            handleClose={handleClose}
            rating={rating}
            setRating={setRating}
            deliveryTime={deliveryTime}
          />
        </div>
      </Modal>

      <div className="flex flex-row justify-center gap-14 mt-4 flex-wrap">
        {ratingBasedFilter?.length !== 0 ? (
          ratingBasedFilter?.map((item, index) => (
            <Card resturantData={resturantData[index]} />
          ))
        ) : (
          <div>No resturant found</div>
        )}
      </div>
    </div>
  );
};

export default ResturantsListing;
