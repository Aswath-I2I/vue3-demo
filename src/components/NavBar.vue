<template>
  <div class="header">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/employees">Employee Details</router-link>
  </div>
</template>


<style>
.header {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-around;
}

.header a {
  color: white;
  text-decoration: none;
}

.router-link-exact-active {
  font-weight: bolder;
  /* color: red; */
}
</style>
