import axios from 'axios'
import Vue from 'vue'


const instance = axios.create({
  baseURL: 'https://api-hmugo-web.itheima.net/api/public/v1',
  timeout: 5000
});

Vue.prototype.$http = instance