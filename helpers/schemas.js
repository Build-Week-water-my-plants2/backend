const yup = require('yup')

const userSchema = yup.object().shape({
  username: yup
    .string()
    .required('all fields required'),
  password: yup
    .string()
    .required('all fields required'),
  phone: yup
    .string()
    .required('all fields required')
})

const plantSchema = yup.object().shape({
  plant_name: yup
    .string()
    .required('all fields required'),
  species_name: yup
    .string()
    .required('all fields required'),
  watering_freq: yup
    .string()
    .required('all fields required'),
  image_url: yup
    .string()
})

module.exports = {
  plantSchema,
  userSchema
}
