import Rect from "react";

const ItemCard = ({ movie }) => {
  const { overview, release_date, cover_url, duration } = movie;

  return (
    <div className='flex  w-full my-2 p-1 bg-gray-100'>
      <div className='w-4/12'>
        <img className='md:flex' src={cover_url} alt="" />
      </div>
      <div className='w-3/5 ml-2'>
        <div>
          <span className='my-3'>{`Related date: ${release_date}`}</span>
          <p className='text-xs my-3 font-mono xs:h-32 xs:overflow-y-scroll lg:h-auto lg:overflow-auto'>{overview || 'without overview'}</p>
        </div>
        <div className='py-1'>{duration ? `Duration: ${duration} min` : 'without duration exactly' }</div>
      </div>
    </div>
  );
};

export default ItemCard;
