<template>
    <section class="carousel">
        <swiper @slideChangeTransitionStart="started" @autoplayStart="started" class="swiper" :options="swiperOption">
            <swiper-slide>
                <img src="@/assets/images/bg3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/bg3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/bg3.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/images/bg3.jpg" alt="">
            </swiper-slide>
            <div class="swiper-scrollbar"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        <div :style="{width: (timer/30)+'%'}" class="carousel__slide"></div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    loop: true,
                    autoplay: {
                        delay: 4000,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                        draggable: true,
                    },
                },
                timer: 0
            }
        },
        methods: {
            started() {
                this.timer = 0
            },
            lineWidth() {
                this.timer += 10
            }
        },
        mounted () {
            this.lineWidth()
            setInterval(this.lineWidth.bind(this) , 10)
        },
    }
</script>

<style scoped>
    section.carousel {
        height: 558px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    .swiper-slide {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    img {
        min-height: 100%;
        min-width: 100%;
    }
    .swiper-container {
        height: 100%;
    }
    .carousel__slide {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 3;
        height: 4px;
        background: #004e9e;
    }
    .swiper-button-prev, .swiper-button-next {
        background-color: rgba(0, 0, 0, 0.2);
        color: #fff;
        height: 70px;
        width: 70px;
        line-height: 70px;
        border-radius: 50% 50%;
        transition: background .3s ease-in-out;
    }
    .swiper-button-prev:hover, .swiper-button-next:hover {
        background-color: #45aed6;
    }
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
        left: -35px;
        text-align: right;
    }
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
        right: -35px;
    }
    .swiper-button-prev:after {
        margin-left: 25px;
    }
    .swiper-button-next:after {
        margin-right: 25px;
    }
    .swiper-button-prev:after, .swiper-button-next:after {
        font-size: 20px;
        font-weight: bold;
    }
</style>