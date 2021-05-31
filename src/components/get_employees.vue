<template>
  <div class="get_employees">
	<h3>Сотрудники компании</h3>
  <form class="get-employees" @submit.prevent="onSubmit">
	<input type="number" min=9 id="min_age" v-model="min_age" placeholder="Мин. возраст">
	<input type="number" min=9 id="max_age" v-model="max_age" placeholder="Мак. возраст">
  <p>
    <label for="sort">Отсортировать по: </label>
    <select id="sort" v-model="sort">
      <option>employee_name</option>
    </select>
   </p>
	<p>
    <input type="submit" value="Получить список сотрудников">  
	</p>
	</form>
	
	<h3>Данные</h3>
	<ul>
		<li v-for="(employee, index) in employees" :key="index">{{employee}}</li>
	</ul>
	
  </div>
</template>

<script>
import axios from 'axios';

export default{
name:'get_employees', 
data() {
    return {
    min_age: null,
	max_age: null,
    sort: null,
	employees:null}
		},	
		
methods: {
	onSubmit() {
		let min_age = this.min_age;
		let max_age = this.max_age;
		let sort = this.sort;
		this.min_age = null;
		this.max_age = null;
		this.sort = null;
		axios.get('http://127.0.0.1:3000/employee?sort='+ sort +'&filter='+ min_age + ':'+ max_age).then(response =>this.employees = response.data)}
		}
}
</script>

<style scoped>
.get_employees{
width:50%;
height:800px;
overflow:auto;
float:left;
}

</style>
