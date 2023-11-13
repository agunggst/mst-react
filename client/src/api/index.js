import axios from "axios"

export const fetchMovies = async (search, page, cb) => {
  // return axios.get(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=332a4589`)
  try {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&page=${page}&apikey=332a4589`)
    cb({status: 'success', data: data.Search, totalData: Number(data.totalResults)})
  } catch (error) {
    cb({status: 'error', data: error, totalData: 0})
  }
}