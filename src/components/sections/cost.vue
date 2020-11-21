<template>
    <div :style="{backgroundImage: `url(${require('@/assets/images/cta2-bg.jpg')})`}" class="cost">
        <div class="container">
            <h2>Hotel locks at a cost of only a few euros per month!</h2>
            <p>Do you want to get tens or hundreds of locks and you do not want to pay the whole amount at once? We found the solution! You can make use of the funding so that you can have our locks at just a few cents per day!</p>
            <p>Are you interested? Contact us!</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .cost {
        padding: 70px 0 40px;
        background-size: cover;
        background-position: center center;
        text-align: center;
    }
    h2 {
        font-size: 44px;
        margin-bottom: 0;
        color: #004e9e;
    }
</style>