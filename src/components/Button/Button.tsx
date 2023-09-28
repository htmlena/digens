import { FunctionComponent } from 'react'
interface ButtonProps {
    text: string;
    className?: string;
}

const Button: FunctionComponent<ButtonProps> = ({text, className}) => {
    return (
        <button className={`inline-flex items-center py-3 px-10 bg-gradient-to-r from-red-500 to-orange-500 ${className}`}>
            {text}
        </button>
    )
}

export default Button;