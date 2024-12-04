import LogoImage from '@/assets/logo.svg'
import XSocial from '@/assets/social-x.svg'
import InstagramSocial from '@/assets/social-instagram.svg'
import YoutubeSocial from '@/assets/social-youtube.svg'


export const Footer = () => {
  return <footer className=' py-5 border-t border-white/15'>
  
    <div className=" container">
      <div className='flex flex-col gap-8 lg:flex-row lg:justify-between '>

     
<div className=' flex gap-2  items-center '>
<LogoImage  className="size-6"/>
<div className=' font-medium'>AI Stratup Landing Page</div>
</div>


<nav className=' flex flex-col gap-5 lg:flex-row lg:gap-7'>
  <a href='#' className=' text-sm text-white/70 hover:text-white transition'>ggggggg</a>
  <a href='#' className=' text-sm text-white/70 hover:text-white transition'>2kjjhjn</a>
  <a href='#' className=' text-sm text-white/70 hover:text-white transition'>3nknk</a>
  <a href='#' className=' text-sm text-white/70 hover:text-white transition'>4lkmlm</a>
</nav>


<div className=' flex gap-5  '>
<XSocial className= " text-white/70 hover:text-white transition "/>
<InstagramSocial className= " text-white/70 hover:text-white transition "/>
<YoutubeSocial className= " text-white/70 hover:text-white transition "/>
</div> </div>
    </div>
  </footer>;
};
