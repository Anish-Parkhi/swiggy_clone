const cuisinesImageURL = [
  {
    id: 1,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667625/PC_Creative%20refresh/Biryani_2.png',
  },
  {
    id: 2,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png',
  },
  {
    id: 3,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029853/PC_Creative%20refresh/3D_bau/banners_new/Kebabs.png',
  },
  {
    id: 4,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png',
  },
  {
    id: 5,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png',
  },
  {
    id: 6,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png',
  },
  {
    id: 7,
    url: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/v1675667626/PC_Creative%20refresh/South_Indian_4.png',
  },
];

export const swiggyLogoURL =
  'data:image/png;base64,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';
export const swiggyLogoURLBlack =
  'https://5.imimg.com/data5/ANDROID/Default/2021/5/EZ/FT/GZ/130133306/product-jpeg-500x500.jpg';

export const vegLogo =
  'data:image/png;base64,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';
export const nonVegLogo =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROlgEoZzOzQaGN7NKhj6npioHZkgG0QGBatg&usqp=CAU';
export default cuisinesImageURL;
