import './Button.css'

const Button =({children, variant, idade}) => {
    return (
      <button className={variant}>{children}</button>
    )
}
export default Button