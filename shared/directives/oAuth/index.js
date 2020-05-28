const oAuth = {
  inserted(el, binding) {
    const { value } = binding;
    const roles = ['admin', 'role'];
    if (value && value instanceof Array && value.length > 0) {
      const oAuthRoles = value;
      const hasPermission = roles.some(role => {
        return oAuthRoles.includes(role);
      });
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"');
    }
  }
};

export default oAuth;
