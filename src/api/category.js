import axios from '.';

export const getCategoryApi = () => axios.get('/category')

export const getDrinkApi = params => axios.get('/drink', {
  params,
})