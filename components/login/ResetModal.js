const ResetModal = ({resetClass, onSubmit, onClose, secondModalClass, secondModalClose}) => {
  return (
    <> 
      <div className={`modal ${resetClass}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title main-login-n">Reset your password</p>
            <button className="delete" onClick={onClose} aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <h2>Please enter your email address and we’ll send you a recovery link. </h2>
            <form>
              <div className="field">
                <label className="label pt-4">Email</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-danger" type="email" />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
                {/* <p className="help is-danger">This email is invalid</p> */}
              </div>
            </form>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={onSubmit}>Submit</button>
            <button className="button" onClick={onClose}>Cancel</button>
          </footer>
        </div>
      </div>
      <div className={`modal ${secondModalClass}`}>
      <div className="modal-background"></div>
      <div className="modal-content">
        <div>We sent you an email to retrieve your password. Don't forget to check your spam folder!</div>
      </div>
      <button className="modal-close is-large" onClick={secondModalClose} aria-label="close"></button>
    </div>  
    </>
  )
}

export default ResetModal;
