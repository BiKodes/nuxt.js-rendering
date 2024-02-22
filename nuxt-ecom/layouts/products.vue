<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="">Alfajiri Mbili</nuxt-link>
            </nav>
        </header>

        <!-- Output the page contents -->
        <div>
            <slot></slot>
        </div>

        <footer>
            <ul>
                <li><nuxt-link to="/">Home</nuxt-link></li>
                <li><nuxt-link to="/about">About</nuxt-link></li>
                <li><nuxt-link to="/products">Products</nuxt-link></li>
            </ul>
        </footer>
    </div>
</template>

<style scoped>
    .router-link-exact-active {
        color: #12b488;
    }
</style>