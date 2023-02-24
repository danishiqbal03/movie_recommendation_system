import Image from 'next/image'
import { Inter } from '@next/font/google'
import MainHeader from '../components/headers/MainHeader.js'
import MainBanner from '../components/banners/MainBanner.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const img_url ='/banner/b3.jpg';
  return (
    <div>
      <MainHeader />
      <MainBanner img_url={img_url}/>
    </div>
  )
}
