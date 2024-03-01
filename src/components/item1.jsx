import {React,useState} from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

function Item1() {
  
  const [heartIcon,setHeartIcon] = useState(false)
  const handleIconClick = () => {
    console.log("Heart Clicked!!")
      setHeartIcon(!heartIcon)
  }
  return (
    <div className='grid grid-cols-2'>
       <div className='h-56 border border-solid border-neutral-600'>
        <div className='h-3/5'>
        <img className='object-cover h-full w-full' src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="No Image Found" />
        </div>
        <div className='h-2/5 my-2'>
            <div className='bg-white'>
              <div className='flex justify-between mx-1'>
                <h1 className=''>Sandel</h1>
                    <h1 className='my-1 text-xl' onClick={handleIconClick}>
                      {heartIcon ? <FaHeart className='text-red-500'/> : <CiHeart/>}
                    </h1>
              </div>
              <div className='flex flex-start mx-1'>
                <h1 className='mt-1'><LiaRupeeSignSolid /></h1>
                <h1 className='text-md'>799      <span className='text-sm line-through'>(1299)</span>        <span className='text-red-700 font-semibold text-sm'>38%</span></h1>
              </div>
                <button className='bg-yellow-400 px-1 rounded-sm flex flex-start mx-1 mt-1 text-sm'>Add to Cart</button>
            </div>
        </div>
      </div>
      <div className='h-56 border border-solid border-neutral-600'>
        <div className='h-3/5'>
        <img className='object-cover h-full w-full' src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="No Image Found" />
        </div>
        <div className='h-2/5 my-2'>
            <div className='bg-white'>
              <div className='flex justify-between bg-red-400 mx-1'>
                <h1 className=''>Sandel</h1>
                <h1 className='my-1 text-xl'><CiHeart /></h1>
              </div>
              <div className='flex flex-start bg-blue-400 mx-1'>
                <h1 className='mt-1' onClick={handleIconClick}>{heartIcon}</h1>
                <h1 className='text-sm'>799</h1>
              </div>
                <button className='bg-yellow-500 px-1 rounded-sm flex flex-start mx-1 mt-1 text-sm'>Add to Cart</button>
            </div>
        </div>
      </div>
      <div className='h-56 border border-solid border-neutral-600'>
        <div className='h-3/5'>
        <img className='object-cover h-full w-full' src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="No Image Found" />
        </div>
        <div className='h-2/5 my-2'>
            <div className='bg-white'>
              <div className='flex justify-between mx-1'>
                <h1 className=''>Sandel</h1>
                <h1 className='my-1 text-xl'>{heartIcon}</h1>
              </div>
              <div className='flex flex-start mx-1'>
                <h1 className='mt-1'><LiaRupeeSignSolid /></h1>
                <h1 className='text-md'>799      <span className='text-sm line-through'>(1299)</span>        <span className='text-red-700 font-semibold text-sm'>38%</span></h1>
              </div>
                <button className='bg-yellow-400 px-1 rounded-sm flex flex-start mx-1 mt-1 text-sm'>Add to Cart</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Item1
