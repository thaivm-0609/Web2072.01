<script setup>
import axios from 'axios'; //call API
import { onMounted, ref } from 'vue'; //tự động thực thi hàm khi component được khởi tạo

const products = ref([]); //khởi tạo biến
const getListProducts = async () => { //khai báo hàm lấy danh sách sản phẩm từ json-server
    //dữ liệu mà json-server trả về: const response = await axios.method(url, data-neu-co);
    const response = await axios.get('http://localhost:3000/products');
    products.value = response.data; //gán dữ liệu json-server trả về cho biến products
    console.log(products.value);
}

const delProduct = async (id) => {
    if (confirm('Bạn có chắc không?')) {
        await axios.delete(`http://localhost:3000/products/${id}`); //gửi yêu cầu xóa bản ghi
        getListProducts(); //gọi hàm để lấy danh sách sản phẩm mới (sau khi xóa)
    }
}

onMounted(() => {
    getListProducts(); //tự động thực thi hàm khi load List.vue
})
</script>

<template>
    <h1>Đây là trang danh sách</h1>
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>Image</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="p in products">
                <td>{{ p.id }}</td>
                <td>{{ p.name }}</td>
                <td>{{ p.price }}</td>
                <td><img :src="p.image" alt=""></td>
                <td>
                    <button @click="delProduct(p.id)">Xóa</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>