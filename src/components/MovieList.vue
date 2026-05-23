<template>
  <div>
    <h1>My Movie Watchlist</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h3>{{ movie.title }} ({{ movie.releaseYear }})</h3>
      <p>Director: {{ movie.director }}</p>
      <p>Genre: {{ movie.genre }}</p>
      <p>Rating: {{ movie.personalRating }}/10</p>
      <p>Watched: {{ movie.watched ? 'Yes' : 'No' }}</p>
      <p>Notes: {{ movie.notes }}</p>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieList',
  data() {
    return {
      movies: []
    }
  },
  async mounted() {
    const response = await fetch('https://movie-watchlist-s0io.onrender.com/movies')
    this.movies = await response.json()
  }
}
</script>

