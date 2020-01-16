<template>
  <div class="container">
    search
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item.summary}}
        <img :src="item.image" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    middleware: 'auth',
    layout: 'default',
    data() {
      return {
        list: []
      }
    },
    components: {},
    async asyncData(context) {
      console.log(context,'dsds');
      // let res = await axios.get('https://www.bitdata.pro/api/newsservice/getList?lang=zh-CN&type=237fb19abddbee099d4feb9dd596f51a&pageNum=1&limit=100')
      // return {
      //   list: res.data.data.result
      // }
    },
    mounted() {
      // this.getData()
      // this.$store.commit('handleIsLogin','fasle')
    },
    methods: {
      async getData() {
        console.log(process.env.baseURL);
        // let res = await axios.get('https://www.bitdata.pro/api/newsservice/getList?lang=zh-CN&type=237fb19abddbee099d4feb9dd596f51a&pageNum=1&limit=100')
        let res = await this.$axios.$get('http://localhost:3000/api/newsservice/getList?lang=zh-CN&type=237fb19abddbee099d4feb9dd596f51a&pageNum=1&limit=100')
        console.log(res,'dasqqqqq');
        // this.list = res.data.data.result
      }
    }
  }
</script>

<style lang="scss">
img{
  width: 30px;
}
</style>
