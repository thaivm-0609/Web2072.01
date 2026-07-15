<script setup>
//khai báo components sẽ sử dụng trong file
import HelloWorld from './components/HelloWorld.vue' 
import TheWelcome from './components/TheWelcome.vue'
//lưu trữ dữ liệu của biến: tự động theo dõi giá trị của biến thay đổi
//và rerender ra giao diện
import { ref } from 'vue'; //thường dùng với kiểu dữ liệu nguyên thủy: string/number/boolean
import { reactive } from 'vue'; //thường dùng cho array/object

//const tenBien = ref(giaTri);
const count = ref(100);  //kiểu dữ liệu number - giá trị là 100.
const name = ref('100'); //kiểu dữ liệu string - giá trị là 100.
const isActive = ref(true); //kiểu dữ liệu boolean - giá trị là true/false

//const tenBien = reactive(giaTri);
const student = reactive({
  //key: value,
  name: 'thaivm2',
  birth: 1970,
})

const students = reactive([
  {
    name: 'thaivm3',
    birth: 1971,
    avatar: "https://picsum.photos/200/300"
  },
  {
    name: 'thaivm4',
    birth: 1972,
    avatar: "https://picsum.photos/200/300"
  },
  {
    name: 'thaivm5',
    birth: 1973,
    avatar: "https://picsum.photos/200/300"
  }
])

//Data binding: ràng buộc dữ liệu
//1 chiều: {{ tenBien }} hoặc v-bind
//2 chiều: v-model: v-model="tenBien"
//event binding: 
// * dạng đầy đủ: v-on:event="hàmXửLý" VD: onclick => v-on:click=""
// * dạng rút gọn: @event="hàmXửLý" VD: onclick => @click=""

//style - class binding
const username = ref('thaivm2');
</script>

<template>
  <div>
    <p>{{ username }}</p>
    <input type="text" v-model="username">
    <button @click="testClick">Click</button>
  </div>
  <header>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth</th>
          <th>Avatar</th>
          <th>Avatar (viết tắt)</th>
        </tr>
      </thead>
      <tbody>
        <!-- cú pháp của v-for: 
         v-for="sốÍt in sốNhiều" : không cần index
         v-for="(sốÍt,index) in sốNhiều" -->
        <tr v-for="(s, index) in students" :key="index">
        <!-- <tr v-for="s in students"> -->
          <td>{{ s.name }}</td>
          <td>{{ s.birth }}</td>
          <td><img v-bind:src="s.avatar" alt=""></td> <!-- viết dạng đầy đủ v-bind:attribute="value" -->
          <td><img :src="s.avatar" alt=""></td> <!-- viết tắt :attribute="value" -->
        </tr>
      </tbody>
    </table>
    <!-- <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" /> -->
    <!-- hiển thị dữ liệu của biến {{ tenBien }} -->
    <!-- <h1>{{ count }}</h1>
    <h1>{{ name }}</h1>
    <h1>{{ isActive }}</h1> -->
    <!-- <div class="wrapper">
      <HelloWorld msg="WEB2072.01" />
    </div> -->
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
