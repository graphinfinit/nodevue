<template>

<div class="right_menu">

<h3>Добавить сотрудника</h3>
<form class="post_employees" @submit.prevent="onClick">
	<input type="number" min=9 id="age" v-model="age" placeholder="Возраст">
  <p>
    <input type="number" min=40000 id="salary" v-model="salary" placeholder="Зарплата">
   </p>
   
    <p>
    <input type="text" id="name" v-model="name" placeholder="Имя">
   </p>
	<p>
    <input type="submit" value="Добавить сотрудника">  
	</p>
	</form>
	
<h3>Информация</h3>

<ul>
		<li v-for="(answer, index) in answere" :key="index">{{answer}}</li>
</ul>

</div>


	
</template>



<script>
import axios from 'axios';

export default{
name:'post_employees', 
data() {
    return {
    age: null,
	salary: null,
    name: null,
	answere:null}
		},	
		
methods: {
	onClick() {
		let age = this.age;
		let salary = this.salary;
		let name = this.name;
		this.age = null;
		this.salary = null;
		this.name = null;
		this.answere = null;
		axios.post('http://127.0.0.1:3000/employee', {data:{"age":age,"salary":salary,"name":name}}).then(response =>this.answere = response.data)}
		}
}


</script>



<style scoped>
.right_menu{
width:50%;
height:800px;
overflow:auto;
}

</style>


