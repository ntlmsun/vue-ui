<template>
  <li class="ms-layout-left__avatar">
    <ms-dropdown>
      <span class="ms-layout-left__avatar__dropdown">
        <ms-avatar>
          <svg-icon name="doctor" width="40" height="40"></svg-icon>
        </ms-avatar>
        肾内科护理单元 <br> 郑元畅
      </span>
      <ms-dropdown-menu slot="dropdown">
        <ms-dropdown-item>个人中心</ms-dropdown-item>
        <ms-dropdown-item>个人设置</ms-dropdown-item>
        <ms-dropdown-item divided>退出登录</ms-dropdown-item>
      </ms-dropdown-menu>
    </ms-dropdown>
  </li>
</template>
<script>
export default {
  name: 'MsLayoutAvatar'
};
</script>
