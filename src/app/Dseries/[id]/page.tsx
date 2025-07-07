import { FaRegStar } from "react-icons/fa";
import { api} from "@/axios";
import Container from "@/components/container";
import Link from "next/link";



export default async function Dseries({ params }: { params: Promise<{ id: number }> }) {

    const { id } = await params

    const res = await api.get(`/tv/${id}`)
        .then((response) => {
            return response.data
        })

    return (
        <>
            <Container>
                <section className="mt-10 ">
                    <div className="bg-black">
                        <img className="w-full opacity-40 rounded-lg h-56 object-cover" src={`https://image.tmdb.org/t/p/original${res.backdrop_path}`} alt={'res.title'} />
                        <p className="text-yellow-400 mt-2 flex items-center gap-2">
                            <FaRegStar size={28} />
                            <p className="text-white mt-2 text-lg">
                                {res.vote_average.toFixed(1)}
                            </p>

                        </p>
                    </div>
                    <p className="text-3xl font-bold underline lg:text-4xl  text-white mt-10 text-center">
                        {res.name}

                    </p>

                    <p className="text-white text-2xl mt-4 tracking-wide">
                        {res.overview}
                    </p>


                    <Link href={'https://www.themoviedb.org/'} target="_blank" className="bg-red-600 font-bold
                    text-white py-2 ">
                        <button className="w-full cursor-pointer my-20">
                            Assistir
                        </button>
                    </Link>
                </section>
            </Container>
        </>
    )
}

