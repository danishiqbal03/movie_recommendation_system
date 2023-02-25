import Image from 'next/image'
import MainCard from '../cards/MainCard'
import MainSearch from '../search/MainSearch'
import tp_1 from '../../public/banner/svg/tp_excellent.svg'
import tp_2 from '../../public/banner/svg/truspilot_5star_svg.svg'
import tp_3 from '../../public/banner/svg/trustpilot_svg.svg'
function MainBanner({img_url}) {
  return (
    <div className='relative bg-black pb-10'>
        <div className='max-w-7xl relative m-auto grid grid-cols-4'>
          <div className='order-1 col-span-2 mr-auto my-auto w-full h-full flex flex-col justify-start items-start'>
            <h1 className='text-6xl text-white font-bold mb-20'>Lights, Camera, Recommendation! Find Your Perfect Movie Match Today!</h1>
            <MainSearch/>
            <div className='flex gap-6 items-center mt-12'>
              <Image src={tp_1} alt='' className='' />
              <Image src={tp_2} alt='' className='' />
              <Image src={tp_3} alt='' className='' />
            </div>
          </div>
          <div className='order-2 col-span-2'>
            <Image 
            src={img_url}  
            alt=''
            className='ml-auto'
            width={500}
            height={500}
            />
          </div>
          
          {/* <MainCard title={title} img_url={cat_url} desc={desc} more_link={more_link}/> */}
        </div>
    </div>
  )
}

export default MainBanner