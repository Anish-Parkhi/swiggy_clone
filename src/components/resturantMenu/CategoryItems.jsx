import MenuItems from './MenuItems';

const CategoryItems = ({ categoryItem }) => {
  return (
    <>
      <div className="flex justify-between text-xl font-extrabold bg-slate-200 p-1">
        <div>{categoryItem?.card?.card?.title}</div>
        <div className="mr-5 cursor-pointer">+</div>
      </div>
      <ul className="flex flex-col gap-2">
        {categoryItem?.card?.card?.itemCards?.map((foodItem) => (
          <MenuItems foodItem={foodItem} />
        ))}
      </ul>
    </>
  );
};

export default CategoryItems;
