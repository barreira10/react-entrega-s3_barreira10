import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styles from "./style.module.scss";

export const CartModal = ({
  cartList,
  setIsVisible,
  removeCartList,
  setCartList,
}) => {
  const total = cartList.reduce((prevValue, product) => {
    return prevValue + product.price * product.count;
  }, 0);

  const clearCardList = () => {
    setCartList([]);
    toast.error("Todos os itens foram removidos!");
  };

  return (
    <div className={styles.overlayBox} role="dialog">
      <div className={styles.modalBox}>
        <div className={styles.headerModal}>
          <h2 className="title three white">Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            onClick={() => setIsVisible(false)}
          >
            <MdClose size={21} color="#ffffff" />
          </button>
        </div>
        <div className={styles.bodyModal}>
          <div className={styles.listBox}>
            {cartList.length > 0 ? (
              <ul>
                {cartList.map((product) => (
                  <CartItemCard
                    key={product.id}
                    removeCartList={removeCartList}
                    product={product}
                  />
                ))}
              </ul>
            ) : (
              <p className="title three gray100">
                Opss... O Carrinho está vazio!
              </p>
            )}
          </div>
          <div className={styles.amountBox}>
            <div>
              <span className="text body600 gray100">Total</span>
              <span className="text body600 gray200">
                {total.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </div>
            <button className="btn large" onClick={clearCardList}>
              Remover todos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};