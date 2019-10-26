<template>
    <div class="img-link-wrapper">
        <div class="item">
            <a href="javascript:;">
                <img :src="imglink1">
            </a>
            <a href="javascript:;" class="imglink2">
                <img :src="imglink2">
            </a>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        imglink1:{default:""},
        imglink2:{default:""}
    }
}
</script>
<style scoped>
    div{
        margin: 0;
        padding: 0;
        border: 0px;
        font-weight: normal;
        display: block;
    }
    img{
        border: none;
        vertical-align: top;
    }
    .img-link-wrapper{
        padding: .1rem .1rem 0;
        background: #FFFFFF;
        overflow: hidden;
    }
    .img-link-wrapper .item{
        overflow: hidden;
        margin: 0 0 .1rem 0;
        display: flex;
        border-radius: 0.08rem;
    }
    .img-link-wrapper .item:last-child a{
        height: 8rem;
    }
    .img-link-wrapper .item a{
        display: block;
        width: 100%;
        height: 2rem;
        overflow: hidden;
        background: #FAFAFA;
        margin: 0 .1rem 0 0;
    }
    .img-link-wrapper .item img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .img-link-wrapper .item .imglink2{
        margin-left: .5rem
    }
</style>