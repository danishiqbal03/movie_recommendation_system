import Image from 'next/image'

function MainCard({title,img_url,desc,more_link}) {
  return (
    <div>
        <div>
          <Image src={img_url} width='' height='' alt='' />
          <h3>{title}</h3>
        </div>
        <div className=''>
          <div className='card_desc'>{desc}</div>
          <a className='card_desc' href={more_link}>Show More</a>
        </div>
    </div>
  )
}

export default MainCard