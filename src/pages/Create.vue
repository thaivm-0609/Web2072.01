<script setup>
import router from '@/router';
import axios from 'axios';
import { reactive } from 'vue';

//khởi tạo biến để nhận dữ liệu người dùng nhập vào form
const product = reactive({
    name: '',
    price: 0,
    image: '',
});

const handleSubmit = async () => {
    try {
        //call api để gửi dữ liệu lên json-server
        await axios.post(
            'http://localhost:3000/products', //url API
            product //dữ liệu người dùng nhập vào form
        );
        router.push('/list');
    } catch (error) {
        console.log(error);
    }
}

</script>
<template>
    <h1>Đây là trang thêm mới</h1>
    <form @submit.prevent="handleSubmit()">
        <div>
            <label for="">Name</label>
            <input type="text" v-model="product.name">
        </div>
        <div>
            <label for="">Price</label>
            <input type="number" v-model="product.price">
        </div>
        <div>
            <label for="">Image</label>
            <input type="text" v-model="product.image">
        </div>
        <button type="submit">Submit</button>
    </form>
</template>