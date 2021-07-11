import Rect from "react";
import { Menu } from "../../assets/icons/menu";

export const Header = ({ title = 'Marvel Movies', handleFetchData }) => {
  return (
    <div className="flex flex-row items-center justify-center w-full bg-red-500 p-5">
      <div className=" flex flex-row items-center xs:w-4/5 sm:w-3/4 md:w-2/4 lg:w-2/5 ">
        <div>
            <Menu icon-role="menu-boxed"  className='cursor-pointer' onClick={handleFetchData} />
        </div>
        <div className='ml-7 text-lg text-gray-50'>
            { title }
        </div>
      </div>
    </div>
  );
};
