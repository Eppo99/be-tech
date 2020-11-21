<template>
    <header>
        <div class="container flex">
            <div>
                <router-link class="flex header__logo" to="/">
                    <img src="@/assets/images/logo.png" alt="logo">
                    <div class="logo_text">
                        <span>abiLine<br>direct, authorized<br>Be-Tech importer in Europe</span>
                    </div>
                </router-link>
            </div>
            <nav>
                <ul class="flex">
                    <li><a class="active">About system</a></li>
                    <li><a>Elements of the system</a></li>
                    <li><a>Features</a></li>
                    <li><a>About us</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </nav>

        </div>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    header {
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 4;
        color: #777777;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.1);
        background: rgba(255, 255, 255, 0.9);
    }
    .container.flex {
        align-items: center;
    }
    .header__logo {
        font-size: 11px;
        align-items: center;
    }
    .header__logo .logo_text {
        line-height: 16px;
        padding-left: 10px;
    }
    nav ul {
        padding: 0;
        margin: 0;
    }
    nav ul li {
        list-style: none;
        font-size: 14px;
    }
    nav ul li a {
        display: block;
        transition: border .3s ease-in-out;
        padding: 34px 15px 34px;
        border-top: 3px solid #FFF;
    }
    nav ul a.active, nav ul a:hover {
        border-top: 3px solid #45aed6;
    }

</style>