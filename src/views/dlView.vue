<script lang="ts" setup>
import { watch, ref } from "vue";

// eslint-disable-next-line no-undef
const value = ref("");
const value1 = ref("");

const username = ref("");
const password = ref("");
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
function click() {
  if (username.value === "" && password.value === "") {
    alert("账号或密码不能为空");
  }
  if (username.value === "admin" || password.value === "123456") {
  // eslint-disable-next-line no-restricted-globals
  location.href="/main"
  } else {
    alert("请输入admin 123456");
  }
}
</script>

<template>
  <div>
    <div class="block text-center" style="width: 600px;height: 100vh; position: absolute;">
      <el-carousel style="width: 600px;height: 100vh;">
        <el-carousel-item style="width: 600px;height: 100vh;">
          <img
            src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
            alt=""
            style="position: absolute"
            class="img"
          />
        </el-carousel-item>
        <el-carousel-item style="width: 600px;height: 100vh;">
          <img
            src="../images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
            alt=""
            style="position: absolute"
            class="img"
          />
        </el-carousel-item>
        <el-carousel-item style="width: 600px;height: 100vh;">
          <img
            src="../images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
            alt=""
            style="position: absolute"
            class="img"
          />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div style="position: absolute; margin-top: 200px; margin-left: 200px">
      <div
        class="position"
        style="margin-left: 680px; font-size: 30px; font-weight: 600"
      >
        登录,即刻创造您的用户
      </div>
      <br />
      <div class="position flex" style="width: 320px">
        <div class="border">手机登录</div>
        <div class="border">账号登录</div>
      </div>

      <a-space direction="vertical" class="position">
        <a-input
          v-model:value="username"
          placeholder="账号"
          style="width: 320px; height: 50px"
        />
        <a-input
          v-model:value.lazy="password"
          autofocus
          placeholder="密码"
          style="width: 320px; height: 50px"
        />
      </a-space>
      <br />
      <div
        class="flex position"
        style="width: 320px; line-height: 50px; font-size: 15px"
      >
        <input type="radio" />
        <p>我已阅读并同意</p>
        <a href="">《服务协议》</a>
        <p>和</p>
        <a href="">《隐私政策》</a>
      </div>
      <br />
      <a-space wrap>
        <a-button
          type="primary"
          style="border: 0; width: 320px; height: 35px"
          class="position"
          @click="click"
          >登录</a-button
        >
      </a-space>
      <div class="flex position" style="width: 150px; line-height: 50px">
        <p>还未注册?</p>
        <a href="">立刻注册</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 600px;
  height: 100vh;
  margin: 0;
  padding: 0;
}
* {
  margin: 0;
  padding: 0;
}
.border {
  width: 100px;
  height: 40px;
  text-align: center;
}
.border1 {
  width: 100px;
  height: 40px;
  text-align: center;
}

.border1:hover {
  color: black;
  border-bottom: 3px solid blue;
  font-weight: 600;
}
.border:hover {
  color: blue;
  border-bottom: 1px solid blue;
}
.position {
  margin-left: 670px;
}
.flex {
  display: flex;
  justify-content: space-around;
}
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
a {
  color: blue;
  text-decoration: none;
}
</style>
