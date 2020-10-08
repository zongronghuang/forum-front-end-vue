import { apiHelper } from '../utils/helpers.js'

const getToken = () => localStorage.getItem('token')

export default {
  create(commentObj) {
    return apiHelper.post('/comments', commentObj, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
