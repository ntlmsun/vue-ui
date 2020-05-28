const isExternal = path => /^(https?:|mailto:|tel:)/.test(path);

export default isExternal;
