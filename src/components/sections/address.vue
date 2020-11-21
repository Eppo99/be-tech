<template>
    <section class="address">
        <div class="cover">
            <div class="container">
                <div class="address__block">
                    <h3>Contact</h3>
                    <address>abiLine Polska sp. z o.o. sp. k.</address>
                    <address>Company register address:</address>
                    <address>ul. Grunwaldzka 519a/2, 62-064 Plewiska</address>
                    <address>
                        <strong>Office location:</strong><br>
                        ul. Kożuchowska 20C, 65-364 Zielona Gór
                    </address>
                    <h3 class="address-block__phone">
                        <p><a href="tel:+77782251400">+7 (778) 225-1400</a></p>
                        <p><a class="mail" href="mailto:erbloatamet@gmail.com">erbloatamet@gmail.com</a></p>
                    </h3>
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
    .address {
        height: 550px;
        background: url('/map.png') no-repeat;
        background-size: cover;
        position: relative;
    }
    .cover {
        background: rgba(69, 174, 214, 0.3);
        width: 100%;
        height: 100%;
    }
    .address__block {
        position: absolute;
        padding: 20px;
        background: rgba(255, 255, 255, 0.8);
        top: 40px;
        left: 60%;
    }
    h3.address-block__phone a {
        font-size: 24px;
    }
    h3.address-block__phone a.mail {
        color: #45aed6;
        padding-top: 10px;
    }
</style>