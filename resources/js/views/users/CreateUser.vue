<script setup>
import { ref } from 'vue';
import { closeToast, showLoadingToast } from 'vant';
import { createUser } from '@/services/users.js'
import { useRouter } from 'vue-router';

const router = useRouter();
const userName = ref('');
const email = ref('');
const password = ref('');

const onSubmit = () => {
    const user = {
        name: userName.value,
        email: email.value,
        password: password.value
    }
    createUser(user).then((result) => {
        router.push('/');
    })
}

</script>

<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field 
              v-model="userName"
              name="pattern"
              placeholder="Họ Và Tên"
              label="Họ Và Tên"
            />
            <van-field 
              v-model="email"
              name="validator"
              placeholder="Địa Chỉ Email"
              label="Địa Chỉ Email"
            />
            <van-field
              v-model="password"
              placeholder="Mật Khẩu"
              label="Mật Khẩu"
              type="password"
            />
        </van-cell-group>
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                Submit
            </van-button>
        </div>
    </van-form>
</template>