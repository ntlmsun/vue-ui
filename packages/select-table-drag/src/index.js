const isElement = el => {
  if (el.parentNode.nodeName === 'TR') {
    return el.parentNode;
  } else {
    return isElement(el.parentNode);
  }
};

const getIndex = (tBody, tr) => {
  let index = -1;
  for (let i = 0; i < tBody.length; i++) {
    if (tBody[i] === tr) {
      index = i;
    }
  }
  return index;
};

const listener = (el, binding) => {
  let keyUp = false;

  let startIndex = -1;

  let endIndex = -1;

  const tbody = el.querySelectorAll('tbody')[0].children;

  el.addEventListener('mousedown', event => {
    keyUp = true;
    const TRNODE = isElement(event.toElement);
    startIndex = getIndex(tbody, TRNODE);
    if (startIndex === -1) {
      startIndex = 0;
    }
    tbody[startIndex].className = 'ms-table-drag';
  });

  el.addEventListener('mousemove', event => {
    if (keyUp) {
      if (event.toElement === el || (event.toElement.nodeName === 'TH' || event.toElement.parentNode.nodeName === 'TH')) {
        keyUp = false;
        event.preventDefault();
        event.stopPropagation();
        binding.value.call(this, { startIndex, endIndex, tbody });
      } else {
        const TRNODE = isElement(event.toElement);
        const index = getIndex(tbody, TRNODE);
        if (index !== -1) {
          tbody[index].className = 'ms-table-drag';
          endIndex = index;
        }
      }
    }
  });

  el.addEventListener('mouseup', event => {
    if (keyUp) {
      keyUp = false;
      const TRNODE = isElement(event.toElement);
      endIndex = getIndex(tbody, TRNODE);
    }
    if (endIndex !== -1) {
      tbody[endIndex].className = 'ms-table-drag';
    } else {
      endIndex = 0;
    }
    binding.value.call(this, { startIndex, endIndex, tbody });
  });

  el.addEventListener('mouseleave', event => {
    if (keyUp) {
      keyUp = false;
      event.preventDefault();
      event.stopPropagation();
      binding.value.call(this, { startIndex, endIndex, tbody });
    }
  });
};

export default {
  name: 'SelectTableDrag',
  bind(el) {
    el.onselectstart = el.ondrag = () => {
      return false;
    };
  },
  inserted: listener,
  update: listener
};
