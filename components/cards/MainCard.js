import Image from 'next/image'

function MainCard({title,img_url,desc,more_link,add_class}) {
  return (
    <div className={`bg-[#dff9fb] p-5 rounded-lg flex flex-col w-fit h-fit shadow-xl mr-5 ${add_class}`}>
        <div className=''>
          <Image src={img_url} width={200} height={100} alt='' className='rounded-lg max-h-72'/>
          <h3>{title}</h3>
        </div>
  
      {desc ? (
        <div>
          <div className='card_desc'>{desc}</div>
          <a className='card_desc' href={more_link}>Show More</a>
        </div>
      ) : null}
        
    </div>
  )
}

export default MainCard