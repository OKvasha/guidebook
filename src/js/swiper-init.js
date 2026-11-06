import Swiper from 'swiper'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
    const aboutSlider = new Swiper('.about__slider', {
        modules: [Navigation, Pagination, Autoplay],
        effect: 'fade',
        loop: true,
        //autoplay: {
        //   delay: 5000,
        //    disableOnInteraction: false,
        //},
        pagination: {
            el: '.about__slider .swiper-pagination',
            clickable: true,
        },
        navigation: {
            prevEl: '.about__slider .swiper-button-prev',
            nextEl: '.about__slider .swiper-button-next',
        },
    })
})
