<!--
 * @Author: @memo28.repo
 * @Date: 2023-12-09 10:24:57
 * @LastEditTime: 2023-12-09 10:36:04
 * @Description:
 * @FilePath: /buildingRepo/uniapp/components/src/features/text/index.vue
-->
<template>
  <text>{{ Text.text }}</text>
</template>

<script lang="ts" setup>
import {IText} from '@memo28.build/components'
import {withDefaults, defineProps} from 'vue'

withDefaults(defineProps<{
  Text: IText
}>(), {})

</script>

