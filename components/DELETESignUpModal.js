// import { useState, useEffect } from "react";

const SignUpModal = () => {
  // const [password, setPassword] = useState("");
  // const [repeatPassword, setRepeatPassword] = useState("");

  // let passwordsDontMatch = passwordClass || "";

  // const savePassword = (e) => {
  //   setPassword(e.target.value);
  // }

  // const saveRepeatPassword = (e) => {
  //   console.log(e);
  //   setRepeatPassword(e.target.value)
  // }

  // useEffect(()=>{
  //   if (password === repeatPassword) {
  //     passwordsDontMatch = "passwords-check-n"
  //   }
  // },[password, repeatPassword])
  // if (e.target.value ===  {
  //   const passwordsDontMatch = "passwords-check-n"
  // }
  return (
    <>

      <div className="field signup-card-n">
        <label className="label">Email</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-danger" type="email" placeholder="Type your email" name="suemail"/>
          <span className="icon is-small is-left">
            <i className="fas fa-envelope"></i>
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
      <div className="field">
        <p className="control has-icons-left signup-n">
          <input className="input" type="password" placeholder="Provide a password" name = "supass" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left label signup-n">
          Repeat your password
          <input className="input" type="password" placeholder="Please repeat your password" name="surepeatpass"/>
          <span className="icon is-small is-left">
            <i className="fas fa-lock"></i>
          </span>
        </p>
        {/* <p className={passwordsDontMatch}>Passwords should be equal</p> */}
      </div>
    </>
  )
}

export default SignUpModal;