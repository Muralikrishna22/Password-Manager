import {Component} from 'react'

import {v4} from 'uuid'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    searchInput: '',
    websiteInput: '',
    nameInput: '',
    passwordInput: '',
    passwordsList: [],
    showPassword: false,
  }

  toggleCheckbox = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onDeletePasswordContainer = id => {
    const {passwordsList} = this.state

    const filteredPasswordsList = passwordsList.filter(
      eachPasswordContainer => eachPasswordContainer.id !== id,
    )

    this.setState({passwordsList: filteredPasswordsList})
  }

  onAddPassword = event => {
    event.preventDefault()

    const {websiteInput, nameInput, passwordInput, passwordsList} = this.state

    const newPassword = {
      id: v4(),
      website: websiteInput,
      name: nameInput,
      password: passwordInput,
    }

    this.setState({
      passwordsList: [...passwordsList, newPassword],
      websiteInput: '',
      nameInput: '',
      passwordInput: '',
    })
  }

  renderInputContainer = () => {
    const {websiteInput, nameInput, passwordInput} = this.state

    return (
      <div className="top-card-container">
        <form className="add-password-container" onSubmit={this.onAddPassword}>
          <h1 className="heading"> Add new password </h1>
          <div className="input-container">
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />
            </div>
            <div className="input-text-container">
              <input
                type="text"
                className="input"
                placeholder="Enter Website"
                onChange={this.onChangeWebsiteInput}
                value={websiteInput}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />
            </div>
            <div className="input-text-container">
              <input
                type="text"
                className="input"
                placeholder="Enter Username"
                onChange={this.onChangeNameInput}
                value={nameInput}
              />
            </div>
          </div>
          <div className="input-container">
            <div className="input-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                alt="password"
                className="input-icon"
              />
            </div>
            <div className="input-text-container">
              <input
                type="password"
                className="input"
                placeholder="Enter Password"
                onChange={this.onChangePasswordInput}
                value={passwordInput}
              />
            </div>
          </div>
          <div className="btn-container">
            <button type="submit" className="add-btn">
              Add
            </button>
          </div>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
          alt="password manager"
          className="password-manager-lg-img"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
          alt="password manager"
          className="password-manager-sm-img"
        />
      </div>
    )
  }

  renderYourPasswordsContainer = () => {
    const {passwordsList, searchInput, showPassword} = this.state

    const searchedPasswords = passwordsList.filter(eachPassword =>
      eachPassword.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bottom-card-container">
        <div className="your-passwords-header">
          <div className="your-passwords">
            <h1 className="heading">Your Passwords</h1>
            <p className="no-of-passwords">{passwordsList.length}</p>
          </div>
          <div className="search-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-icon"
              />
            </div>
            <div className="search-input-container">
              <input
                type="search"
                className="input"
                placeholder="search"
                onChange={this.onSearchPassword}
                value={searchInput}
              />
            </div>
          </div>
        </div>
        <hr className="separator" />
        <div className="show-passwords-container">
          <input
            type="checkbox"
            id="showPassword"
            className="checkbox-input"
            onClick={this.toggleCheckbox}
          />
          <label htmlFor="showPassword" className="checkbox-label">
            Show passwords
          </label>
        </div>
        <ul className="passwords-container">
          {searchedPasswords.length === 0 && (
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-img"
              />
              <p>No Passwords</p>
            </div>
          )}
          {searchedPasswords.map(eachPassword => (
            <PasswordItem
              passwordDetails={eachPassword}
              key={eachPassword.id}
              onDeletePasswordContainer={this.onDeletePasswordContainer}
              showPassword={showPassword}
            />
          ))}
        </ul>
      </div>
    )
  }

  onChangeWebsiteInput = event => {
    this.setState({websiteInput: event.target.value})
  }

  onChangeNameInput = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSearchPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        {this.renderInputContainer()}
        {this.renderYourPasswordsContainer()}
      </div>
    )
  }
}

export default PasswordManager
