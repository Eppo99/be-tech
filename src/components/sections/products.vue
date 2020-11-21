<template>
    <section class="products">
        <div class="container">
            <div class="section__header">
                <h2 v-scroll class="section-title">ONE KEY SYSTEM ELEMENTS</h2>
                <p>One-key system uses MiFare cards, wristbands, key fobs and stickers.<br>The system includes the following products:</p>
            </div>
            <div class="product__block">
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/zamek_elegant.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>MiFare card electronic lock</h4>
                        <p>There are four available models</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/cyber-ii-rfid-1.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>Locker lock</h4>
                        <p>The locks are designed for lockers at work, in swimming pool, SPA, etc.</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/mjm_2700.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>Access controller</h4>
                        <p>If there is no possibility of using electronic locks, we recommend MiFare readers. There are outside, inside, and lift readers on our offer.</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/Harmony_bigimg_4.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>Safe</h4>
                        <p>Our elegant hotel safes match even the most stylish interior styles.</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/czarny-wlącznik-na-kartę-SaveKey.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>MiFare card energy saver</h4>
                        <p>Energy saving switches significantly lower electrical energy costs.</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
                <div>
                    <div class="product__image">
                        <img src="@/assets/images/oprogramowanie.jpg" alt="">
                    </div>
                    <div class="product__text">                        
                        <h4>BIS HOTEL software</h4>
                        <p>Be-Tech system is operated with intuitive software which is available in several language versions.</p>
                        <button v-scroll class="main-btn">LEARN MORE >></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .products {
        padding-bottom: 25px;
    }
    .section__header {
        text-align: center;
    }
    .product__block {
        /* --auto-grid-min-size: 250px; */
        display: grid;
        /* grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr)); */
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px 20px;
    }
    .product__block > div {
        display: flex;
    }
    .product__image {
        margin-right: 20px;
    }
    .product__text h4 {
        font-size: 18px;
        margin: 0;
    }
    .product__text p {
        margin-top: 5px;
    }
    .main-btn.before-enter {
        transform: translateY(30px);
        opacity: 0;
        transition: all .3s ease-in-out;
    }
    .main-btn.enter {
        transform: translateY(0);
        opacity: 1;
    }
</style>