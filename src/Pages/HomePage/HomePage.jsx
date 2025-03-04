import React from 'react'
import Hero from '../../Components/Hero/Hero'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'

const HomePage = () => {
  return (
    <div className='bg-[#090909]'>
        <div className='container mx-auto'>
            <Hero/>
            <WhyChooseUs/>
        </div>
    </div>
  )
}

export default HomePage