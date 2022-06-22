import * as yup from 'yup'

export const ExamSchema = yup.object().shape({
    title: yup.string().required('Title is required'),
    type: yup.string().required('Type is required'),
    subject: yup.string().required('Subject is required'),
    duration: yup.number().required('Duration is required'),
    description: yup.string()
})
