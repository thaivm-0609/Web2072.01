<script setup>

//nhận thông tin từ ProductCard.vue thông qua props
const props = defineProps({
    //key: kiểu dữ liệu
    name: String,
    price: Number,
    description: String,
})
</script>

<template>
    <h5 class="card-title">{{ name }}</h5>
    <p class="card-text">Price: {{ price }}</p>
    <p class="card-text">Description: {{ description }}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
</template>
