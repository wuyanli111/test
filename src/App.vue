<script lang="ts" setup>
import { watch, ref } from "vue";
import {RouterView} from "vue-router";
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue';
const collapsed = ref<boolean>(false);
const selectedKeys = ref< string[]>(['1']);
const dl = ref(true);
const main = ref(false);
const username = ref("");
const password = ref("");
const justnow =ref(true)
const all =ref(false)
const soures =ref(false)
function click() {
  if (username.value ==''&& password.value =='') {
alert("账号或密码不能为空")
  }
  if(username.value=== 'admin'||password.value=='123456'){
    dl.value= false;
    main.value = true;
  }
  else{
    alert("请输入admin 123456")
  }
    
}
function click1() {
    justnow.value= true;
    all.value = false;
    soures.value=false
}
function click2() {
    justnow.value= false;
    all.value = true;
    soures.value=false
}
function click3() {
    justnow.value= false;
    all.value = false;
    soures.value=true
}
</script>

<template>
   <!-- <RouterView></RouterView> -->
  <div v-show="dl">
    <div class="block text-center">
      <el-carousel>
      <el-carousel-item >
      <img
      src="../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
      alt=""
      style="position: absolute"
      class="img"
    />
      </el-carousel-item>
      <el-carousel-item >
      <img
      src="../images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png"
      alt=""
      style="position: absolute"
      class="img"
    />
      </el-carousel-item>
      <el-carousel-item >
      <img
      src="../images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png"
      alt=""
      style="position: absolute"
      class="img"
    />
      </el-carousel-item>
    </el-carousel>
  </div>
    
    <div  style="position: absolute;margin-top: 200px;margin-left: 200px;">
    <div class="position" style="margin-left: 680px;font-size: 30px;font-weight: 600;">登录,即刻创造您的用户</div>
    <br />
    <div class="position flex" style="width: 320px;
    ">
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
    <div class="flex position" style="width: 320px; line-height: 50px;font-size: 15px;">
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
        <a-breadcrumb style="margin: 16px 0;color: black; border-bottom:1px black solid ;font-size: 20px;font-weight: 600;">
            代码仓库
        </a-breadcrumb>
        <div style="display: flex; width: 300px;" class="flex">
          <div class="border1" style="font-size: 16px;" @click="click1">最近访问</div>
          <div class="border1" style="font-size: 16px;" @click="click2">全部仓库</div>
          <div class="border1" style="font-size: 16px;" @click="click3">开源仓库</div>
        </div>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
       <div style="margin: auto;text-align: center;" v-show="justnow">
        <img src="../images/4.png" style="width: 100px;height: 100px;">
        <p>暂无数据</p>
        </div>
        <div style="margin: auto;text-align: center;line-height: 25px;"  v-show="all">
          <h2  style="font-size: 25px;font-weight: 600;">欢迎使用代码仓库</h2>
          <br>
          <p style="font-size: 14px; color: gray;">代码仓库用于托管于GIT或SVN管理的代码库。通过Review合并请求来审查代码变化。<br>版本发布可以用来标记，发布代码版本。</p>
          <div class="flex" style="width: 600px; margin: auto;margin-top: 50px;">
          <div>
          <img src="../images/1.svg">
          <p style="font-size: 16px;font-weight: 600;">创建代码仓库</p>
          <p style="font-size: 12px; color: gray;">浏览，编辑代码以及查看代码提交<br>记录</p>
           </div>
           <p style="margin-top: 60px;color: grey;">—></p>
           <div>
            <img src="../images/2.svg">
          <p style="font-size: 16px;font-weight: 600;">合并请求</p>
          <p style="font-size: 12px; color: gray;">发起合并请求并遂请协作者<br>Review变化内容</p>
          </div>
           <p style="margin-top: 60px;color: grey;">—></p>
           <div>
            <img src="../images/3.svg">
          <p style="font-size: 16px;font-weight: 600;">代码版本</p>
          <p style="font-size: 12px; color: gray;">发布，标记代码版本</p>
          </div>
         </div> 
         <br>
         <button style="color: white;background-color: black;width: 120px;height: 30px;border: 0;">创建代码仓库</button>
        </div>
        <div style="margin: auto;text-align: center;" v-show="soures">
          <img src="../images/4.png" style="width: 100px;height: 100px;">
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
[data-theme='dark'] .site-layout .site-layout-background {
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
a{
  color: blue;
  text-decoration: none;
}
</style>
