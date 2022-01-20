

const LoginForm = ({onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="mb-3">
          <div className="has-text-centered logintext-n turquoise-text p-4">LOGIN</div> 
          <div className="field">
            <p className="control has-icons-left has-icons-right main-login-n">
              <input className="input" name="email" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
          <div className="field pb-3">
            <p className="control has-icons-left main-login-n">
              <input className="input" name="password" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-text-centered main-login-n">
              <button
                className="button is-light" type='submit'>
                Login
              </button>
            </p>
          </div>
        </form>
  )
}

export default LoginForm;