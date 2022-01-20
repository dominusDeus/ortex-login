import LoginController from "@/components/LoginController";
import SignUpController from "@/components/SignUpController";
import LoginForm from "@/components/login/LoginForm";
import SignUpModal from "@/components/login/SignUpModal";
import LoginAlternatives from "@/components/login/LoginAlternatives";
import ResetModal from "@/components/login/ResetModal"; 
import { useRouter } from "next/router";
import { useState, useEffect } from "react";



const Login = () => {
  const router = useRouter();
 
  let initialData = {
    email: "",
    password: ""
  }

  const [modalIsActive, setModalIsActive] = useState("");
  const [secondModal, setSecondModal] = useState("");
  const [signUpModal, setSignUpModal] = useState("");
  const [loginDetails, setLoginDetails] = useState(initialData);
  const [signUpDetails, setSignUpDetails] = useState(initialData);
  const [runUseEffect, setRunUseEffect] = useState(1);
  // const [signUpPassword, setSignUpPassword] = useState("");
  // const [repeatSignUpPassword, setrepeatSignUpPassword] = useState("");
  const [passwordClass, setPasswordClass] = useState("");

  
  const resetModal = () => {
    setModalIsActive("is-active");
  }

  const closeResetModal = () => {
    setModalIsActive("")
  }

  const openSecondModal = () => {
    closeResetModal();
    setSecondModal("is-active");
  }
  const closeSecondModal = () => {
    setSecondModal("")
  }

  const openSignUpModal = () => {
    debugger;
    setSignUpModal("is-active");
  }

  const closeSignUpModal = () => {
    setSignUpModal("")
  }

  // const handleSignUpPassInput = (e) => {
  //   debugger;
  //   setSignUpPassword(e.target.value);
  // }
  // const handleSignUpRepeatPassInput = (e) => {
  //   debugger;
  //   setrepeatSignUpPassword(e.target.value);
  // }
  
  // useEffect(()=> {
  //   debugger;
  //   if (signUpPassword === repeatSignUpPassword) {
  //     setPasswordClass("passwords-check-n");
  //   } else {
  //     setPasswordClass("passwords-check-n");
  //   }
  // },[signUpPassword, repeatSignUpPassword])
 
  
  const loginAction = async (e) => {
    e.preventDefault()
    debugger;
    let email = e.target.email.value;
    let password = e.target.password.value;
    setLoginDetails({email, password});
    LoginController(loginDetails);

    setRunUseEffect(runUseEffect+1)
    debugger;
  }
  useEffect( async() => {
    debugger;
    if (loginDetails.email !== "") {
      let hasAccount = await LoginController(loginDetails);
      if (hasAccount) {
        router.push('/login');
      } else {
        alert("You haven't signed up, please do so");
      }
    }
  }, [runUseEffect]);

  
  const [runSignUpUE, setRunSignUpUE] = useState(1);
  const signUp = (e) => {
    try {
      debugger;
      e.preventDefault()
      let email = e.target.suemail.value;
      let password = e.target.supassword.value;
      let repeatPassword = e.taget.surepeatpassword.value;

      if (password !== repeatPassword){
        debugger;
        alert("passwords should match");
      } else {
        debugger;
        setSignUpDetails({email, password, repeatPassword});
        setRunSignUpUE(runSignUpUE+1);
      }

    }
    catch (e) {
      console.log(e);
    }

  }

  useEffect( async() => {
    if (signUpDetails.email !== "") {
      SignUpController(signUpDetails);
    }
  }, [runSignUpUE]);
  
  
  const auth0Handler = () => {
    return alert('this is guguel (=')
  }

  return (
    <>
      <div className="login-n m-6">
        <LoginForm
          onSubmit={loginAction}
        />
        <LoginAlternatives
          onSignUp={openSignUpModal}
          onGoogleSignIn={auth0Handler}
          onResetPassword={resetModal}
        />
        <SignUpModal
          signUpclass= {signUpModal}
          onSubmit={signUp}
          onClose= {closeSignUpModal}
        />
        <ResetModal
          resetClass={modalIsActive}
          onSubmit={openSecondModal}
          onClose={closeResetModal}
          secondModalClass={secondModal}
          secondModalClose={closeSecondModal}
        />
      </div>
    </>
  )
}

export default Login;