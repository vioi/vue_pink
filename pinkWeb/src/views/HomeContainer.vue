<template>
    <div>
    <mt-swipe  :auto="4000">
        <mt-swipe-item v-for="item in lunboList" :key="item.img">
            <img :src="item.img" alt="">
        </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/newsList">
                    <img src="../assets/images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/photoList">
                    <img src="../assets/images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to="/home/goodList">
                    <img src="../assets/images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../assets/images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../assets/images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <a href="#">
                    <img src="../assets/images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data:function(){
        return {
            lunboList:[]
        }
       
    },

    created(){
        this.getLun()
    },
    methods:{
        getLun:function(){
            this.axios.get("http://129.28.86.26:8899/api/getlunbo").then(res=>{
            if(res.data.status==0){
                this.lunboList=res.data.message            
            }
        })
        }
    }
}
</script>


<style lang="less" scoped>
//  .mint-swipe{
//         height: 200px;
//         img {
//             width: 100%;
//             height: 100%;
//         }
//     }
//      .mui-grid-view.mui-grid-9 {
//         background-color: #fff;
//         border: none;
//         img {
//             width: 60%;
//             height: 60%;
//         }

//         .mui-media-body{
//             font-size: 13px;
//         }
//     }

 .mint-swipe{
        height: 200px;
        img {
            width: 100%;
            height: 100%;
        }
    }

    .mui-grid-view.mui-grid-9 {
        background-color: #fff;
        border: none;
        img {
            width: 60%;
            height: 60%;
        }

        .mui-media-body{
            font-size: 13px;
        }
    }

</style>
