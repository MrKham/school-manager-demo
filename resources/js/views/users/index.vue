<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router"
import { getListUser } from "../../services/users";
const router = useRouter();
let users = ref(null);
onMounted(() => {
    getListUser().then((rs) => {
        users.value = rs.data;
        console.log(users);
    })
})

const gotoCreateUser = () => {
    router.push('/create-user');
}
</script>

<template>
    <h1>List Users</h1>
    <table class="w-100">
        <tr>
            <th>Họ Và Tên</th>
            <th>Email</th>
            <th>Chức Năng</th>
        </tr>
        <tr v-for="(user, index) in users" :key="index">
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
            <td>
                <div>
                    <van-button class="bg-blue-500 mr-2" round native-type="submit">
                        Chỉnh Sửa
                    </van-button>
                    <van-button class="bg-red-400" round native-type="submit">
                        Xóa
                    </van-button>
                </div>
            </td>
        </tr>
    </table>
    <van-button @click="gotoCreateUser" round block native-type="submit">
        Tạo User
    </van-button>
</template>
<style>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
</style>