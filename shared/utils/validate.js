export default isExternal = path => /^(https?:|mailto:|tel:)/.test(path);
