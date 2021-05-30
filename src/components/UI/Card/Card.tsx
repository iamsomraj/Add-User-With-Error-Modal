import styles from "./Card.module.css";

type CardProps = {
  className: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
