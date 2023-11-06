import styles from "./style.module.scss";

export const ProductCard = ({ product, addCartList }) => {
  return (
    <li className={styles.card}>
      <div>
        <div className={styles.imgContainer}>
          <img src={product.img} alt={product.name} />
        </div>
        <h3 className="title three gray100">{product.name}</h3>
        <span className="text caption gray200">{product.category}</span>
        <span className="text body600 primary">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <span className={styles.buttonBox}>
          <button className="btn" onClick={() => addCartList(product)}>
            Adicionar
          </button>
        </span>
      </div>
    </li>
  );
};