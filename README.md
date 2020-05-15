### 打包 npm run dist 

npm run clean 
npm run build:file 
npm run lint 
webpack --config build/webpack.conf.js 
webpack --config build/webpack.common.js 
webpack --config build/webpack.component.js 
npm run build:utils 
npm run build:umd 
npm run build:theme


npm run clean && npm run build:file && npm run lint && webpack --config build/webpack.conf.js && webpack --config build/webpack.common.js && webpack --config build/webpack.component.js && npm run build:utils && npm run build:umd && npm run build:theme