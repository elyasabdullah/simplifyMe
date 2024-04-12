import * as Yup from 'yup';
import { useFormik } from 'formik';
import { LoginRequest } from 'src/types';

type props = {
  onSubmitForm: (data: LoginRequest) => void,
  initialState: LoginRequest | undefined
}
// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const useLogin = ({onSubmitForm, initialState}: props) => {

  const loginScheme = Yup.object({
    pwd: Yup.string().required("your password is required"),
    // .matches(passwordRules, {message: "Please create a stronger password"}),
    email: Yup.string().email("please enter a valid email").required("Email is required") 
  })

  const formik = useFormik<Partial<LoginRequest>>({
    validationSchema: loginScheme,
    enableReinitialize: true,
    initialValues: initialState || {},
    validateOnChange:false,
    validateOnBlur: false,
    validateOnMount: false,
    onSubmit: (values) => {
      onSubmitForm(values as LoginRequest)
    }
  })

  const getError = (key: keyof LoginRequest) => {
    return formik.errors?.[key] as string;
  }

  const handleChange = async (value: string | null, key: string) => {
    await formik.setFieldValue(key!, value)
  }

  const onSubmit = () => {
    formik.handleSubmit();
  }
  
  return {
    values: formik.values,
    onSubmit,
    getError,
    handleChange,
    errors: formik.errors,
  }
}

export default useLogin