import { Button } from './ui/button'

export default function Header() {
  return (
<div className="relative h-[92px] flex items-center justify-between">

        <img src="/assets/bala.svg" alt="" className='absolute top-6 hidden lg:flex left-0'/>
        <div className='relative w-full h-[92px] flex items-center xl:justify-around justify-center text-center z-10'>
          <img src="/assets/logo.svg" alt="Logo" className="xl:h-12 lg:h-10 md:h-9 h-8 object-cover"  />
          <Button 
            variant="outline" 
            className="hidden xl:flex items-center gap-2 bg-gradient-to-r to-[#FF9300] from-[#FF185C] rounded-[8px] p-5 w-[250px] min-h-[40px]"
          >
            <p className="text-white text-[14px] leading-[14px]">Entre em contato</p>
            <img src="/assets/seta.svg" alt="seta" />
          </Button>
        </div>
     
      </div>
  )
}
