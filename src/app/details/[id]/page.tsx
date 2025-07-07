import { api, } from "@/axios";
import Container from "@/components/container";
import Link from "next/link";
import { FaRegStar } from "react-icons/fa";




export default async function Details({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params


    const resposta = await api.get(`/movie/${id}`)
        .then((res) => {
            return res.data
        })


    return (
        <>
            <Container>
                <section className="mt-10 ">
                    <div className="bg-black">
                        <img className="w-full opacity-40 rounded-lg h-56 object-cover" src={`https://image.tmdb.org/t/p/original${resposta.backdrop_path}`} alt={resposta.title} />
                        <p className="text-yellow-400 mt-2 flex items-center gap-2">
                            <FaRegStar size={28} />
                            <p className="text-white mt-2 text-lg">
                                {resposta.vote_average.toFixed(1)}
                            </p>

                        </p>
                    </div>
                    <p className="text-3xl font-bold underline lg:text-4xl  text-white mt-10 text-center">
                        {resposta.title}

                    </p>

                    <p className="text-white text-2xl mt-4 tracking-wide">
                        {resposta.overview}
                    </p>

                    <p className="text-white font-bold my-8">
                        Lançamento: <span className="font-normal text-lg pl-2">
                            {resposta.release_date}
                        </span>
                    </p>



                    <Link href={'https://www.themoviedb.org/'} target="_blank" className="bg-red-600 font-bold
                    text-white py-2 ">
                        <button className="w-full cursor-pointer mb-20">
                            Assistir
                        </button>
                    </Link>
                </section>
            </Container>
        </>
    )
}

