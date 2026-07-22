//khai báo danh sách các màn hình trong website
import Create from "@/pages/Create.vue";
import Create from "@/pages/Create.vue";
import Edit from "@/pages/Edit.vue";
import List from "@/pages/List.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    //khai báo điều hướng
    routes: [
        {
            //path bắt buộc phải bắt đầu bằng dấu "/"
            path: '/list', //đường dẫn ở trên trình duyệt
            component: List, //component sẽ được hiển thị ra
            name: 'list', //đặt tên cho router
            // children: [], children dùng để khai báo các path con, có chung tiền tố path của cha
        }, 
        {
            path: '/create',
            component: Create,
            name: 'create',
        },
        {
            path: '/edit',
            component: Edit,
            name: 'edit',
        }
    ], 
    history: createWebHistory(),
})

export default router;