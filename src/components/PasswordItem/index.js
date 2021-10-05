import './index.css'

const PasswordItem = props => {
  const {passwordDetails, showPassword} = props
  const {id, website, name, password} = passwordDetails

  const initial = website.length > 0 ? website[0].toUpperCase() : ''

  const onClickDeleteBtn = () => {
    const {onDeletePasswordContainer} = props
    onDeletePasswordContainer(id)
  }
  console.log(showPassword)

  const togglePassword = showPassword ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars-img"
    />
  )

  return (
    <li className="password-container">
      <div className="profile-container">
        <div className="profile">
          <h1>{initial}</h1>
        </div>
        <div className="details-container">
          <p className="website">{website}</p>
          <p className="name">{name}</p>
          {togglePassword}
        </div>
      </div>
      <button
        type="button"
        className="delete-btn"
        testid="delete"
        onClick={onClickDeleteBtn}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordItem
