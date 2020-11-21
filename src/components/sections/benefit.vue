<template>
    <section class="benefit">
        <div class="container">
            <h2 v-scroll class="section-title">ONE KEY SYSTEM BENEFITS</h2>
            <div class="benefit__block flex">
                <div v-scroll class="benefit__image">
                    <img src="@/assets/images/main-feature.png" alt="main-feature">
                </div>
                <div class="benefit__info">
                    <div v-scroll class="media">
                        <div class="media__image">
                            <shield-icon></shield-icon>
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Better security</h4>
                            <p>Hotel locks and access control units prevent the access by unauthorized people.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <home-icon></home-icon>
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Better control</h4>
                            <p>MiFare card programmed as Master allows you to move freely in the building. The lost cards can be easily deleted in the system.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <books-icon></books-icon>
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Access to entry records</h4>
                            <p>The cards are personal and are issued for a certain period of time. Therefore, it could be quickly verified who and when entered a given room.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <login-icon></login-icon>
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Access zones</h4>
                            <p>The guests are authorized to enter the zones according to the services they paid for.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">No wiring</h4>
                            <p>No additional installation is required for the assembly of locks.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">No need for replacing the doors</h4>
                            <p>We have a special lock model which does not require any hole drilling during the assembly. Such locks perfectly replace traditional key ones.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Payments by hotel cards</h4>
                            <p>MiFare cards could be programmed in such a way that all the services used by a guest can be read.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Interface working with most of PMS programmes</h4>
                            <p>We have CHART, SOHO, KW Hotel, GiP,SOHIS FIDELIO, KURACJUSZ, LSI, PLAZA, BRILLIANT interfaces among others.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Personal access cards</h4>
                            <p>Each staff member has a personal card with limited access.</p>
                        </div>
                    </div>
                    <div v-scroll class="media">
                        <div class="media__image">
                            <img src="@/assets/images/shield-checkered-in-four-areas.svg" alt="">
                        </div>
                        <div class="media__body">
                            <h4 class="media__heading">Mechanical key override</h4>
                            <p>You can open the door with a traditional key in emergency. Optionally, you can order a universal key which opens all doors.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ShieldIcon from '@/assets/images/shield-checkered-in-four-areas.svg?inline'
    import HomeIcon from '@/assets/images/home-page.svg?inline'
    import BooksIcon from '@/assets/images/books-stack-of-three.svg?inline'
    import LoginIcon from '@/assets/images/log-in.svg?inline'
    export default {
        components: {
            ShieldIcon,
            HomeIcon,
            BooksIcon,
            LoginIcon
        },
    }
</script>

<style scoped>
    section.benefit {
        padding: 100px 0;
    }
    .benefit__info {
        width: 50%;
    }
    .media {
        margin-bottom: 25px;
    }
    h4.media__heading {
        font-size: 18px;
        margin: 0 0 5px;
    }
    .media__body p {
        margin: 0;
        color: #64686d;
    }
    .media.before-enter {
        transform: translateX(50px);
        opacity: 0;
        transition: all .3s ease-in-out;
    }
    .benefit__image.before-enter {
        transform: translateX(-50px);
        opacity: 0;
        transition: all .3s ease-in-out;
    }
    .media.enter, .benefit__image.enter {
        transform: translateX(0);
        opacity: 1;
    }
    .media__image svg {
        fill: #45aed6;
    }
</style>