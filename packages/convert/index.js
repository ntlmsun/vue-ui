import { getWbCode, getCode } from './src/wbConvert';
let Pinyin = new (require('./src/pyConvert'))({
  checkPolyphone: false,
  charCase: 0
});

const Convert = function() {};

Convert.wbConvert = (word) => {
  if (word === null || word === '') {
    return null;
  }
  const wbCode = new Array();
  for (let i = 0; i < word.length; i++) {
    const code = word.charAt(i);
    wbCode.push(getWbCode(code));
  }
  return getCode(wbCode);
};

Convert.fullConvert = (word) => {
  if (word === null || word === '') {
    return null;
  }
  return Pinyin.getFullChars(word);
};

Convert.SimpConvert = (word) => {
  if (word === null || word === '') {
    return null;
  }
  return Pinyin.getCamelChars(word);
};

export default Convert;
