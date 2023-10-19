import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade , Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import styles from './HeroSlider.module.scss';
import Button from '../UI/Button/Button';

export default function HeroSlider({data}) {
   
    return (
        <div className={styles.heroSlider}>
            <Swiper
                className={styles.Slider}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    loop: true
                }}
                effect= {"fade"}
                speed={1500}
                modules={[Autoplay, EffectFade ]}
            >
                {data.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className={styles.slideContent}>
                            <img className={styles.slidePoster} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} />
                            <div className={styles.movieInfo}>
                                <p className={styles.movieTitle}>{movie.title}</p>
                                <span className={styles.movieRate}>Рейтинг IMDB: {movie.vote_average}</span>
                                <div className={styles.buttonsWrapper}>
                                    <Button contentType='text' data='Переглянути' bgColor='#D81F26'/>
                                    <Button contentType='icon' data='fa-solid fa-plus' bgColor='rgba(80, 80, 80, .8)'/>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
