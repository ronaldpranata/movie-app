/**
 * Mocking client-server processing
 */
import _movies from './movies.json'

const TIMEOUT = 100

export default {
  getMovies: (cb, timeout) => setTimeout(() => cb(_movies), timeout || TIMEOUT),
}
