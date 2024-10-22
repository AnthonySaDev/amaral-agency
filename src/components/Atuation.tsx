
export default function Atuation() {
  return (
    <div className="relative flex items-center justify-between h-screen bg-[#F6F6F6]">
      <div className='h-full w-1/2 p-32'>
        <h1 className="font-sora font-light text-[18px] text-[#836E6E] tracking-[10px]">ATUAÇÃO NACIONAL</h1>
        <h2 className='font-sora text-[45px] max-w-[400px]'>Expandimos o seu <strong>Negócio do Brasil para o Mundo!</strong></h2>
        <p className='font-light text-[18px] mt-10'>Nossa equipe de especialistas são capacitados para atender as mais variadas demandas do marketing. Buscamos o melhor resultado para os nossos clientes em vendas e performance.</p>
        <div className='gap-10 mt-10 w-full flex'>
          <div>
            <h1 className='font-sora text-[40px] font-bold'>06</h1>
            <p className='font-sora text-[16px]'>Anos de mercado</p>
          </div>
          <img src="/assets/line.svg" alt="" />
          <div>
            <h1 className='font-sora text-[40px] font-bold'>+6</h1>
            <p className='font-sora text-[16px]'>Milhões em Tráfego</p>
          </div>
          <img src="/assets/line.svg" alt="" />
          <div>
            <h1 className='font-sora text-[40px] font-bold'>+200</h1>
            <p className='font-sora text-[16px]'>Cliente atendidos</p>
          </div>
        </div>
      </div>
      <div className='h-full w-1/2 p-32'>
        <img src="/assets/brasil.svg" alt="" className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}
