import React from 'react'
import img1 from '../../assets/images/ref1.png'
import img2 from '../../assets/images/ref2.png'
import img3 from '../../assets/images/ref3.png'
const RefferralHistory = () => {
  return (
    <div className='p-4'>
        <p className='text-xl mb-8'>Referral History</p>
        <div className='border-b border-[#333333] pb-2 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <img src={img1} alt="" />
                <div>
                    <p>Wade Warren</p>
                    <p>Dec 30 , 2019 : 23: 26</p>
                </div>
            </div>
            <div>
                <p>$45.00</p>
                <p className='text-sm'>Status :  Inactive</p>
            </div>
        </div>
        <div className='border-b border-[#333333] pb-2 mt-5 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <img src={img1} alt="" />
                <div>
                    <p>Wade Warren</p>
                    <p>Dec 30 , 2019 : 23: 26</p>
                </div>
            </div>
            <div>
                <p>$45.00</p>
                <p className='text-sm'>Status :  Inactive</p>
            </div>
        </div>
        <div className='border-b border-[#333333] pb-2 mt-5 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <img src={img2} alt="" />
                <div>
                    <p>Wade Warren</p>
                    <p>Dec 30 , 2019 : 23: 26</p>
                </div>
            </div>
            <div>
                <p>$45.00</p>
                <p className='text-sm'>Status :  Inactive</p>
            </div>
        </div>
        <div className='border-b border-[#333333] mt-5 pb-2 flex items-center justify-between'>
            <div className='flex items-center gap-8'>
                <img src={img3} alt="" />
                <div>
                    <p>Wade Warren</p>
                    <p>Dec 30 , 2019 : 23: 26</p>
                </div>
            </div>
            <div>
                <p>$45.00</p>
                <p className='text-sm'>Status :  Inactive</p>
            </div>
        </div>
    </div>
  )
}

export default RefferralHistory 