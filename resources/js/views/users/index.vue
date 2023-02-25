<script setup>
import { useRouter } from "vue-router"

const router = useRouter();
const gotoCreateUser = () => {
    router.push('/create-user');
}
</script>

<template>
    <h1>This is Home User</h1>
    <van-button @click="gotoCreateUser" round block type="primary" native-type="submit">
        Tạo User
    </van-button>
</template>