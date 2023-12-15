import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://rocketmovies-api-0s38.onrender.com'
})
