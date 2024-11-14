<template>
  <div class = "content">
    <h1>Comentaris</h1>
    <ul v-if="comments.length">
      <li v-for="comment in comments" :key="comment.id">
        <strong>{{ comment.name }}</strong> ({{ comment.email }}): {{ comment.body }}
      </li>
    </ul>
    <p v-else>Cargant comentaris...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
    };
  },
  mounted() {
    this.fetchComments();
  },
  methods: {
    async fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        if (!response.ok) {
          throw new Error('Error al carregar els comentaris');
        }
        const data = await response.json();
        this.comments = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.content{
  padding-top: 30px;
}
</style>