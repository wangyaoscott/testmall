<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>
