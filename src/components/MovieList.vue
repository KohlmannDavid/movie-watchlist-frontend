<template>
  <div>
    <h1>My Movie Watchlist</h1>

    <h2>Add a Movie</h2>
    <div>
      <input v-model="newMovie.title" placeholder="Title" />
      <input v-model="newMovie.director" placeholder="Director" />
      <input v-model="newMovie.releaseYear" placeholder="Release Year" type="number" />
      <input v-model="newMovie.genre" placeholder="Genre" />
      <input v-model="newMovie.personalRating" placeholder="Rating (1-10)" type="number" />
      <input v-model="newMovie.notes" placeholder="Notes" />
      <label>
        <input v-model="newMovie.watched" type="checkbox" /> Watched
      </label>
      <button @click="addMovie">Add Movie</button>
    </div>

    <hr>

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
      movies: [],
      newMovie: {
        title: '',
        director: '',
        releaseYear: null,
        genre: '',
        personalRating: null,
        watched: false,
        notes: ''
      }
    }
  },
  async mounted() {
    const response = await fetch('https://movie-watchlist-s0io.onrender.com/movies')
    this.movies = await response.json()
  },
  methods: {
    async addMovie() {
      const response = await fetch('https://movie-watchlist-s0io.onrender.com/movies', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.newMovie)
      })
      const saved = await response.json()
      this.movies.push(saved)
      this.newMovie = { title: '', director: '', releaseYear: null, genre: '', personalRating: null, watched: false, notes: '' }
    }
  }
}
</script>

