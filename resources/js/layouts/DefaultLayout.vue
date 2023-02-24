<script setup>
import SideBarMenu from '../components/SideBarMenu.vue';
</script>

<template>
    <div class="layout-container flex">
        <div class="sidebar">
            <SideBarMenu></SideBarMenu>
        </div>
        <div class="content">
            <header class="text-[#ffffff] text-[10px] mt-[33px] mb-[20px] w-[300px]">
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