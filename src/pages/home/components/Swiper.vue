<template>
 <div class = 'wrapper'>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for= 'item of swiperList' :key= item.id>
      <img class = 'swiper-img' :src= 'item.imgUrl' >
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>  左右箭头
    <div class="swiper-scrollbar"   slot="scrollbar"></div>  scrollbar -->
   </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination', // 指示当前页的点
        loop: true // 轮播可循环
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/e7eac5a5e99e6517c61b953c0fece63b.jpg_750x200_4b701cf8.jpg'
        }, {
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1809/3e/52e1824f1ace7202.jpg_750x200_ac90db3f.jpg'
        }, {
          id: '0003',
          imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201910/c8f999e73909c2b03e22f793fd29108c.jpg_750x200_63793e6c.jpg'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper
    // overflow hidden
    width: 100%
    height: 0
    padding-bottom: (100/375)*100%
    background: #eee
  .swiper-img
    width: 100%
  .wrapper >>> .swiper-pagination-bullet-active //scoped限制样式作用范围（当前组件）当class不在当前组件时需要样式穿透
    background: white !important
</style>
