<template>
  <div class="hello">
    <span>准备好了吗？</span><button @click="goyiyi" class="test-one">   点击前往 壹点壹客</button>
  </div>
</template>
<script>
export default {
  methods:{
    goyiyi(){
      this.$router.push({path:"/First_stage"})
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
