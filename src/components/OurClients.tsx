export default function OurClients() {
  return (
    <div className="relative flex-col items-center justify-between h-[90vh] lg:h-screen">
      <img src="/assets/juntese.png" alt="ourclientsbackground" className="absolute top-0 left-0 h-full object-cover z-0" 
      />
          <div className="relative flex flex-col items-center justify-center h-full gap-8 z-10 text-center">
            <h1 className="font-sora font-light text-[18px] text-[#836E6E] tracking-[10px]">NOSSOS CLIENTES</h1>
            <h1 className="bg-gradient-to-r to-[#FF9300] from-[#FF185C] inline-block text-transparent bg-clip-text text-[40px] font-[800] leading-[53px] mb-4 font-sora">
            Junte-se a nós e faça a <br/> diferença na sua empresa!
            </h1>
            <img src="/assets/clientes.png" alt="" className="my-20 px-10"/>
          </div>
    </div>
  )
}
