import React from 'react';
import { BsPlus, BsFillLightningFill } from 'react-icons/bs';
import { FaDiscord, FaFire, FaPoo } from 'react-icons/fa';
import { IoMdCompass } from 'react-icons/io';

const SideBar = () => {
  return (
    <div
      className='relative top-0 left-0 m-0 flex h-screen min-w-min
                  flex-col items-center bg-gray-300
                  pt-3 text-gray-900
                  shadow dark:bg-gray-900 dark:text-white'
    >
      <SideBarIcon
        icon={<FaDiscord size={28} />}
        isServerIcon={true}
        text={'Direct Messages'}
      />
      <Divider />
      <SideBarIcon
        icon={<FaFire size={28} />}
        isActive={true}
        isServerIcon={true}
      />
      <SideBarIcon
        icon={<BsFillLightningFill size={20} />}
        isServerIcon={true}
      />
      <SideBarIcon icon={<FaPoo size={20} />} isServerIcon={true} />
      <SideBarIcon
        icon={<BsPlus size={32} />}
        text={'Add a Server'}
        isServerIcon={false}
      />
      <SideBarIcon
        icon={<IoMdCompass size={22} />}
        text={'Explore Public Servers'}
        isServerIcon={false}
      />
    </div>
  );
};

const SideBarIcon = ({
  icon,
  isActive = false,
  isServerIcon = false,
  text = 'tooltip',
}) => (
  <div className='group relative mb-2 min-w-min px-3'>
    <Pip isActive={isActive} />
    <div
      className={`sidebar-icon ${isActive ? 'active' : ''} ${
        !isServerIcon
          ? 'text-green-500 hover:bg-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white'
          : ''
      }`}
    >
      {icon}{' '}
      <span className='sidebar-tooltip group-hover:scale-100'>{text}</span>
    </div>
  </div>
);

const Pip = ({ isActive }) => {
  return (
    <div
      className={`absolute top-1 -left-1 h-10 w-2
                  scale-0 rounded-lg bg-black
                  transition-all
                  dark:bg-gray-100
                  ${
                    !isActive
                      ? 'group-hover:scale-y-50 group-hover:scale-x-100'
                      : ''
                  }
                  ${isActive ? 'scale-100' : ''}`}
    ></div>
  );
};

const Divider = () => <hr className='sidebar-hr' />;

export default SideBar;
