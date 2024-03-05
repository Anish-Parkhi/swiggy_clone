import CDNURL from '../../utils/common/cdnURl';

const CartItems = ({ data }) => {
  console.log(data);
  return (
    <div className="flex justify-between items-center border-b-2 p-2">
      <div>
        <div className="font-bold text-lg">{data?.name}</div>
        <div>₹ {data?.price / 100 || 'Free'}</div>
      </div>
      <img className="w-1/6" src={CDNURL + data?.imageId} />
    </div>
  );
};

export default CartItems;
