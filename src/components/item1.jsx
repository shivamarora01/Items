import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";

function Item1() {
  return (
    <div className='grid grid-cols-2'>


      <div className='h-56 border border-solid border-neutral-600'>
        <div className=''>
        <img className='object-cover' src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="No Image Found" />
        </div>
        <div className='h-1/2'>
            <div className='bg-white'>
                <h1 className=' flex flex-start mx-1'>Sandel<span className='ml-14 my-1 text-xl'><CiHeart /></span></h1>
                <h1 className='flex flex-start mx-1'><LiaRupeeSignSolid /><span>799</span></h1>
                <button className='bg-yellow-500 px-1 rounded-sm flex flex-start mx-1 text-sm'>Add to Cart</button>
            </div>
        </div>
      </div>






      <div className='bg-green-800 h-48'>
      <img src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="" />
      </div>
      <div className='bg-yellow-800 h-48'>
      <img src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="" />
      </div>
      <div className='bg-purple-800 h-48'>
      <img src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="" />
      </div>
      <div className='bg-blue-800 h-48'>Hi</div>
      <div className='bg-green-800 h-48'>Hi</div>
      <div className='bg-yellow-800 h-48'>Hi</div>
      <div className='bg-purple-800 h-48'>Hi</div>
      <div className='bg-green-800 h-48'>Hi</div>
      <div className='bg-yellow-800 h-48'>Hi</div>
      <div className='bg-purple-800 h-48'>Hi</div>
    </div>
  )
}

export default Item1
