import './Input.scss';
import PropTypes from 'prop-types'
const Input = ({inputType, inputName}) => {
  return (
    <>
        <input className='input' type={inputType} placeholder={inputName} />
    </>
  )
}
Input.propTypes = {
  inputType: PropTypes.string,
  inputName: PropTypes.string
}

export default Input