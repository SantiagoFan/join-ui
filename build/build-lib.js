
// const path = require('path');
const run = require('child_process').execSync
const chalk = require('chalk');
const Components = require('./get-components')()

function build({ input, output } = {}, index, arr) {
    console.log(chalk.blue(`正在打包第${index+1}/${arr.length} 个文件 --> ${output}`))
    run(
      `vue-cli-service build --target lib --no-clean  --name ${output} --dest lib ${input}`
    )
  }

// 构建多入口文件
const newlist = Components.map(name=> { 
  return {
    'input' : 'packages/'+name+'/index.js',
    'output':name+"/index"
  }
})
// 开始构建
newlist.forEach(build)
 
// 添加默认全打包入口文件
console.log(chalk.blue(`正在打包第主文件`))
build({'input':'packages/index.js',output:'main'},0,[1])


console.log(chalk.green(`=========================================`))
console.log(chalk.green(`========打包成功(build success)!=========`))
console.log(chalk.green(`=========================================`))