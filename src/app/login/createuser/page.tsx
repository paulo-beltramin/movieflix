import Link from "next/link";

export default function createUser() {
    return (
        <>
            <form className=" max-w-7xl w-full mx-auto flex justify-center mt-52  ">

                <section className="flex flex-col w-full">
                <h1 className="text-2xl mb-8 text-center font-black">Crie sua conta</h1>
                   
                        <input type="email" placeholder="Digite seu email"  className="w-11/12 px-2 rounded mb-2 mx-auto border border-gray-400" />
                        <input type="password" placeholder="Digite sua senha" className="w-11/12 px-2 rounded mb-2 mx-auto border border-gray-400" />
                    <button className="w-11/12 mx-auto rounded cursor-pointer bg-green-500 text-white font-bold">
                        Cadastrar
                    </button>
                    
                <footer className="mt-8 text-center">
                    <p>
                        Ja possue conta ?
                        <Link href={'/login'} className="text-blue-500 pl-2 hover:text-red-600 font-bold">
                            Faça login
                        </Link>
                    </p>
                </footer>
                </section>

            </form>
        </>
    )
}