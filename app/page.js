import Image from 'next/image'
import { Inter } from '@next/font/google'
import MainHeader from '../components/headers/MainHeader.js'
import MainBanner from '../components/banners/MainBanner.js'
import FeaturedIn from '@/components/featured/FeaturedIn.js'
import Logo from '../public/logo/Logo.js'
import MainCard from '@/components/cards/MainCard.js'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400','900','700'],
 })

export default function Home() {
  const img_url ='/banner/b3.jpg';
  return (
    <div>
      <MainHeader />
      <MainBanner img_url={img_url}/>
      <FeaturedIn/>
      <div className='py-20 flex items-center'>
        <div className='max-w-7xl w-full m-auto grid grid-cols-2'>
          <div className='flex'>
            <div className='flex items-center'>
              <MainCard img_url='/posters/3.jpeg' title="Star Wars - Tales of the Jedi" add_class='-rotate-12 '/>
              <MainCard img_url='/posters/1.webp' title="Star Wars - Tales of the Jedi" add_class='-rotate-12 '/>
            </div>
          </div>
          <div className='flex flex-col items-start'>
            <div className='font-black text-5xl flex gap-4 items-center mb-8'>
              How <Logo color='black' size='5xl'/> Works
            </div>
            <div className='text-md gap-4 font-medium	text-[#34495e] flex flex-col'>
              <p>ReelQueue is an AI-powered movie and TV show recommendation system that provides a personalized movie and TV show discussion forum or social media platform for users to engage with their favorite content and discover new movies and TV shows based on their interests.</p>
              <p>To get started, users create a profile and a personalized list of movies and TV shows they like. The recommendation algorithm then suggests other movies and TV shows that users might enjoy. Users can join or create discussion groups on specific movies and TV shows, genres, or themes, and participate in live chats or watch parties with other users.</p>
              <p>ReelQueue also partners with popular content creators or influencers who create and share exclusive content, reviews, and recommendations with their followers. Premium features such as ad-free viewing, early access to new releases, and discounts on subscriptions or rentals from movie providers are also available.</p>
            </div>
          </div>
        </div>
      </div>
      <div>sadsadasd</div>
    </div>
  )
}
