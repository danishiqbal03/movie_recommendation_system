import Image from 'next/image'
import MainCard from '../cards/MainCard'

function MainBanner({img_url}) {
  return (
    <div className='relative bg-black pb-20'>
        <div className='max-w-7xl relative m-auto grid grid-cols-4'>
          <div className='order-1 col-span-2 mr-auto my-auto w-full h-full flex flex-col justify-start items-start'>
            <h1 className='text-6xl text-white font-bold mb-20'>Lights, Camera, Recommendation! Find Your Perfect Movie Match Today!</h1>
            <form className='flex items-center bg-[#dff9fb] p-5 rounded-lg w-full'>
              <select className='hidden'>
                <option></option>
              </select>
              <input type='text' placeholder="&#127871; ready? Find the perfect movie to match" className='w-[80%] h-12 px-4 placeholder:text-[#535c68] focus:outline-0		'/>
              <button className='btn-search w-[20%] whitespace-nowrap	'>Explore now</button>
            </form>
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