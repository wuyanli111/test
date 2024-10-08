<script lang="ts" setup>
import { watch, ref } from "vue";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);
const dl = ref(true);
const main = ref(false);
const username = ref("");
const password = ref("");
function click() {
    dl.value= false;
    main.value = true;
    console.log(username.value);
    console.log(password.value);
}
</script>

<template>
  <div v-show="dl">
    <img
      src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
      alt=""
      style="position: absolute"
      class="img"
    />
    <div>
    <h2 class="position">登录,即刻创造您的用户</h2>
    <br />
    <div class="position flex" style="width: 300px;
    ">
      <div class="border">手机登录</div>
      <div class="border">账号登录</div>
    </div>

    <a-space direction="vertical" class="position">
      <a-input
        v-model:value="username"
        placeholder="账号"
        style="width: 300px; height: 50px"
      />
      <a-input
        v-model:value.lazy="password"
        autofocus
        placeholder="密码"
        style="width: 300px; height: 50px"
      />
    </a-space>
    <br />
    <div class="flex position" style="width: 300px; line-height: 50px">
      <input type="radio" />
      <p>我已阅读并同意</p>
      <a href="">服务协议</a>
      <p>和</p>
      <a href="">隐私政策</a>
    </div>
    <br />
    <a-space wrap>
      <a-button
        type="primary"
        style="border: 0; width: 300px; height: 35px"
        class="position"
        @click="click"
        >登录</a-button
      >
    </a-space>
    <div class="flex position" style="width: 150px; line-height: 50px">
      <p>还未注册?</p>
      <a href="">立刻注册</a>
    </div></div>
  </div>
  <div v-show="main">
    <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>工作台</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>项目</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>AI</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>事项</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>代码</span>
        </a-menu-item>
        <a-menu-item key="10">
          <file-outlined />
          <span>制品</span>
        </a-menu-item>
        <a-menu-item key="11">
          <file-outlined />
          <span>洞察</span>
        </a-menu-item>
        <a-menu-item key="12">
          <file-outlined />
          <span>知识</span>
        </a-menu-item>
        <a-menu-item key="13">
          <file-outlined />
          <span>自动化</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0;color: black; border-bottom:1px black solid ;">
            代码仓库
        </a-breadcrumb>
        <div></div>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
       <div style="margin: auto;text-align: center;">
          <img src="../images/1.svg">
          <p>暂无数据</p>
        </div>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
      </a-layout-footer>
    </a-layout>
  </a-layout>
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
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
