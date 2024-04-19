import { useFormik } from "formik";
import * as Yup from 'yup';
import { Group } from "src/types";

interface Iprops {
  onSubmitForm: (data: Group) => void,
  initialState: Group | undefined
}

const useCreateNewGroup = ({onSubmitForm, initialState}:Iprops) =>{ 
  const activityScheme = Yup.object({
    groupname:Yup.string().required("You need to add the group name").max(150, 'Max characters is 150 character'),
  })
 
  const formik = useFormik<Partial<Group>>({
    validationSchema: activityScheme,
    enableReinitialize: true,
    initialValues: initialState ?? {},
    validateOnChange: false,
    validateOnMount: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      onSubmitForm(values as Group)
    }
  });

  const getError = (key: keyof Group) => {
    return formik.errors?.[key] as string
  }

  const handleChange = async (value: string | null, key: string) => {
    await formik.setFieldValue(key!, value)
  };


  return {
    values: formik.values,
    getError,
    handleChange,
    resetForm: formik.resetForm 
  }
}

export default useCreateNewGroup