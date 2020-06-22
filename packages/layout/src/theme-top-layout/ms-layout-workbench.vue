<template>
  <li>
    <el-dropdown trigger="click" size="mini" placement="bottom">
      <span>
        <svg-icon class="ms-layout-left__svg-icon" name="workbench" width="62" height="60"></svg-icon>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-row class="ms-layout-left__row">
          <template v-for="(item, i) in routes">
            <el-col :key="i" :span="6" class="ms-layout-left__col" :class="[routes.length > 4 ? 'ms-menu-max' : 'ms-menu-min']">
              <router-link :to="item.path" :key="i">
                <svg-icon class="ms-layout-left__workbench__icon" :name="item.icon" width="36" height="36"></svg-icon>
                <small>{{ item.title }}</small>
              </router-link>
            </el-col>
          </template>
        </el-row>
      </el-dropdown-menu>
    </el-dropdown>
  </li>
</template>
<script>
export default {
  name: 'MsLayoutWorkbench',
  computed: {
    routes() {
      return this.$mStore.getters.getRoutes;
    }
  }
};
</script>
