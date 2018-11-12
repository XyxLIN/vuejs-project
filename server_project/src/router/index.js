
import Vue from 'vue'

import VueRouter from 'vue-router'


Vue.use(VueRouter)

import Apphome from '@/pages/home/home'

import AppMessage from '@/pages/info/AppMessage'

import NotFound from '@/pages/notFound/NotFound'

import AppShop from '@/pages/function/AppShop'

import mine from '@/pages/user/AppMine'

import detail from '@/pages/details/movieDetail'

import login from '@/login'

import Book from "@/pages/details/book";

import cart from '@/pages/cart/cart'

const routes = [{
    path :'/',
    redirect:{ name: 'home'}
},
{
    path:'/cart',
    name:'cart',
    component:cart
  
},
{
    path:'/home',
    name:'home',
    component:Apphome
},
{
    path:'/login',
    name:'login',
    component:login
  
},

{
    path:'/chat',
    name:'chat',
    component:AppMessage
},
{
    path:'/detail/:id',
    name:'detail',
    component:detail
},
// {
//     path:'/appshop',
//     name:'AppShop',
//     component:AppShop
// },
// {
//     path:'/notfound',
//     name:'notfound',
//     component:NotFound 
// },
{
    path:'/mine',
    name:'mine',
    component:mine,
    // children:[
    //     {
    //         path:'/login',
    //         name:'login',
    //         component:login
            
    //     }
    // ]
},
{
    path:'/shop',
    name:'shop',
    component:AppShop,
    props:true
},
{
    path:'/book',
    name:'book',
    component:Book
}
// {
//     path:'*',
//     redirect:{ name: 'no-found'}
// }

]

const router = new VueRouter({
    mode:'history',
    routes
})


export default router