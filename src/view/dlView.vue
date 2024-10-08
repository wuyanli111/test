<script lang="ts" setup>
import { watch, ref } from 'vue';
const value = ref<string>('');
const value1 = ref<string>('');
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
</script>

<template>
    <h1>这是登录页面</h1>
<img src="C:\Users\WUYANLI\Desktop\9月月考\images\appm3V1L6Y3C3podIGShCo686dXRRY4i.png" alt="">
  <a-space direction="vertical">
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
  </a-space>



  <a-space wrap>
    <a-button type="primary">Primary Button</a-button>
    <a-button>登录</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
  </a-space>
</template>

<style scoped>

</style>
