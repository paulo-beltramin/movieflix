import { FaRegStar } from "react-icons/fa";
import { API_KEY, BASE_URL } from "@/api";
import Container from "@/components/container";
import {  DetailSeries} from "@/components/interfaces";



async function DetailsSeries(id: number) {
    try {

        const response = await fetch(`${BASE_URL}/tv/${id}?${API_KEY}`)
        return response.json()

    } catch (error) {
        throw new Error('failed to request')
    }
}



export default async function Dseries({ params }: { params: Promise<{ id: number }> }) {
  
    const {id} = await params
    const data: DetailSeries = await DetailsSeries(id)

    return (
        <>
            <Container>
                <section className="mt-10 ">
                    <div className="bg-black">
                        <img className="w-full opacity-40 rounded-lg h-56 object-cover" src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt={''} />
                            <p className="text-yellow-400 mt-2 flex items-center gap-2">
                          <FaRegStar size={28} />
                         <p className="text-white mt-2 text-lg">
                              {data.vote_average.toFixed(1)} 
                         </p>

                    </p>
                    </div>
                    <p className="text-3xl font-bold underline lg:text-4xl  text-white mt-10 text-center">
                        {data.name}

                    </p>

                    <p className="text-white text-2xl mt-4 tracking-wide">
                        {data.overview}
                    </p>

                
                    <button className=" mt-8 bg-red-600 font-bold w-full
                    text-white py-2  mb-20 cursor-pointer">Assistir</button>
                </section>
            </Container>
        </>
    )
}

