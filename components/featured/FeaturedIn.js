import Image from "next/image"
import vb from '../../public/featured/logos/tc.svg'
import cio from '../../public/featured/logos/cio.svg'
import tnw from '../../public/featured/logos/tnw.svg'
function FeaturedIn() {
  return (
    <div className="flex bg-[#EEF0F3] gap-10 m-auto justify-center items-center py-8">
        <div className="text-[#7f8c8d]  text-xl tracking-tighter border-r-2 border-[#7f8c8d] pr-3">Featured In</div>
        <div className="flex items-center gap-14">
            <Image 
                src={vb} 
                alt=''
                className='ml-auto'
                width={150}
                height={150}
            />
            <Image 
                src={cio} 
                alt=''
                className='ml-auto'
                width={130}
                height={130}
            />
            <Image 
                src={tnw} 
                alt=''
                className='ml-auto'
                width={150}
                height={150}
            />


        </div>
        
        
    </div>
  )
}

export default FeaturedIn