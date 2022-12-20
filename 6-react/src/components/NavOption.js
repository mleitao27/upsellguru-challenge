import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

const NavOption = props => {
  let menuArrow = <div/>;
  if(props.menu) menuArrow = <AiFillCaretDown className={'ml-1 ' + (props.isSelected ? 'text-blue-nav' : 'text-white')} />;
  return (
    <div className={'px-4 py-2 mr-2 cursor-pointer flex items-center ' + (props.isSelected ? 'bg-white' : 'bg-blue-nav')} onClick={props.changePage.bind(this, props.text)}>
        <p className={'font-semibold uppercase ' + (props.isSelected ? 'text-blue-nav' : 'text-white')}>
          {props.text}
        </p>
        { menuArrow }
    </div>
  );
};

export default NavOption;