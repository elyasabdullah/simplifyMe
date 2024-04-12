import { Container, Title, FormContainer, RightContainer, RightTextPartOne, 
  RightTextPartTwo, ResendButton} from './styles';
import Button from "src/components/Button";
import CodeInput from '../../components/codInput';
import Timer from '../../components/timer';
import { useCheckCodeMutation, useSendOTPMutation} from "src/data/auth";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const OTP = () => {
  const user = useSelector((state:any) => state.user);
  const [pinCode, setPinCode] = useState<string>("");
  const [timeRemaining, setTimeRemaining] = useState(120);
  const [resendCode, setResendCode] = useState<Boolean>(false);
  const [verifyOtp, {error, isSuccess}] = useCheckCodeMutation();
  const [sendOTP] = useSendOTPMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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