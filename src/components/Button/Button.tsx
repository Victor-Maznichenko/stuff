import { FC } from 'react'
import styles from './Button.module.scss';

interface IButtonProps {
  text?: string;
}

const Button: FC<IButtonProps> = ({text}) => {
  return (
    <button className={styles.button}>{text}</button>
  )
}

export default Button