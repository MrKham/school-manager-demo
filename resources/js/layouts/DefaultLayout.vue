<script setup>
import SideBarMenu from '../components/SideBarMenu.vue';
</script>

<template>
    <div class="layout-container flex w-[100%]">
        <div class="sidebar w-[20%]">
            <SideBarMenu></SideBarMenu>
        </div>
        <div class="content w-[80%]">
            <header class="text-[#bd3030] text-[30px] mb-[20px] w-[300px]">
                This is Header
            </header>
            <div class="main-content">
                <RouterView></RouterView>
            </div>
            <footer>
                This is Footer
            </footer>
        </div>
    </div>
</template>
<style>
</style>