<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/Calculadora">Calculadora</router-link></li>
      <li><router-link to="/Fetch">Fetch</router-link></li>
      <li><router-link to="/Axios">Axios</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
  color: white;
  padding: 13px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  font-size: 16px;
  margin-right: 30px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>