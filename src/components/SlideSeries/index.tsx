'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from "next/link"

import { SeriesProps } from '../interfaces'
import { API_KEY, BASE_URL } from '@/api'

import 'swiper/css'

export function SlideSeries() {
    const [movies, setMovies] = useState<SeriesProps[]>([])

    useEffect(() => {
        const getMovies = async () => {

            await fetch(`${BASE_URL}/discover/tv?${API_KEY}`)
                .then((res) => {
                    return res.json()
                })

                .then((data) => {

                    return setMovies(data.results)
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
                            <img  src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.name} />
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>





    )
}