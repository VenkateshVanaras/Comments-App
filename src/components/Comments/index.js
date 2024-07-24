import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    name: '',
    comment: '',
    commentList: [],
  }

  onLikeChanged = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  onAddCommit = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const randomNum1 = Math.floor(Math.random() * 10)
    const randomNum = randomNum1 % 7
    const back = initialContainerBackgroundClassNames[randomNum]

    const oneObj = {
      id: uuidv4(),
      name,
      date: new Date(),
      comment,
      back,
      isLiked: false,
    }
    if (name !== '') {
      this.setState(prevState => ({
        commentList: [...prevState.commentList, oneObj],
        name: '',
        comment: '',
      }))
    }
  }

  onDeleteButton = id => {
    const {commentList} = this.state
    const newArrayList = commentList.filter(
      eachComment => eachComment.id !== id,
    )

    this.setState({commentList: newArrayList})
  }

  render() {
    const {commentList, name, comment} = this.state

    return (
      <div className="app-container">
        <h1>Comments</h1>
        <div className="input-image-container">
          <div className="inputs-container">
            <form>
              <p>Say something about 4.0 Technologies</p>
              <input
                type="text"
                value={name}
                onChange={this.onNameChange}
                placeholder="Your Name"
                className="input-name"
              />
              <br />

              <textarea
                onChange={this.onCommentChange}
                value={comment}
                placeholder="Your Comment"
                className="input-comment"
              />
              <br />
              <button
                type="submit"
                onClick={this.onAddCommit}
                className="button"
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="comments-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>

        <hr className="horizontal-line" />
        <div className="comments-count">
          <p className="comments-length">{commentList.length}</p>
          <p> Comments</p>
        </div>
        <ul className="un-order-list">
          {commentList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              onLikeChanged={this.onLikeChanged}
              onDeleteButton={this.onDeleteButton}
              eachComment={eachComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
