import React from 'react';

interface TimelineItemProps {
  items: any;
  orientation?: string;
}

const PersonalTimeline: React.FC<TimelineItemProps> = ({ items, orientation }) => {
  return (
    <div className={`grid ${orientation === 'vertical' ? 'grid-flow-row' : 'grid-flow-col'}`}>
      {items.map((item: any, index: any) => (
        <div key={index} className={`grid ${orientation === 'vertical' ? 'grid-cols-3' : 'grid-rows-3'} place-items-center`}>
          <div className={`flex h-full w-full ${orientation === 'vertical' ? 'justify-end items-center' : 'items-end justify-center'}`}>
            <span className="text-secondary">{item.date}</span>
          </div>
          <div className="flex w-full h-full gap-0 items-center justify-center">
            <div className="w-4 h-4 absolute flex justify-center items-center bg-secondary rounded-full" />
            <div className={`w-full ${orientation === 'vertical' ? 'w-[1px] h-full' : 'w-full h-[1px]'} bg-secondary`}></div>
          </div>
          <div className='text-center text-sm w-4/6 gap-3 flex flex-col'>
            <h3 className="font-bold">{item.name}</h3>
            <p className="italic">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalTimeline;
