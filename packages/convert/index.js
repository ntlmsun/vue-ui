import { getWbCode, getCode } from './src/wbConvert';

const Convert = function() {};

Convert.wbConvert = (word) => {
  const wbCode = new Array();
  for (let i = 0; i < word.length; i++) {
    const code = word.charAt(i);
    wbCode.push(getWbCode(code));
  }
  return getCode(wbCode);
};

export default Convert;
