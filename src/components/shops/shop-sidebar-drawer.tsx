import Scrollbar from '@components/common/scrollbar';
import { useUI } from '@contexts/ui.context';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { getDirection } from '@utils/get-direction';
import { useRouter } from 'next/router';
import ShopSidebar from './shop-sidebar';

interface Props {
  data: any;
}

const ShopSidebarDrawer: React.FC<Props> = ({ data }) => {
  const { closeShop } = useUI();
  const router = useRouter();
  const dir = getDirection(router.locale);
  return (
    <div className="flex flex-col justify-between w-full h-full">
      <div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7 flex-shrink-0 py-0.5">
        <button
          className="flex text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
          onClick={closeShop}
          aria-label="close"
        >
          {dir === 'rtl' ? (
            <IoArrowForward className="text-black" />
          ) : (
            <IoArrowBack className="text-black" />
          )}
        </button>
        <h2 className="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center ltr:pr-6 rtl:pl-6">
          Details
        </h2>
      </div>

      <Scrollbar className="shop-sidebar-scrollbar flex-grow mb-auto">
        <ShopSidebar data={data} />
      </Scrollbar>
    </div>
  );
};

export default ShopSidebarDrawer;
