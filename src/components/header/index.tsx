"use client"
import Link from 'next/link'
import logoHeader from '@/assets/capa-netflix.jpg'
import { signIn, signOut, useSession } from 'next-auth/react'


export default function Header() {

  const { data: session } = useSession()


  const handleLogin = () => {
    return signIn()
  }

  const handleLogOut = () => {
    return signOut()
  }

  return (
    <>

      <section className='bg-black'>
        <img src={logoHeader.src} alt="logo do header" className='opacity-30 relative w-full' />
      </section>

      <section className='absolute text-white top-0  lg:flex flex-col justify-center items-center h-screen w-full hidden '>
        <h1 className='text-6xl font-black mb-2 w-6/12 text-center leading-20 '>
          Filmes, séries e muito mais, sem limites
        </h1>

        <p className='font-bold mb-8 text-lg '>
          A partir de R$ 20,90. Cancele quando quiser.
        </p>
        <p >
          Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.
        </p>
      </section>

      <header className="bg-transparent   ">
        <section className="flex flex-col justify-center lg:flex-row lg:justify-between items-center w-11/12 
       absolute top-6  sm:top-6 sm:left-12">
          <Link href={'/'} className="text-4xl sm:text-6xl mb-10  font-black text-red-600">MovieFlix</Link>

          <div className="flex gap-4 ">
            <select className="bg-trasparent text-white font-bold py-2 w-32 sm:w-48 lg:text-2xl text-center outline-none border border-gray-400
            rounded-lg">
              <option className="text-black font-bold">Português</option>
              <option className="text-black font-bold">English</option>
            </select>

            <div >
              {!session?.user ? (
                <button className="bg-red-600 text-white font-bold cursor-pointer
              rounded-lg  w-24 lg:w-48 py-4 lg:text-2xl" onClick={handleLogin}>
                  Entrar
                </button>
              ) : (
                <button className="bg-red-600 text-white font-bold cursor-pointer
              rounded-lg  w-24 lg:w-48 py-4 lg:text-2xl" onClick={handleLogOut}>
                  Sair
                </button>
              )}
            </div>
          </div>
        </section>
      </header>

    </>
  )
}

