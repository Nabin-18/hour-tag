

interface ButtonProps {
  text: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
    return (
      <div>
          <button className={` ${className}`}>{text}</button>
          {/* if i want to change in the css , i have to pass className as a props  */}
      </div>
    )
  }
  
  export default Button;