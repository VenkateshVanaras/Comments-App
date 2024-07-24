// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachComment, onLikeChanged, onDeleteButton} = props
  const {name, comment, date, back, id, isLiked} = eachComment
  const like = isLiked ? 'like' : ''
  const something = formatDistanceToNow(date)

  const likeImgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const getLikedButton = () => {
    onLikeChanged(id)
  }

  const getOnDeleteButton = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-item">
      <div className="comment-headers">
        <div className="comment-headers">
          <p className={` ${back} comment-photo`}>{name[0]}</p>
        </div>
        <div className="comment-headers">
          <p className="commenter-name"> {name}</p>
          <p className="commented-time">{something} ago </p>
        </div>
      </div>
      <p className="description"> {comment}</p>
      <div className="like-delete-container">
        <button
          type="button"
          onClick={getLikedButton}
          className="like-container"
        >
          <img className="like-image" alt="like" src={likeImgUrl} />
          <p className={`${like} like-text`}>Like</p>
        </button>
        <button
          className="delete-button-container"
          onClick={getOnDeleteButton}
          type="button"
          data-testid="delete"
        >
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr className="horizontal-line" />
    </li>
  )
}

export default CommentItem
