<template>
    <div>
        <img :src="focused?selectedImg:normalImg">
    </div>
</template>
<script>
export default {
    props:{
        focused:false,
        selectedImg:{default:""},
        normalImg:{default:""},
    }
}
</script>
<style scoped>
    img{
        height: 2rem;
    }
</style>