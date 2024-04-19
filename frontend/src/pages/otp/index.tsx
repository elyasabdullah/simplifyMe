import { Container, Title, FormContainer, RightContainer, RightTextPartOne, 
  RightTextPartTwo, ResendButton} from './styles';
import Button from "src/components/Button";
import CodeInput from '../../components/codInput';
import Timer from '../../components/timer';
import { useCheckCodeMutation, useSendOTPMutation} from "src/data/auth";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/state/store';


const OTP = () => {
  const user = useSelector((state:RootState) => state.user);
  const [pinCode, setPinCode] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [resendCode, setResendCode] = useState<Boolean>(false);
  const [verifyOtp, {error, isSuccess, isError}] = useCheckCodeMutation();
  const [sendOTP, {error: otpError, isError: isErrorOtp, isSuccess: isSuccessOtp}] = useSendOTPMutation();
  const navigate = useNavigate();

  const onChangePinCode = (pin: string) => {
    setPinCode(pin);
  };
  
  useEffect(() =>{
    sendOTP({email: user.email})
  }, [resendCode]);

  useEffect(() => {
    if (error) {
      setPinCode("")
    }
    if (isSuccess) {
      setPinCode("");
      navigate('/login');
    }
  }, [error, isSuccess]);

  const [errorMsg, setError] = useState('');

  useEffect(() => {
    
    if(isErrorOtp) {
      let err: any = otpError;
      if(err?.status == 500) {
        setError(`Enternal Server Error`)
      } else {
        setError('Use Another mail')
      }
    }
    if(isError) {
      let err:any = error
      if(err?.status == 400) {
        setError('Wrong Verification Code')
      }else {
        setError('Enternal Server Error')
      }
    }
  }, [isError, isErrorOtp]);

  const handleResendCode = () => {
    setResendCode(!resendCode);
    setTimeRemaining(120);
  }
  
  return (
    <Container>
      <Title>
        Enter the 4-digit code sent to your email
      </Title>
      <FormContainer>
        <div style={{ width: '100%' }}>
          <CodeInput
            value={pinCode}
            onChangePinCode={(pin: string) => {
              onChangePinCode(pin)
            }}
          />
        </div>
      </FormContainer>
      {errorMsg && <div style={{color:'red', padding: '0.5rem 0'}}>{errorMsg}</div>}
      <Button
        text="Verify"
        onClick={() => verifyOtp({ otp: pinCode,  email: user.email})}
      />
      
      <RightContainer>
        <RightTextPartOne>
          Don't receive code ?
        </RightTextPartOne>
        <RightTextPartTwo>
          <ResendButton
            onClick={handleResendCode}
          >Resend the code</ResendButton>
          <Timer
            timeRemaining = {timeRemaining} 
            setTimeRemaining = {setTimeRemaining}
          />
        </RightTextPartTwo>
      </RightContainer>
    </Container>
  )
}

export default OTP;