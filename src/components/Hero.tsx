import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Header from './Header';

export default function Hero() {
  return (
    <div className="relative flex-col items-center justify-between lg:min-h-[90vh]">
      <img 
        src="/assets/bg-hero.png" 
        alt="Hero Background" 
        className="absolute lg:flex top-0 left-0 w-full h-full object-cover object-[86%] z-0 hidden" 
      />
      <img 
        src="/assets/bg-hero.png" 
        alt="Hero Background" 
        className="absolute flex top-0 left-0 w-full h-full object-cover object-[86%] z-0 lg:hidden" 
      />

      <Header />
      <main>
        <div className="relative flex items-center gap-8 z-10">
          <img 
            src="/assets/japan.svg" 
            alt="Japan" 
            className='mt-56 absolute lg:relative'
          />
          <div className="text-white text-left max-w-md mt-10">
            <h1 className="bg-gradient-to-r to-[#FF9300] from-[#FF185C] inline-block text-transparent bg-clip-text text-[20px] md:text-[40px] font-[800] md:leading-[53px] mb-4 font-sora pl-5 md:pl-0">
              Nosso Marketing <br/> é o seu Sucesso!
            </h1>
            <p className="hidden md:flex text-[20px] leading-[29px] font-light text-black">
              Tenha a ajuda que você precisa para criar o seu processo de vendas através da internet e alcance
              o sucesso com uma assessoria especializada.
            </p>
            <p className="flex md:hidden text-[11px] font-light leading-[22px] text-black max-w-[170px] pl-5">
              Transforme suas vendas com assessoria especializada e resultados reais!
            </p>
            <Button
              className='w-[331px] min-h-[46px] hidden my-10 rounded-[5px] py-5 bg-gradient-to-r to-[#FA0B05] from-[#ED068D] md:flex items-center gap-2'
            >
              <p className='text-white'>Quero um time de marketing</p>
              <img src="/assets/seta.svg" alt="seta" />
            </Button>
            <Button
              className='w-[131px] min-h-[36px] my-10 rounded-[5px] py-5 bg-gradient-to-r to-[#FF003C] from-[#FF7E00] md:hidden flex items-center ml-5 z-50'
            >
              <p className='text-black text-[10px]'>Levante de Vendas</p>
              <img src="/assets/seta.svg" alt="seta" className='filter invert' />
            </Button>
            <img src="/assets/clientes.svg" alt="" className='hidden lg:flex'/>
          </div>
          <div className='relative h-full w-1/4 -ml-24 mx-auto flex items-center justify-center z-10'>
            <div className='w-full relative md:hidden'>
              <motion.img 
                src="/assets/x2.svg" 
                alt="" 
                className='absolute -top-36 right-28 size-16 '
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              />
              <motion.img 
                src="/assets/insta2.svg" 
                alt="" 
                className='absolute -top-28 left-20 size-12'
                animate={{ x: [-5, 5, -5], y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
              <motion.img 
                src="/assets/facebook2.svg" 
                alt="" 
                className='size-12 ml-10'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.img 
                src="/assets/xadrez2.svg" 
                alt="" 
                className='absolute right-4 size-24'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
              />
            </div>
            <div className='w-full relative hidden xl:block ml-16'>
              <motion.img 
                src="/assets/x2.svg" 
                alt="" 
                className='absolute -top-72 left-14'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
              />
              <motion.img 
                src="/assets/xadrez2.svg" 
                alt="" 
                className='absolute -top-28 left-14'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
              <motion.img 
                src="/assets/insta2.svg" 
                alt="" 
                className='absolute -top-32 left-72'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
              />
              <motion.img 
                src="/assets/facebook2.svg" 
                alt="" 
                className='absolute top-32 left-10'
                animate={{ x: [-5, 5, -5], y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
