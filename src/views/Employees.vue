<template>
  <div>
    <Heading heading="Employee details"/>
    <div class="add-employee">
      <h2>Add Employee</h2>
      <div class="input-container">
        <label for="id">ID:</label>
        <input type="text" id="id" v-model="newEmployee.id" />
        <!-- <span class="error" v-if="uniqueId">*ID Already taken</span> -->
      </div>
      <div class="input-container">
        <label for="firstName">First Name:</label>
        <input type="text" id="firstName" v-model="newEmployee.firstName" />
      </div>
      <div class="input-container">
        <label for="lastName">Last Name:</label>
        <input type="text" id="lastName" v-model="newEmployee.lastName" />
      </div>
      <div class="input-container">
        <label for="email">Email:</label>
        <input type="text" id="email" v-model="newEmployee.email" />
      </div>
      <button @click="addEmployee()">Add</button>
    </div>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in employees" :key="employee.id">
            <td>{{ employee.id }}</td>
            <td>{{ employee.firstName }}</td>
            <td>{{ employee.lastName }}</td>
            <td>{{ employee.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { ref, reactive, onMounted } from "vue";
import Heading from "../components/Heading.vue";
const loading = ref(true);
const uniqueId = ref(false);
const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
};
let newEmployee = reactive({ ...initialState });

async function addEmployee() {
  console.log(newEmployee);
  await axios
    .post(" http://localhost:3000/employees", newEmployee)
    .then((response) => {
      Object.assign(newEmployee, {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      });
      fetchEmployees();
    })
    .catch((error) => {
      console.error(error);
    });
}

let employees = reactive([]);

async function fetchEmployees() {
  console.log("function called");
  await axios
    .get(" http://localhost:3000/employees")
    .then((response) => {
      employees = response.data;
      console.log(employees);
      loading.value = false;
    })
    .catch((error) => {
      console.error(error);
    });
}

onMounted(() => {
  fetchEmployees();
});
</script>

<style scoped>
h1 {
  color: red;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.add-employee {
  margin-bottom: 20px;
}

.add-employee h2 {
  margin-bottom: 10px;
}

.input-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-container label {
  margin-right: 10px;
}
.input-container input {
  padding: 5px;
}

.error {
  color: red;
  font-weight: 500;
}
</style>
