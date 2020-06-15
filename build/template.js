module.exports = {
    vueTemplate: compoenntName => {

        compoenntName = compoenntName.charAt(0).toLowerCase() + compoenntName.slice(1)
        return `<template>

  <div class="j-${compoenntName}">

    ${compoenntName}

  </div>
</template>

<script>
export default {
  name: 'J${compoenntName}', 

  data () {

    return {
    }

  }, 

  props: {

  }, 

  methods: {}
}
</script>

<style lang="scss" scope>
.j-${compoenntName}{}
</style>
`
    },
    entryTemplate: compoenntName => {

        return `import ${compoenntName} from './${compoenntName}'

${compoenntName}.install = function (Vue) {
  Vue.component(${compoenntName}.name, ${compoenntName})
}

export default ${compoenntName}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(${compoenntName}.name, ${compoenntName})
}
`
    },
    mdDocs: (title) => {

        return `# ${title}



---


## 如何使用



## Attributes



| 参数  | 说明  | 类型  | 可选值 | 默认值 |
|-----|-----|-----|-----|-----|
| -   | -   | -   | -   | -   |

`
    },
    entryTemplate: compoenntName => {
        return `import ${compoenntName} from './${compoenntName}'

  ${compoenntName}.install = function(Vue) {
    Vue.component(${compoenntName}.name, ${compoenntName})
}

export default ${compoenntName}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(${compoenntName}.name, ${compoenntName})
}
`
    }
}