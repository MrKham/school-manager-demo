<script setup>
import { ref } from 'vue';
import { closeToast, showLoadingToast } from 'vant';
const value1 = ref('');
const value2 = ref('');
const value3 = ref('abc');
const value4 = ref('');
const pattern = /\d{6}/;

const validator = (val) => /1\d{10}/.test(val);

const validatorMessage = (val) => `${val} is invalid`;

const asyncValidator = (val) =>
    new Promise((resolve) => {
        showLoadingToast('Validating...');

        setTimeout(() => {
            closeToast();
            resolve(val === '1234');
        }, 1000);
    });

const onFailed = (errorInfo) => {
    console.log('failed', errorInfo);
};
</script>

<template>
    <van-form @failed="onFailed">
        <van-cell-group inset>
            <van-field 
              v-model="value1"
              name="pattern"
              placeholder="Họ Và Tên"
              label="Họ Và Tên"
            />
            <van-field 
              v-model="value2"
              name="validator"
              placeholder="Địa Chỉ Email"
              label="Địa Chỉ Email"
            />
            <van-field
              v-model="value3"
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