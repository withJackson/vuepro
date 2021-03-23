<template>
  <div  class="app-wrapper">
    <!-- <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" /> -->
    <sidebar class="sidebar-container" />
    <div  class="hasTagsView main-container">
      <!-- <div :class="{'fixed-header':true}">
        <navbar />
        <tags-view />
      </div> -->
      <app-main />
      <!-- <right-panel v-if="showSettings">
        <settings />
      </right-panel> -->
    </div>
  </div>
</template>

<script>
// import RightPanel from '@/components/RightPanel'
import Sidebar from './Sidebar'
import AppMain from './AppMain'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  // @import "~@/styles/mixin.scss";
  // @import "~@/styles/variables.scss";

  .app-wrapper {
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    // width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
