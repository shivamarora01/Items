import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiHeart } from "react-icons/ci";

function Item1() {
  return (
    <div className='grid grid-cols-2'>
      <div className='h-48 border-solid border-black'>
        <div className='h-3/5'>
        <img className='object-cover' src="https://mulltiply-prod.s3.ap-south-1.amazonaws.com/uploads/2024/01/48e9ddd2-b761-11ee-b10d-694ead45503e.webp" alt="No Image Found" />
        </div>
        <div className='h-2/5 my-1'>
            <div className='bg-white'>
                <h1 className=' flex flex-start mx-1'>Sandel<span className='ml-14 my-1 text-xl'><CiHeart /></span></h1>
                
                <h1 className='flex flex-start mx-1'><LiaRupeeSignSolid /><span>799</span></h1>
                <button className='bg-yellow-500 mx-1 px-1 rounded-sm'>Add to Cart</button>
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
