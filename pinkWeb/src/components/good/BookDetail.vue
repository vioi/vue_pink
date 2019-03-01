<template>
    <div class="detail">
        <div class="bookDetail">
    <div class="bookImg">
        <img :src="book.image" alt="">
    </div>
    <div class="bookTitle">{{book.name}}</div>
    <div class="bookIntro">
        <ul>
            <li>作者:</li>
            <li>出版社:</li>
            <li>图书类型:</li>
            <li>价格:</li>
        </ul>
        <ul>
            <li>{{book.author}}</li>
            <li>{{book.publisher.name}}</li>
            <li>{{book.category.name}}</li>
            <li>{{book.price}}￥</li>
        </ul>
    </div>
</div>
    </div>
</template>


<script>
export default {
    data:function(){
        return{
            book:{
                category:{},
                publisher:{}
            },
            RootUrl:"http://101.200.58.3:9090/webapi",
          
        }
    },
    created(){
        this.getData()
     
    },
    methods:{
        getData:function(){
            var id = this.$route.params.id
            this.$http.get(this.RootUrl+'/book?method=getBookById&id='+id).then(({body})=>{
            this.book = body.result
            })
        }
    }
}
</script>


<style  scoped>
.detail{
    background: white
}

.bookImg{
    padding-top: 6vh;
    margin-bottom:4vh; 
    text-align: center
}
.bookTitle{
    background-color: #f2f2f2;
    height: 6vh;
    line-height: 6vh;
    font-size: 24px;
    padding-left: 4vw;
}
.bookIntro ul{
    display: inline-block;
    padding-left: 4vw;  
}
.bookIntro ul:last-of-type{
    margin-left: 8vw;
}
.bookIntro ul li{
    list-style-type: none;
    margin-top: 2vh;
    font-family: '微软雅黑 Regular', '微软雅黑';
    font-size: 16px;
    color: #999999;
}
.bookIntro ul:last-of-type li{
    color: #666666;
}
</style>
