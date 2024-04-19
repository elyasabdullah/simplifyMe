import { useFormik } from "formik";
import * as Yup from 'yup';
import { ActivityData } from "src/types";

interface Iprops {
  onSubmitForm: (data: ActivityData, {resetForm}: any) => void,
  initialState: ActivityData | undefined
}

const useCreateNewActivity = ({onSubmitForm, initialState}:Iprops) =>{ 
  const activityScheme = Yup.object({
    description:Yup.string().required("You need to add the activity name or description").max(150, 'Max characters is 150 character'),
    time: Yup.string(),
    date: Yup.string()
  })

  const formik = useFormik<Partial<ActivityData>>({
    validationSchema: activityScheme,
    enableReinitialize: true,
    initialValues: initialState ?? {},
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      onSubmitForm(values as ActivityData, resetForm);
    }
  });

  const getError = (key: keyof ActivityData) => {
    return formik.errors?.[key] as string;
  };

  const handleChange = async (value: string | null, key: string) => {
    await formik.setFieldValue(key!, value)
  }

  const onSubmit = () => {
    formik.handleSubmit();
  }

  return {
    values: formik.values,
    getError,
    handleChange,
    resetForm: formik.resetForm,
    onSubmit
  }
}

export default useCreateNewActivity