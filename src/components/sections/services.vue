<template>
    <section :style="{backgroundImage: `url(${require('@/assets/images/cta2-bg3.jpg')})`}" class="services">
        <div class="container">
            <h2>Services connected with the implementation of Be-Tech hotel lock system</h2>
            <div class="services__box">
                <div class="services-box__block">
                    <h4>Assembly</h4>
                    <p>Our company can install locks. In order to get a full quotation you are asked to send the information about doors in which locks are to be mounted.</p>
                </div>
                <div class="services-box__block">
                    <h4>Programming</h4>
                    <p>We will configure and program the whole system. We will add your locks and zones according to your requirements.</p>
                </div>
                <div class="services-box__block">
                    <h4>Trainings</h4>
                    <p>We will train you and your staff and you will see how simple our system is!</p>
                </div>
                <div class="services-box__block">
                    <h4>Service</h4>
                    <p>We take care of service and maintenance.</p>
                    <p>As we have many distributors in all parts of Poland our representative will come to you in case of any problems. You can be sure that the problem will be solved as soon as possible.</p>
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
    .services {
        padding: 70px 0 20px;
        background-size: cover;
        background-position: center center;
    }
    .services h2 {
        color: #004e9e;
        font-size: 44px;
        text-align: center;
    }
    .services-box__block {
        margin: 25px 0;
    }
    .services-box__block h4 {
        font-size: 18px;
        margin-bottom: 0;
    }
</style>