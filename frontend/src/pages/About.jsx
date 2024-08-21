import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
<img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
<div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda natus excepturi doloribus voluptates repellendus optio doloremque earum mollitia alias voluptatibus maxime obcaecati, odio labore. Dolorum quas illo enim aliquam optio dolor vero fuga, corrupti expedita odio beatae quae eligendi assumenda accusantium nemo commodi! Nobis, animi!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe libero magnam ad! Fugit sequi aliquid dolorem nam consequuntur, vero quisquam, ducimus maiores quaerat ipsa vel dolorum necessitatibus laboriosam. Alias inventore nesciunt id libero veritatis aliquid debitis quaerat quo, nostrum placeat!</p>
<b className='text-gray-800'>Our Mission</b>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis laborum itaque magni asperiores, dolore dolor quas autem laboriosam ea quam minima aperiam reprehenderit saepe quod veniam, fugiat adipisci accusamus eius iure. Quis, optio magnam quia sed delectus libero molestias tempora.</p>
</div>

      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 mx:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Quality Assurance :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus beatae facilis dolore blanditiis debitis illum?</p>
        </div>
        <div className="border px-10 mx:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="">Convenience :</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus beatae facilis dolore blanditiis debitis illum?</p>
        </div>
        <div className="border px-10 mx:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className='text-gray-600'>Exceptional Coustomer Service :</b>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus beatae facilis dolore blanditiis debitis illum?</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About