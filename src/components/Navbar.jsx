import navList from '../../utils/common/navList';

const Navbar = () => {
  return (
    <nav className="flex justify-around p-6 border-2">
      <div>Swiggy</div>
      <ul className="flex justify-evenly gap-8 basis-5/12">
        {navList.map((navItem) => (
          <li key={navItem.id} className="text-lg cursor-pointer items-center">
            {' '}
            {<navItem.icon />}{' '}
            <span className="text-base ">{navItem.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
