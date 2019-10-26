<template>
    <div>
        <h2 style="text-align:center">这里是实验用的地方</h2>
        <div>
            <vuerouter></vuerouter>
        </div>
    </div>
</template>
<script>
import moretomore from "./moretomore"
import vuerouter from "../components/First_stage/commom/Product子组件/vuerouter"
export default {
    components:{
        "moretomore":moretomore,
        "vuerouter":vuerouter
    }
}
</script>

<!--
<template>
    <div>
        <div>
            <a href="#" @click.prevent="comName='view1'">1111111</a>
            <a href="#" @click.prevent="comName='view2'">2222222</a>
            <a href="#" @click.prevent="comName='view3'">3333333</a>
        </div>
        <!-- <div>
            <view1></view1>
        </div>
        <div>
            <view2></view2>
        </div>
        <div>
            <view3></view3>
        </div> 
        <component :is="comName"></component>
    </div>    
</template>
<script>
    import View1 from "./View1"
    import View2 from "./View2"
    import View3 from "./View3"
    export default {
        components:{
            "view1":View1,
            "view2":View2,
            "view3":View3
        },
        data(){
            return{
                comName:"view1"
            }
        }
    }
</script>
-->
