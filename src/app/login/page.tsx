"use client"

import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { FormEvent, useState  } from "react";
import toast from "react-hot-toast";

import { auth } from "@/services/db";
import { redirect } from "next/navigation";



export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

         

    function Login(e: FormEvent) {
        e.preventDefault()

        if (email === '' || password === '') {
            toast.error('Existem campos obrigatórios...')
        }

        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
        toast.success('Logado com sucesso', {
          style: {
            backgroundColor: 'green',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '8px 12px'
          }
        })

        redirect('/movies')

           }).catch(() => {
        toast.error('Erro: Verifique os dados digitados', {
          style: {
            backgroundColor: 'red',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '18px',
            padding: '8px 12px'
          }
        })

    })
}


    return (
        <>
            <form onSubmit={Login} className=" max-w-7xl w-full mx-auto flex justify-center mt-52  ">

                <section className="flex flex-col w-full">
                    <h1 className="text-2xl mb-8 text-center font-black">Faça login</h1>

                    <input type="email" placeholder="Digite o email cadastrado" className="w-11/12 px-2 rounded mb-2 mx-auto border border-gray-400"
                        value={email} onChange={e => setEmail(e.target.value)} />

                    <input type="password" placeholder="Digite sua senha" className="w-11/12 px-2 rounded mb-2 mx-auto border border-gray-400"
                        value={password} onChange={e => setPassword(e.target.value)} />

                    <button className="w-11/12 mx-auto rounded cursor-pointer bg-green-500 text-white font-bold">
                        Acessar
                    </button>

                    <footer className="mt-8 text-center">
                        <p>
                            Não possue conta ?
                            <Link href={'/login/createuser'} className="text-blue-500 pl-2 hover:text-red-600 font-bold">
                                Cadastre-se
                            </Link>
                        </p>
                    </footer>
                </section>

            </form>
        </>
    )
}