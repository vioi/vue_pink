<template>
    <div class="goods-list">
        <router-link :to="'/home/goodInfo/'+item.id" v-for="item in goodslist" :key="item.id" class="goods-item">
            <div class="imgBox"><img :src="item.img_url" alt=""></div>
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span class="one">{{ item.zhaiyao }}</span>
                    <span class="two">剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        data: function () {
            return {
                pageindex: 1, // 分页的页数
                goodslist: [], // 存放商品列表的数组
            }
        },
        created() {
            this.getGoodsList();
        },
        methods: {
            getGoodsList() {
                // 获取商品列表
                this.$http
                    .get("api/getgoods?pageindex=" + this.pageindex)
                    .then(result => {
                        
                        if (result.body.status=== 0) {
                             result.body.message.forEach(item => {
                            item.img_url = item.img_url.replace("http://127.0.0.1:8899","http://129.28.86.26:8899") ;
                           })          
                            this.goodslist = this.goodslist.concat(result.body.message);
                        }
                    });
            },
            getMore(){
                this.pageindex++;
                this.getGoodsList();
            }
        },
        components: {}
    }
</script>

<style lang="less" scoped>

    .goods-list{
        display: flex;
        flex-wrap: wrap;
        padding: 7px;
        justify-content: space-between;

        .goods-item{
            width: 100%;
            border: 1px solid #ccc;
            box-shadow: 0 0 8px #ccc;
            margin: 4px 0;
            padding: 2px;
            display: flex;
             flex-direction:column;
            // justify-content: space-between;
            min-height: 293px;
            .imgBox{
                flex: 1;
                img{
                width: 100%;
                height: 100%;
            }
            }

            
            .title{
                 flex: 1;
                 color:rgb(155, 22, 40);
                font-size: 14px;
            }

            .info{
                 flex: 2;
                background-color: #eee;
                p{
                    margin: 0;
                    padding: 5px;
                }
                .price{
                    .now{
                        color: red;
                        font-weight: bold;
                        font-size: 16px;
                    }
                    .old{
                        text-decoration: line-through;
                        font-size: 12px;
                        margin-left: 10px;
                    }
                }
                .sell{
                    display: flex;
                    flex-direction: column;
                    font-size: 13px;
                    .one{
                        flex: 1;
                        overflow: hidden;
                        text-overflow:ellipsis;
                         white-space: nowrap;

                    }
                    .two{
                        flex: 1
                    }
                }
            }
        }
    }
</style>