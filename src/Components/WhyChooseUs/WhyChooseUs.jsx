import React from 'react'
import easy from '../../assets/images/easy.png'
import Affiliate from '../../assets/images/Affiliate.png'
import tracking from '../../assets/images/tracking.png'
import reward from '../../assets/images/reward.png'

const WhyChooseUs = () => {
  return (
    <div className='text-white mt-10 px-2 md:px-0'>
        <p className='text-center text-[30px] md:text-[48px] font-bold'>Why Choose Us?</p>
        <p className='text-center mt-5'>Unlock a world of opportunities with our referral program! Whether you’re looking to earn extra income or build a growing </p>
        <p className='text-center'>network, our multi-level commission structure ensures you get rewarded at every step.</p>

        <div className='md:flex f justify-between items-center py-10 mt-20'>
            <div className='flex flex-col justify-center items-center my-5'>
                <img src={easy} alt="" />
                <p className='text-xl font-semibold my-3'>Easy & Free Sign-Up</p>
                <p>Get started in minutes with</p>
                <p>your unique referral code</p>
            </div>
            <div className='flex flex-col justify-center items-center my-5' >
                <img src={Affiliate} alt="" />
                <p className='text-xl font-semibold my-3'>Multi-Level Earnings</p>
                <p>Earn commissions not just from </p>
                <p>direct referrals but from their </p>
                <p>referrals too!</p>
            </div>
            <div className='flex flex-col justify-center items-center my-5'>
                <img src={tracking} alt="" />
                <p className='text-xl font-semibold my-3'>Seamless Tracking</p>
                <p>Monitor your referrals and  </p>
                <p> earnings effortlessly through </p>
                <p>your dashboard.</p>
            </div>
            <div className='flex flex-col justify-center items-center my-5'>
                <img src={reward} alt="" />
                <p className='text-xl font-semibold my-3'>Instant Rewards</p>
                <p>Get paid quickly and </p>
                <p>securely as your network </p>
                <p>expands.</p>
            </div>
        </div>
    </div>
  )
}

export default WhyChooseUs