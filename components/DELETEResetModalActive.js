import  {useState} from 'react';



const ResetModalActive = () => {

  return(
    <>
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
      
    </>
  )
}

export default ResetModalActive;