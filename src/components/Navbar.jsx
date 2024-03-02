import navList from '../../utils/common/navList';
import { swiggyLogoURL } from '../../utils/common/imageLinks';
import { useState } from 'react';

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <nav className="flex justify-around p-6 border-2 items-center">
      <img className="w-8 cursor-pointer" src={swiggyLogoURL} />
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
