import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

type ErrorModalProps = {
  title: string;
  message: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ErrorModal: React.FC<ErrorModalProps> = (props) => {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button type="button" onClick={props.onClick}>
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
