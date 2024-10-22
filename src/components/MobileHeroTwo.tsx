import { Button } from './ui/button'

export default function MobileHeroTwo() {
  return (
    <>
    <div className="relative md:hidden flex-col items-center justify-between h-[40vh]">
       <img src="/assets/bg-app.png" alt="ourclientsbackground" className="absolute top-0 left-0 h-full object-cover z-0" 
      />
      <div className="relative flex flex-col items-center justify-start py-20 h-full gap-8 z-10">  
        <p className='text-[16px] leading-[22px] text-center px-20 font-light'>Tenha a ajuda que <strong className='font-bold'>você precisa</strong> para <strong className='font-bold'>criar</strong> o seu processo de <strong className='font-bold'>vendas</strong> através da internet e alcance o sucesso com uma assessoria especializada.</p>
        <Button
          className='min-w-[280px] min-h-[46px] my-10 rounded-[5px] p-5 bg-gradient-to-r to-[#FF003C] from-[#FF7E00] md:hidden flex items-center ml-5 gap-2'
        >
          <p className='text-black text-[16px]'>Quero um time de marketing</p>
          <img src="/assets/seta.svg" alt="seta" className='filter invert' />
          </Button>
      </div>
    </div>
    <div className="relative md:hidden flex-col items-center justify-between h-[35vh]">
       <img src="/assets/bg-app.png" alt="ourclientsbackground" className="absolute top-0 left-0 h-full object-cover z-0" 
      />
      <div className="relative flex flex-col items-center justify-center py-20 h-full gap-8 z-10">  
        <img src="/assets/clientes.svg" alt="" />
      </div>
    </div>
    </>
  )
}
