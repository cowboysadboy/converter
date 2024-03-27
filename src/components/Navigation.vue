<script setup>
</script>
<template>
    <ul class="navigation">
        <li>
            <router-link class="navigation__link" to="/">Валюты</router-link>
        </li>
        <li>
            <router-link class="navigation__link" to="/converter">Конвертер</router-link>
        </li>
    </ul>
</template>
<style lang="scss">
.navigation {
    display: flex;
    margin-bottom: 50px;
    &__link {
        margin-right: 12px;
        font-size: 14px;
        font-weight: 500;
        padding: 10px 12px;
        color: #464646;
        text-decoration: none;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 0px rgba(70, 70, 70, 0.15);
        background: rgb(255, 255, 255);
    }

    .router-link-active {
        background: rgb(226, 128, 73);
        color: #ffffff;
    }
}
</style>
