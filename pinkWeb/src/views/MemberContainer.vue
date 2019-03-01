<template>
    <div class="member">
           <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="(item,index) in lunboList" :key="index">
            <img :src="item.url" alt="">
        </mt-swipe-item>
    </mt-swipe>

        <div v-for="(item ,index) in result" :key="index">
  <div class="home-mulu">{{item.name}}</div>
  <div class="home-book" v-for="(book,idx) in item.items" :key=idx>
    
    <router-link :to="'/member/'+book.id" >
    <img :src="book.image" alt="">
    <span class="text">{{book.name}}</span>
    </router-link>
    
  </div>
</div>
    </div>
</template>


<script>
export default {
    data:function(){
        return{
            lunboList:[
                {url:require("../assets/images/f1.jpg")},
                {url:require("../assets/images/f2.jpg")},  
                {url:require("../assets/images/f3.jpg")},  
               
            ],
            result:""
        }
    },
    created(){

        this.getList()
    },
    methods:{
       getList:function(){
           this.axios.get("http://101.200.58.3:9090/webapi/section?method=list").then(res=>{
               this.result = res.data.result
           })
       } 
    }
}
</script>

<style lang="less" scoped>
.member{
    background-color: white
}
 .mint-swipe{
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }
.home-mulu{
    height: 6vh;
    line-height: 6vh;
    background-color: #f2f2f2
}
.home-book{
    height: 25vh;
    width: 50vw;
    margin-top:2vh;
    padding: 2px 20px 10px 20px;
    display: inline-block;
    text-align: center;
    .text{
        color:rgb(155, 22, 40);
        text-overflow:ellipsis;
        white-space: nowrap;font-size: 14px;

    }
}


.home-book{img{
    width: 100%
}}
    
</style>