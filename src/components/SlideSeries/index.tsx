'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from "next/link"

import { api } from '@/axios'

import 'swiper/css'
import { SeriesProps } from '../interfaces'

export function SlideSeries() {
    const [movies, setMovies] = useState<SeriesProps[]>([])

    useEffect(() => {
        const getMovies = async () => {

            await api.get(`/discover/tv`)
                .then((res) => {
                    return setMovies(res.data.results)
                })


        }
        getMovies()
    }, [])

    return (
        <>
            <Swiper slidesPerView={4} spaceBetween={16}>
                {movies.map((item) => (
                    <SwiperSlide>
                        <Link href={`/Dseries/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name} />
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>





    )
}