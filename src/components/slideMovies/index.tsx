'use client'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from "next/link"

import { MovieProps } from '../interfaces'
import { API_KEY, BASE_URL } from '@/api'


export function SlideMovies() {
    const [movies, setMovies] = useState<MovieProps[]>([])

    useEffect(() => {
        const getMovies = async () => {

            await fetch(`${BASE_URL}/discover/movie?${API_KEY}`)
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
            <Swiper  slidesPerView={5} spaceBetween={16}>
                {movies.map((item) => (
                    <SwiperSlide>
                        <Link href={`/details/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt={item.title} />
                        </Link>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>





    )
}