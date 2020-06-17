<template>
  <li class="ms-layout-left__avatar">
    <el-dropdown>
      <span class="ms-layout-left__avatar__dropdown">
        <el-avatar>
          <svg-icon name="doctor" width="40" height="40"></svg-icon>
        </el-avatar>
        肾内科护理单元 <br> 郑元畅
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>个人设置</el-dropdown-item>
        <el-dropdown-item divided>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </li>
</template>
<script>
export default {
  name: 'MsLayoutAvatar'
};
</script>
