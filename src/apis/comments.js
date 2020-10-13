import { apiHelper } from '../utils/helpers.js'

export default {
  create(commentObj) {
    return apiHelper.post('/comments', commentObj)
  },
  delete({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}
