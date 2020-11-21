<template>
    <div class="home">
        <carousel-section></carousel-section>
        <card-section></card-section>
        <benefit-section></benefit-section>
        <products-section></products-section>
        <cost-section></cost-section>
        <order-section></order-section>
        <services-section></services-section>
        <about-section></about-section>
        <contact-section></contact-section>
        <address-section></address-section>
    </div>
</template>

<script>
    export default {
        components: {
            CarouselSection: () => ({
                component: import('@/components/carousel/index')
            }),
            CardSection: () => ({
                component: import('@/components/sections/card')
            }),
            BenefitSection: () => ({
                component: import('@/components/sections/benefit')
            }),
            ProductsSection: () => ({
                component: import('@/components/sections/products')
            }),
            CostSection: () => ({
                component: import('@/components/sections/cost')
            }),
            OrderSection: () => ({
                component: import('@/components/sections/order')
            }),
            ServicesSection: () => ({
                component: import('@/components/sections/services')
            }),
            AboutSection: () => ({
                component: import('@/components/sections/about')
            }),
            ContactSection: () => ({
                component: import('@/components/sections/contact')
            }),
            AddressSection: () => ({
                component: import('@/components/sections/address')
            }),
        },
    }
</script>

<style lang="scss" scoped>

</style>