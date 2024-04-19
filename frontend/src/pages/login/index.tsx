import Button from "src/components/Button"
import TextInput from "src/components/textInput"
import { ParentContainer, Conatainer, SignUpOption } from "./styles"
import { Link, useNavigate } from "react-router-dom";
import useLogin from "src/hooks/useLogin";
import { useLoginMutation } from "src/data/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "src/state/user";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, {error, isLoading, isError, isSuccess, data}] = useLoginMutation();
  
  const {values, onSubmit, getError, handleChange, errors} = useLogin({
    onSubmitForm: (data) => login({...data}), 
    initialState: {
      email: "",
      pwd: ""
    }});

    const [errorMsg, setError] = useState('');

    useEffect(() => {
      if (isSuccess && data) {
          dispatch(setUser({...data, isAuthenticated: true}));
          localStorage.setItem('user', JSON.stringify({
            username: data.username,
            email: data.email,
            _id: data._id
          }));
          Cookies.set("accessToken", data.accessToken);
          navigate('/')
      }else if(isError) {
        let err: any = error
        if(err?.status == 500) {
          setError('Internal Server Error')
        }else {
          setError('User Not Found');
        }
      }
    }, [error, isSuccess, data])
  
  return (
    <ParentContainer>
      <Conatainer>
      <TextInput 
          id="email" 
          label="Email"
          onChange={(value: string) => handleChange(value, 'email')}
          value={values?.email}
          error={getError('email')}
          name="email"
          placeholder=""
        />
        <TextInput 
          id="password" 
          label="Password"
          onChange={(value: string) => handleChange(value, 'pwd')}
          value={values?.pwd}
          error={getError('pwd')}
          name="password"
          placeholder=""
          type="password"
        />
        {errorMsg && <div style={{color:'red', padding: '0.5rem 0'}}>{errorMsg}</div>}
        <Button onClick={onSubmit} text="Login" />
        <SignUpOption>
          Don't have an account 
          <Link to={'/signup'} style={{
            textDecoration:'underline',
            color: '#139ae1'
          }}> sign Up</Link>
        </SignUpOption>
      </Conatainer>
    </ParentContainer>
  )
}

export default Login