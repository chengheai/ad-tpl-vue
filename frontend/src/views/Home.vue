<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>{{ ajax }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  data() {
    return {
      ajax: {}
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    sendAjax() {
      axios({
        method: 'get',
        url: 'http://localhost:30000/api/zoo/cat'
      }).then(res => {
        this.ajax = res.data;
      });
    }
  },
  mounted(){
    this.sendAjax()
  }
};
</script>
