<template>
  <li>
    <el-dropdown trigger="click" size="mini" placement="bottom">
      <span>
        <svg-icon class="ms-layout-left__svg-icon" name="workbench" width="62" height="60"></svg-icon>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-row class="ms-layout-left__row">
          <template v-for="item in msWorkbench">
            <el-col :key="item.key" :span="6" class="ms-layout-left__col">
              <svg-icon class="ms-layout-left__workbench__icon" :name="item.icon" width="36" height="36"></svg-icon>
              <small>{{ item.title }}</small>
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
  data() {
    return {
      msWorkbench: [
        { key: '1', icon: 'patient', title: '患者管理' },
        { key: '2', icon: 'treatment', title: '治疗清单' },
        { key: '3', icon: 'record', title: '电子病历' },
        { key: '4', icon: 'charge', title: '收费管理' },
        { key: '5', icon: 'patient', title: '患者管理' },
        { key: '6', icon: 'treatment', title: '治疗清单' },
        { key: '7', icon: 'record', title: '电子病历' },
        { key: '8', icon: 'charge', title: '收费管理' }
      ]
    };
  }
};
</script>
