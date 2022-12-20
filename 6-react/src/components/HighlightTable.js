import React from 'react';

const HighlightTable = props => {
  let cols = []
  for (let i = 0; i < props.data.data.length; i++)  {
      cols.push(
        <div className='mx-2.5' key={props.data.data[i].name}>
          <p className={'text-center text-xxs font-medium uppercase mb-2 ' + (props.data.data[i].link ? 'text-blue-nav cursor-pointer' : 'text-black')}>{ props.data.data[i].name }</p>
          <p className='text-center text-lg font-semibold'>{ props.data.data[i].value }</p>
        </div>
      )
    }

    return (
      <div>
        <div className='bg-blue-header text-center text-white font-semibold py-1'>
          { props.data.header }
        </div>
        <div className='flex justify-center bg-gray-100 py-2'>
          { cols }
        </div>
      </div>
    );
};

export default HighlightTable;