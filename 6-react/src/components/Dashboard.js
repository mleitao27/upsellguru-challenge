import React from 'react';
import HighlightTable from './HighlightTable';
import highlights from '../assets/highlights.json'
import dailyLog from '../assets/daily-log.json'
import { dateFormatting, euroFormatting } from '../mixins/globalHelpers'
import { AiOutlineCheck } from 'react-icons/ai';

const Dashboard = () => {
  let now = Date.now();
  let highlightTables = [];
  for (let i = 0; i < highlights.length; i++)  {
    let data  = highlights[i]
    highlightTables.push(
      <HighlightTable
        key={i}
        data={data}
      />
    )
  }

  let logs = [];
  for (let i = 0; i < dailyLog.length; i++)  {
    let data  = dailyLog[i]
    logs.push(
      <div key={i} className={'grid grid-cols-11 gap-2 text-center py-2 text-sm ' + ( data.arrivals > 0 ? 'bg-blue-hover ' : i % 2 ? 'bg-gray-100 ' : 'bg-white ') + (i !== dailyLog.length-1 ? 'border-b' : '')}>
        <div className='grid grid-cols-2'>
          {now > Date.parse(data.date) ? <AiOutlineCheck className='bg-green-checked text-white rounded mx-1 w-5 h-5 p-1' /> : <div/>}
          <p>{dateFormatting(data.date)}</p>
        </div>
        <p>{data.arrivals}</p>
        <p>{data.sent}</p>
        <p>{data.bids}</p>
        <p className={'text-green-500 ' + (data.upgrades > 0 ? 'font-bold' : '')}>{data.upgrades}</p>
        <p className={'text-red-500 ' + (data.denied > 0 ? 'font-bold' : '')}>{data.denied}</p>
        <p className={'bg-yellow-100 -my-2 py-2 ' + (data.rooms_pending > 0 ? 'font-bold' : '')}>{data.rooms_pending}</p>
        <p>{euroFormatting(data.rooms_revenue)}</p>
        <p className={'bg-yellow-100 -my-2 py-2 ' + (data.extras_pending > 0 ? 'font-bold' : '')}>{data.extras_pending}</p>
        <p className={'text-green-500 ' + (data.extras_sold > 0 ? 'font-bold' : '')}>{data.extras_sold}</p>
        <p>{euroFormatting(data.extras_revenue)}</p>
      </div>
    )
  }

  return (
    <div>
      {/* Highlights tables */}
      <div className='m-4 grid grid-cols-4 gap-4'>
        {highlightTables}
      </div>
      {/* Daily log header */}
      <div className='grid grid-cols-11 gap-2 text-sm bg-blue-header text-white text-center font-semibold items-center py-2'>
        <p>Date</p>
        <p>Arrivals</p>
        <p>Sent</p>
        <p>Bids Received</p>
        <p>Upgrades</p>
        <p>Denied</p>
        <p>Pending (Rooms)</p>
        <p>Revenue (Rooms)</p>
        <p>Pending (Extras)</p>
        <p>Extras Sold</p>
        <p>Revenue (Extras)</p>
      </div>
        { logs }
      {/* Daily log table content */}
    </div>
  );
};

export default Dashboard;