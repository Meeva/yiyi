<template>
    <div>
        <!-- <h3>轮播图 coursoul.vue</h3> -->
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img :src="c1" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img :src="c2" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img :src="c3" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img :src="c4" alt="">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props:{
        c1:{default:""},
        c2:{default:""},
        c3:{default:""},
        c4:{default:""},
    }
}
</script>
<style scoped>
    .mint-swipe{
        height: 14rem;
        overflow: hidden;
    }
    .mint-swipe-item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>