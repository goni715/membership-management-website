import React from 'react'
import Hero from '../../Components/Hero/Hero'
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs'
import StepEarn from '../../Components/StepEarn/StepEarn'

const HomePage = () => {
  return (
    <div className='bg-[#090909]'>
        <div className='container mx-auto'>
            <Hero/>
            <WhyChooseUs/>
            <StepEarn/>
        </div>
    </div>
  )
}

export default HomePage