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
  },
  {
    name: 'thaivm4',
    birth: 1972,
  },
  {
    name: 'thaivm5',
    birth: 1973,
  }
])

</script>

<template>
  <header>
    <h1>Thông tin sinh viên</h1>
    <br>
    <p>Họ tên: {{ student.name }}</p>
    <p>Năm sinh: {{ student.birth }}</p>

    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birth</th>
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
