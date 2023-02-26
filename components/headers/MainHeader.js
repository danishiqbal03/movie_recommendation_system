import Logo from '@/public/logo/Logo'
import { Playball } from '@next/font/google'
const playball = Playball({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})
export default function MainHeader() {
  return (
    <div className='w-full bg-black flex'>

      <div className="w-full max-w-7xl m-auto flex justify-between pt-5 pb-20">
      <a className="flex items-center cursor-pointer">
        <h3 className={`text-white font-bold text-4xl logo-underline ${playball.className}`}>ReelQueue</h3>
      </a>
      {/* <Logo/> */}
        <div className="flex items-center">
          <button className='text-base btn mr-5'>Login</button>
          <button className='text-base btn'>Sign Up</button>
        </div>
      </div>
    </div>
  )
}