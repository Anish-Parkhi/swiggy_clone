import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
PercentOutlinedIcon;
const navList = [
  {
    id: 1,
    name: 'Search',
    icon: SearchOutlinedIcon,
    to: '/',
  },
  {
    id: 2,
    name: 'Offers',
    icon: PercentOutlinedIcon,
    to: '/',
  },
  {
    id: 3,
    name: 'Sign In',
    icon: AccountCircleOutlinedIcon,
    to: '/',
  },
  {
    id: 4,
    name: 'Cart',
    icon: ShoppingBasketOutlinedIcon,
    to: '/cart',
  },
];

export default navList;
