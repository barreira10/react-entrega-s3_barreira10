import { useState, useEffect } from "react";
import { HomePage } from "./pages/HomePage";
import { CartModal } from "./components/CartModal";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const localStorageCartList = localStorage.getItem("@CARTLIST");
  const [cartList, setCartList] = useState(
    localStorageCartList ? JSON.parse(localStorageCartList) : []
  );

  useEffect(() => {
    localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
  }, [cartList]);

  const addCartList = (newItem) => {
    if (!cartList.some((cartItem) => cartItem.id === newItem.id)) {
      setCartList([...cartList, { ...newItem, count: 1 }]);
      toast.success("Item adicionado ao carrinho!");
    } else {
      const newList = [...cartList];
      const index = newList.findIndex((cartItem) => cartItem.id === newItem.id);

      newList[index].count = newList[index].count + 1;

      setCartList(newList);
      toast.success("Item adicionado ao carrinho!");
    }
  };

  const removeCartList = (removeId) => {
    const removeItem = cartList.find((cartItem) => cartItem.id === removeId);

    if (removeItem.count > 1) {
      const newList = [...cartList];
      const index = newList.findIndex((cartItem) => cartItem.id === removeId);

      newList[index].count = newList[index].count - 1;

      setCartList(newList);
      toast.error("Item removido do carrinho!");
    } else {
      const newList = cartList.filter((cartItem) => cartItem.id !== removeId);
      setCartList(newList);
      toast.error("Item removido do carrinho!");
    }
  };

  return (
    <>
      <HomePage
        setIsVisible={setIsVisible}
        addCartList={addCartList}
        cartList={cartList}
      />
      {isVisible ? (
        <CartModal
          removeCartList={removeCartList}
          cartList={cartList}
          setCartList={setCartList}
          setIsVisible={setIsVisible}
        />
      ) : null}
      <ToastContainer />
    </>
  );
};

export default App;