<template>
  <div id="app">
    <el-container>
      <el-header style="background-color: #409EFF; color: #fff; text-align: center;">
        <h1>物联网平台</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="handleSelect">
            <el-menu-item index = "/">
              <el-icon><House /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-sub-menu index="device">
              <template #title>
                <el-icon><Odometer /></el-icon>
                <span>设备管理</span>
              </template>
              <el-menu-item index="/device/product">
                <el-icon><Box /></el-icon>
                <span>产品</span>
              </el-menu-item>
              <el-menu-item index="/device/device">
                <el-icon><Cpu /></el-icon>
                <span>设备</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="operation">
              <template #title>
                <el-icon><Aim /></el-icon>
                <span>运维管理</span>
              </template>
              <el-menu-item index="/operation/network">
                <el-icon><Box /></el-icon>
                <span>网络组件</span>
              </el-menu-item>
              <el-menu-item index="/operation/protocol">
                <el-icon><Connection /></el-icon>
                <span>协议管理</span>
              </el-menu-item>
            </el-sub-menu>
            <el-sub-menu>
              <template #title>
                <el-icon><Setting /></el-icon>
                <span>规则引擎</span>
              </template>
              <el-menu-item index="/rule/scene">
                <el-icon><Magnet /></el-icon>
                <span>场景联动</span>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
export default {
  name: 'App',
  methods: {
    handleSelect(key, keyPath) {
      console.log(keyPath)
      this.$router.push(key)
    }
  }
}
</script>

<style>

html, body, #app, .el-container {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.el-menu-vertical-demo {
  width: 200px;
}

.el-container {
  height: 100%;
}

.el-header {
  height: 60px;
}
.el-main {
  background-color: #f0f2f5;
}

</style>
