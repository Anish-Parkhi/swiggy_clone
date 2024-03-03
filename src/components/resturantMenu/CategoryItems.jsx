import { useState } from 'react';
import MenuItems from './MenuItems';

// we followed approch to set the open accordian to clicked index
// but this is creating a bug => only a single accordian can be
// opened at a time

// now we will create a flag open pass it to all the elements and if the perticular
// index is clicked then the local flag will change

const CategoryItems = ({ categoryItem, myIndex }) => {
  const [isOpen, setIsOpen] = useState(myIndex === 0 ? true : false);
  return (
    <>
      <div className="flex justify-between text-xl font-extrabold bg-slate-200 p-1">
        <div>{categoryItem?.card?.card?.title}</div>
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="mr-5 cursor-pointer"
        >
          +
        </div>
      </div>
      {isOpen ? (
        <ul className="flex flex-col gap-2">
          {categoryItem?.card?.card?.itemCards?.map((foodItem, index) => (
            <MenuItems key={index} foodItem={foodItem} />
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default CategoryItems;
