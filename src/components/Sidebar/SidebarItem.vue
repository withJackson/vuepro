<template>
  <div v-if="!item.hidden">
    <el-menu-item :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  created () {
    console.log('item', this.item)
    if (this.item.children && this.item.children.length === 1) {
      this.item.path = this.item.path + '/' + this.item.children[0].path
    }
  },
  methods: {
  }
}
</script>
