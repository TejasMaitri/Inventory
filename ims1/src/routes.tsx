// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";
import AddProduct from "views/products/addproducts";
import ViewProducts from "views/products/listproducts";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdAdd ,
  MdFormatListBulleted 
} from "react-icons/md";

const routes = [
  {
    name: " Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
 
  {
    name: "Add Products",
    layout: "/product",
    path: "addproduct",
    icon: <MdAdd  className="h-6 w-6" />,
    component: <AddProduct />,
  },
  {
    name: "View Products",
    layout: "/product",
    path: "viewproducts",
    icon: <MdFormatListBulleted  className="h-6 w-6" />,
    component: <ViewProducts />,
  },
  {
    name: "Analytics",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "analytics",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
  

];
export default routes;
