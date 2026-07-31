<script setup>
import ProductCard from '@/components/ProductCard.vue';
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';


//lấy danh sách sản phẩm
//B1: khai báo biến để lưu dữ liệu danh sách sản phẩm
const products = ref([]);
//B2: khai báo hàm lấy danh sách sản phẩm
const getProducts = async () => {
    const response = await axios.get('http://localhost:3000/products');
    products.value = response.data; //gán dữ liệu trả về vào biến products
}

onMounted(() => {
    getProducts(); //gọi hàm ngay khi load trang
})
</script>

<template>
    <h1>Flash sale</h1>
    <div class="d-flex">
        <!-- truyền dữ liệu từ Home.vue sang cho ProductCard.vue
            :key="value" 
        -->
        <ProductCard 
            v-for="p in products"
            :pro="p"
        />
        <!-- <div 
            v-for="p in products" 
            class="card mx-2" 
            style="width: 18rem;"
        >
            <img :src="p.image" class="card-img-top" style="max-height: 18rem;" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Price: {{ p.price }}</p>
                <p class="card-text">Description: {{ p.description }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> -->
    </div>

    <h1>Top sản phẩm bán chạy</h1>
    <div class="d-flex">
        <ProductCard 
            v-for="topPro in products"
            :pro="topPro"
        />
        <!-- <div 
            v-for="p in products" 
            class="card mx-2" 
            style="width: 18rem;"
        >
            <img :src="p.image" class="card-img-top" style="max-height: 18rem;" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Price: {{ p.price }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>   -->
    </div>

    <h1>Combo</h1>
    <div class="d-flex">
        <ProductCard 
            v-for="combo in products"
            :pro="combo"
        />
        <!-- <div 
            v-for="p in products" 
            class="card mx-2" 
            style="width: 18rem;"
        >
            <img :src="p.image" class="card-img-top" style="max-height: 18rem;" alt="...">
            <div class="card-body">
                <h5 class="card-title">{{ p.name }}</h5>
                <p class="card-text">Price: {{ p.price }}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>   -->
    </div>
    
</template>