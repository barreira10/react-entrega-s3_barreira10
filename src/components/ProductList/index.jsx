import { ProductCard } from "./ProductCard";
import styles from "./style.module.scss";

export const ProductList = ({ renderProducts, addCartList }) => {
  return (
    <section className="container">
      <ul className={styles.list}>
        {renderProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addCartList={addCartList}
          />
        ))}
      </ul>
    </section>
  );
};