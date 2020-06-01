import { hasOwn } from 'msun-lib-ui/shared/utils/util';

export function isVNode(node) {
  return node !== null && typeof node === 'object' && hasOwn(node, 'componentOptions');
}
