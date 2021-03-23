<template>
  <div >
    <!-- <logo v-if="showLogo" :collapse="isCollapse" /> -->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="this.$router.path"
        router
        mode="vertical"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        class="el-menu-vertical-demo"
      >
        <sidebar-item v-for="route in items" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  data () {
    return {
      items: []
    }
  },
  created () {
    this.$router.options.routes.forEach(route => {
      this.items.push({
        name: route.name,
        path: route.path
      })
    })
  },
  computed: {
  }
}
</script>
