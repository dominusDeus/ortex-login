const LoginAlternatives = ({onSignUp, onGoogleSignIn, onResetPassword}) => {
  return (
    <>
      <div className="field">
        <p className="control has-text-centered main-login-n">
          <button className="button is-light" onClick={onSignUp}> 
            don't have an account yet? Sign up
          </button>
        </p>
      </div>  
      <div className="field mt-2 pb-6 ">
        <p className="control has-text-centered main-login-n">
          <button
            className="button is-light"
            onClick={onGoogleSignIn}
          >
            Sign In with google
          </button>
        </p>
      </div>
      <div className='field has-text-centered pb-6'>
        <p className='forgot-password main-login-n'>
          <button
            className='button is-text has-text-white'
            onClick={onResetPassword}
          >
            forgot your password? Reset it here
          </button>
        </p>
      </div>  
    </>
  )
}

export default LoginAlternatives;