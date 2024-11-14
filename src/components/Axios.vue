<template>
  <div class="content">
    <h1>Llista d'Usuaris</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        <p><strong>Nom:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Telèfon:</strong> {{ user.phone }}</p>
      </li>
    </ul>
    <div v-if="loading">Carregant...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      loading: true,
      error: null,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        this.users = response.data.users; // La resposta inclou un camp `users`
      } catch (err) {
        this.error = 'Error en carregar els usuaris: ' + err.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
.content{
  padding-top: 30px;
}
</style>