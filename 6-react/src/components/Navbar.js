import React from 'react';
import NavOption from './NavOption';
import Logo from './Logo';
import { AiFillGift, AiOutlineSearch, AiFillQuestionCircle, AiFillCaretDown } from 'react-icons/ai';

const Navbar = props => {
  const options = [];

  for (let key in props.options)  {
    options.push(
      <NavOption
        key={key}
        text={key}
        menu={props.options[key].menu}
        changePage={props.changePage}
        isSelected={props.selectedNav === key} />
    )
  }

  return (
    <div className='flex px-4 py-3 bg-blue-nav justify-between'>
      <div className='flex items-center justify-between'>
        {/* Logo */}
        <Logo />
        {/* Nav options */}
        { options }
      </div>
      <div className='flex items-center'>
        <AiOutlineSearch className='mr-4 text-xl cursor-pointer' color='white' />
        <AiFillGift className='mr-4 text-xl cursor-pointer' color='white' />
        <AiFillQuestionCircle className='mr-4 text-xl cursor-pointer' color='white' />
        <div className='flex items-center cursor-pointer'>
          <p className='font-semibold uppercase text-white'>
            Hotel #6
          </p>
          <AiFillCaretDown className={'ml-1 ' + (props.isSelected ? 'text-blue-nav' : 'text-white')} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;