import { Playball } from '@next/font/google'
const playball = Playball({ 
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
})
function Logo({color="white",size='4xl'}) {
  return (
    <a className="flex items-center cursor-pointer">
      <h3 className={`text-${color} font-bold text-${size} logo-underline ${playball.className}`}>ReelQueue</h3>
    </a>
  )
}

export default Logo