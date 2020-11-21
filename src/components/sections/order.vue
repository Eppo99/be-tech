<template>
    <div :style="{backgroundImage: `url(${require('@/assets/images/bg.jpg')})`}" class="order">
        <div class="container">            
            <div class="section__header">
                <h2 v-scroll class="section-title">ORDER PROCESSING</h2>
                <p>We do realize that the investment in a new system can be very stressful and you need to learn about various solutions. We are convinced that meeting with our representative will satisfy your concerns and help you make a good decision. Therefore, we strongly recommend a direct meeting with our representative no matter where your object is located. When we make a quotation it is important to know if you replace the doors or keep the existing ones. In the second case, we kindly ask for sending photos of the doors in your object so that our technicians can choose the best assembly technology.</p>
            </div>
            <div class="order__processing">
                <div>
                    <h5>QUOTATION</h5>
                </div>
                <div>
                    <h5></h5>
                </div>
                <div>
                    <h5></h5>
                </div>
                <div>
                    <h5></h5>
                </div>
                <div>
                    <h5></h5>
                </div>
                <div>
                    <h5></h5>
                </div>
            </div>
            <p>We focus on direct relations in our company policy and we can say proudly that it results in many after-sales contacts.</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .order {
        padding: 100px 0 50px;
        color: #FFF;
    }
    .section__header {
        text-align: center;
    }
    h2.section-title {
        color: #FFF;
    }
</style>