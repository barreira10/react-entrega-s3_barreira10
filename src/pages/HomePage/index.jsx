import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burguerApi } from "../../services";
import "../../styles/index.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const HomePage = ({ setIsVisible, addCartList, cartList }) => {
  const [productList, setProductList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await burguerApi.get("products");
        setProductList(data);
      } catch (error) {
        toast.warning("Por favor, tente novamente mais tarde!");
      }
    };
    getProducts();
  }, []);

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderProducts = search ? filteredProducts : productList;

  return (
    <>
      <Header
        setIsVisible={setIsVisible}
        cartList={cartList}
        setSearch={setSearch}
      />
      <main>
        <ProductList
          renderProducts={renderProducts}
          addCartList={addCartList}
        />
      </main>
    </>
  );
};