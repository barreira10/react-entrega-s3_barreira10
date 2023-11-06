import { MdDelete } from "react-icons/md";
import styles from "./style.module.scss";

export const CartItemCard = ({ product, removeCartList }) => {
  return (
    <li className={styles.cardItem}>
      <div className={styles.productBox}>
        <span>
          <p>{product.count}</p>
        </span>
        <div>
          <img src={product.img} alt={product.name} />
        </div>
        <h3 className="title three gray100">{product.name}</h3>
      </div>
      <button
        aria-label="delete"
        title="Remover item"
        onClick={() => removeCartList(product.id)}
      >
        <MdDelete size={20} color="#bdbdbd" />
      </button>
    </li>
  );
};