import { swiggyLogoURLBlack } from '../../utils/common/imageLinks';

const Footer = () => {
  return (
    <div className="bg-black text-white p-20">
      <ul className="flex items-start justify-center gap-16 cursor-pointer">
        <li className="flex items-center basis-1/4">
          <img className="w-2/6" src={swiggyLogoURLBlack} />
          <div>
            <div className="text-2xl font-extrabold">Swiggy</div>
            <div className="w-5/6">
              © Developed by none other than Anish Parkhi
            </div>
          </div>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-extrabold">Company</li>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy Instamart</li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-extrabold ">Contact us</li>
            <li>Help & support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
            <li>Terms & Conditions</li>
          </ul>
        </li>
        <li>
          <ul className="flex flex-col gap-3">
            <li className="text-2xl font-extrabold ">We deliver to</li>
            <li>Banglore</li>
            <li>Pune</li>
            <li>Mumbai</li>
            <li>Chennai</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
