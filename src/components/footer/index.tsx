import Link from "next/link";



export default function Footer() {
    return (
        <>
            <footer className="flex text-white w-10/12 mx-auto my-24 text-2xl flex-col gap-10 sm:justify-between sm:flex-row items-center">
                <section className="leading-12 font-bold">
                    <p>
                        Perguntas frequentes
                    </p>

                    <p>
                        Media center
                    </p>

                    <p>
                        Resgatar cartão pré-pago
                    </p>

                    <p>
                        Termos de uso
                    </p>
                </section>

                <section className="leading-12 font-bold">
                    <p>

                        Central de Ajuda
                    </p>

                    <p>

                        Relações com investidores
                    </p>

                    <p>

                        Comprar cartão pré-pago
                    </p>

                    <p>

                        Privacidade
                    </p>
                </section>

                <section className="leading-12 font-bold">
                    <p>

                        Conta
                    </p>

                    <p>

                        Carreiras
                    </p>

                    <p>

                        Carreiras
                    </p>

                    <p>

                        Preferências de cookies
                    </p>
                </section>

            </footer>
                <section className="text-white w-11/12 mx-auto">
                    <p className="text-2xl font-bold mb-10">
                        MovieFlix Brasil
                    </p>
                    <p className="text-lg mb-20 sm:text-2xl ">
                        Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <Link target="_blank" href={'https://policies.google.com/privacy'}
                         className="text-blue-700 underline pl-2">
                         Saiba mais
                        </Link>.
                    </p>
                </section>
        </>
    )
}