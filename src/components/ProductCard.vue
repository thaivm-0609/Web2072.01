<script setup>
import ProductInfo from './ProductInfo.vue';

//nhận dữ liệu từ Home.vue truyền sang thông qua props
const props = defineProps({
    //key: kiểu dữ liệu
    pro: Object,
})

</script>

<template>
    <div class="card mx-2" style="width: 18rem;">
        <img :src="pro.image" class="card-img-top" style="max-height: 18rem;" alt="...">
        <div class="card-body">
            <!-- truyền dữ liệu sang component con ProductInfo 
             :key="value" -->
            <ProductInfo 
                :name="pro.name"
                :price="pro.price"
                :description="pro.description"
            />
            <!-- <h5 class="card-title">{{ pro.name }}</h5>
            <p class="card-text">Price: {{ pro.price }}</p>
            <p class="card-text">Description: {{ pro.description }}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>