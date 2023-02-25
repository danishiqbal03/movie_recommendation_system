import Image from "next/image"
import vb from '../../public/featured/logos/tc.svg'
import cio from '../../public/featured/logos/cio.svg'
import tnw from '../../public/featured/logos/tnw.svg'
function FeaturedIn() {
  return (
    <div className="flex bg-[#EEF0F3] gap-8 m-auto justify-center items-center py-5">
        <div className="text-[#7f8c8d]  text-lg tracking-tighter border-r-2 border-[#7f8c8d] pr-5">Featured In</div>
        <div className="flex items-center gap-12">
            <Image 
                src={vb} 
                alt=''
                className='ml-auto'
                width={130}
                height={130}
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
                width={130}
                height={130}
            />


        </div>
        
        
    </div>
  )
}

export default FeaturedIn