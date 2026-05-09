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
      movies: [
        { id: 1, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Sci-Fi', personalRating: 9, watched: true, notes: 'Mindbending!' },
        { id: 2, title: 'Interstellar', director: 'Christopher Nolan', releaseYear: 2014, genre: 'Sci-Fi', personalRating: 10, watched: true, notes: 'Absolute masterpiece' },
        { id: 3, title: 'The Dark Knight', director: 'Christopher Nolan', releaseYear: 2008, genre: 'Action', personalRating: 10, watched: true, notes: 'Best superhero movie ever' }
      ]
    }
  }
}
</script>
