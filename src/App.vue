<template>


  <div class ="top"><img alt="Vue logo" src="./assets/logo.png"></div>
  
  
  <get_employees />
  
  <post_employee />

</template>

<script>
import get_employees from './components/get_employees.vue'

import post_employee from './components/post_employee.vue'


export default {
  name: 'App',
  components:{
  get_employees,
  post_employee}
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}

.top {
	background-color: #333;
    overflow: hidden;
}


html, body {
  margin: 0;
  padding: 0;
}
</style>
