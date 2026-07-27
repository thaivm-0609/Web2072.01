<script setup>
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

//khởi tạo biến để nhận dữ liệu người dùng nhập vào form
const product = ref({
    name: '',
    price: 0,
    image: '',
});
//lấy id từ URL bằng useRoute xuống để lấy thông tin chi tiết + update
const route = useRoute(); 
const id = route.params.id; //lấy id từ url xuống thông qua params
//tạo hàm getDetail để lấy thông tin cũ, hiển thị ra form
const getDetail = async (id) => {
    const response = await axios.get(`http://localhost:3000/products/${id}`);
    product.value = response.data; //gán dữ liệu trả về cho biến product
}
onMounted(() => {
    getDetail(id);
})
const handleSubmit = async () => {
    try {
        //call api để gửi dữ liệu lên json-server
        await axios.put(
            `http://localhost:3000/products/${id}`, //url API
            product.value //dữ liệu người dùng nhập vào form
        );
        router.push('/list');
    } catch (error) {
        console.log(error);
    }
}

</script>
<template>
    <h1>Đây là trang chỉnh sửa</h1>
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