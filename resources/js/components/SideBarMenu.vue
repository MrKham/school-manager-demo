<script setup>
import { ref } from 'vue';
const active = ref(0);
</script>

<template>
    <van-sidebar v-model="active">
        <van-sidebar-item title="Title" />
        <van-sidebar-item title="Title" />
        <van-sidebar-item title="Title" />
    </van-sidebar>
</template>