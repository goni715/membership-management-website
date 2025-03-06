import React from 'react'
import img from '../../assets/images/hero.png'
import face from '../../assets/images/facebook.png'
import whats from '../../assets/images/whatsapp.png'
import instagram from '../../assets/images/instagram.png'
import telegram from '../../assets/images/telegram.png'
import messenger from '../../assets/images/messenger.png'
import twitter from '../../assets/images/twitter.png'
const Hero = () => {
  return (
    <div className='text-white grid grid-cols-1 md:grid-cols-2 justify-between py-20 px-2 md:px-0'>
        <div>
            <p className='text-[30px] md:text-[64px]  font-bold mb-5'>Refer & Earn Rewards</p>
            <p>Refer Your Friends, Earn Real Cash, and Withdraw Instantly</p>
            <p>– No Limits, No Hassle!</p>
            <div className='md:flex items-center gap-4'>
                <p>Share referral code through</p>
                <div className='flex items-center gap-1 my-5'>
                    <img src={face} alt="" />
                    <img src={whats} alt="" />
                    <img src={instagram} alt="" />
                    <img src={telegram} alt="" />
                    <img src={messenger} alt="" />
                    <img src={twitter} alt="" />
                </div>
            </div>
        </div>
        <div className='mx-auto'>
            <img src={img} alt="" />

        </div>
    </div>
  )
}

export default Hero