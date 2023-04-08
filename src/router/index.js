import { createRouter, createWebHistory } from 'vue-router'
import vHome from '../views/Home.vue'
import Device from '../views/JetDevice.vue'
import Product from '../views/JetProduct.vue'
import Network from '../views/JetNetwork.vue'
import Protocol from '../views/JetProtocol.vue'
import Scene from '../views/JetScene.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome
  },
  {
    path: '/device/device',
    name: 'device',
    component: Device
  },
  {
    path: '/device/product',
    name: 'product',
    component: Product
  },
  {
    path: '/operation/network',
    name: 'network',
    component: Network
  },
  {
    path: '/operation/protocol',
    name: 'protocol',
    component: Protocol
  },
  {
    path: '/rule/scene',
    name: 'scene',
    component: Scene
  }
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
