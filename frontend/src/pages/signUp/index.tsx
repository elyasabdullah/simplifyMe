import { Link } from "react-router-dom"
import { 
  ParentContainer, 
  Conatainer,
  GoogleButton,
  GoogleButtonCon,
  LoginOption
} from "./styles";
import Button from "src/components/Button";
import TextInput from "src/components/textInput";
import useSignUp from "src/hooks/useSignUp";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { setUser } from "src/state/user";
import { useRegisterMutation, useSendOTPMutation } from "src/data/auth";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state:RootState) => state.user);

  const [register, {error, isLoading, isSuccess, data}] = useRegisterMutation()
  const [sendOTP] = useSendOTPMutation();

  const initialState = {username: '', password: '', email: ''}

  const {values, onSubmit, handleChange, getError} = useSignUp({
    onSumitForm: (data) => register({...data}),
    initialState});
  

  const [errorMsg, setError] = useState('');

  useEffect(() => {
    if (error) {
      setError((error as any)?.message as string);
    }
    if (isSuccess && data) {
        setError('');
        dispatch(setUser(data));
        sendOTP({email: user.email})
        localStorage.setItem('user', JSON.stringify({
          username: data.username,
          email: data.email,
          _id: data._id
        }))
        navigate('/otp')
    }
  }, [error, isSuccess, data])
  return (
    <ParentContainer>
      <Conatainer>
        { /*<GoogleButtonCon>
          <GoogleButton>
            Continue With Google
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 18 18" className="u2emSEy" aria-hidden="true"><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z"></path><path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"></path><path fill="#FBBC05" d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z"></path><path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z"></path><path d="M0 0h18v18H0z"></path></g></svg>
          </GoogleButton>
        </GoogleButtonCon> */ }
        <TextInput 
          id="username" 
          label="Username"
          onChange={handleChange}
          value={values?.username}
          name="username"
          placeholder=""
          error={getError("username")}
        />
        <TextInput 
          id="email" 
          label="Email"
          onChange={handleChange}
          value={values?.email}
          name="email"
          placeholder=""
          error={getError("email")}
        />
        <TextInput 
          id="password" 
          label="Password"
          onChange={handleChange}
          value={values?.password}
          name="password"
          placeholder=""
          error={getError("password")}
          type="password"
        />
        {(error as any)?.data == "Conflict" && <span
          style={{padding:'5px 0 10px', display:'block', color: 'red'}}
        >The user already exists.</span>}
        <Button 
          text="Sign Up"
          onClick={onSubmit} 
        />
        <LoginOption>
          Already have an acount <Link style={{
            textDecoration:'underline', opacity:'1',
            color: '#139ae1'
            }} to={'/login'}>Login</Link>
        </LoginOption>
      </Conatainer>
      
    </ParentContainer>
  )
}

export default SignUp