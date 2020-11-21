<template>
    <section class="card">
        <div v-scroll class="container flex">
            <div class="card__text">
                <h2>Be-Tech one key system- get access with only one card!</h2>
                <p>In one key system a programmed card enables you to access the selected areas and it will protect the object from uninvited guests. <strong>You will forget about the problems with losing keys</strong> and <strong>you can always check who and when used the card</strong>. Thanks to our products you will observe how <strong>your electricity bills are lowered.</strong></p>
                <button class="main-btn">
                    LEARN MORE >>
                </button>
            </div>
            <div class="card__image">
                <img src="@/assets/images/karta.jpg" alt="">
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    section.card {
        padding: 50px 0;
        background-color: #eeeeee;
    }
    .container.flex {
        /* align-items: center; */
    }
    h2 {
        margin-top: 0;
        font-size: 30px;
    }
    p {
        color: #64686d;
    }
    button {
        margin-top: 40px;
    }
    .container.before-enter {
        opacity: 0;
        transition: opacity .5s;
    }
    .container.before-enter.enter {
        opacity: 1;
    }
</style>