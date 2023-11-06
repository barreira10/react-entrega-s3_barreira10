import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import styles from "./style.module.scss";

export const Header = ({ setIsVisible, cartList, setSearch }) => {
  const [value, setValue] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <span className={styles.logoBox}>
            <img src={Logo} alt="Logo Kenzie Burguer" />
            <button
              className={styles.cartBtn}
              onClick={() => setIsVisible(true)}
            >
              <MdShoppingCart size={22} color="#bdbdbd" />
              <span className={styles.count}>
                <span>
                  {cartList.reduce((prevValue, product) => {
                    return prevValue + product.count;
                  }, 0)}
                </span>
              </span>
            </button>
          </span>
          <form onSubmit={submit}>
            <input
              placeholder="Pesquisar produto..."
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
              <MdSearch size={19} color="#ffffff" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};