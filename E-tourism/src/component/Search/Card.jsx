import { MdOutlineWatchLater } from 'react-icons/md';
import { BiBus } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { BsFillEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';



export const Card = ({handleOnSetView,detail}) => {
  return (

      <Link to={"/place/"+detail._id}>
        <div onMouseEnter={handleOnSetView} className='px-4 mb-8'>
          <div className="bg-white border border-gray-200 rounded shadow">
            <a href="#">
                <img className="rounded-t" src={detail.images[0]} alt="" />
            </a>
            <div className="p-2">
                <a href="#">
                    <h5 className="mb-2 text-xl leading-7 font-medium text-[#222222]">{detail.place_title}</h5>
                </a>
                <p className="mb-2 text-sm leading-5 text-[#5C727D]">{detail.description}</p>
                <div className='flex items-center text-2xl'>
                  <div className='p-2 flex gap-1 items-center'>
                    <MdOutlineWatchLater/>
                    <p className='text-xs leading-4 text-[#5C727D]'>{detail.opening_hour+' - '+detail.closing_hour}</p>
                  </div>
                  <div className='p-2 flex gap-1 items-center'>
                    <BiBus/>
                    <p className='text-xs leading-4 text-[#5C727D]'>{detail.transport.length}</p>
                  </div>

                </div>
                <hr />
                <div className='flex justify-between items-center'>
                  <div className='p-2 flex gap-1 items-center text-md'>
                    <MdLocationOn/>
                    <p className='text-xs leading-4 text-[#5C727D]'>{detail.address}</p>
                  </div>
                  <div className='p-2 flex gap-1 items-center'>
                    <BsFillEyeFill/>
                    <p className='text-xs leading-4 text-[#5C727D]'>{detail.view}</p>
                  </div>

                </div>
            </div>
          </div>  
        </div>
      </Link>
  )
}
