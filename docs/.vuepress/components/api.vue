<template>
  <div class="api">
    <div class="desc">{{data.desc}}</div>

    <div class="block">
      <h3 class="title">
        接口
      </h3>
      <div class="url">{{data.type}} {{base}}{{data.url}}</div>
    </div>

    <div class="block">
      <div class="title">
        传入参数
      </div>
      <table>
        <tr>
          <th>参数名</th>
          <th>参数类型</th>
          <th>默认值</th>
          <th>测试值</th>
          <th>简介</th>
        </tr>
        <tr v-for="(obj, key, index) in data.data" :key="index">
          <td>{{key}}</td>
          <td>{{obj.type}}</td>
          <td>{{obj.default}}</td>
          <td>{{obj.value}}</td>
          <td>{{obj.desc}}</td>
        </tr>
      </table>
    </div>

    <div class="block">
      <div class="title">
        返回值
      </div>
      <table>
        <tr>
          <th>参数名</th>
          <th>参数类型</th>
          <th>默认值</th>
          <th>简介</th>
        </tr>
        <tr v-for="(obj, key, index) in data.expect.data" :key="index">
          <td>{{key}}</td>
          <td>{{obj.type}}</td>
          <td>{{obj.default}}</td>
          <td>{{obj.desc}}</td>
        </tr>
      </table>
    </div>

    <div class="block">
      <button class="btn-test">测试API</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    base: {
      type: String
    },
    data: {
      type: Object
    }
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style lang="stylus" scoped>
.api
  .desc
    margin-bottom 10px
  .block
    padding-left 15px
    margin-bottom 10px
    .url
      background-color #f7f7f7
      border-radius 6px
      padding 20px
      margin-top 10px
    .title
      font-weight bold
      font-size 18px
    .btn-test
      outline none
      appearance none
      cursor pointer
      border none 
      width 100px
      height 40px
      font-size 16px
      color #ffffff
      border-radius 4px
      background-color $accentColor
      &:hover
        background-color darken($accentColor, 10%)
</style>