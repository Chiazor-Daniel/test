"use client"
import { useContext, createContext, useState, useEffect } from "react";

const GeneralContext = createContext();

export const usePostContext = () => useContext(GeneralContext);

export const GeneralProvider = ({ children }) => {
  const [postItem, setPostItem] = useState({});
  const [isSubmenu, setIsSubmenu] = useState(false);
  const [category, setCategory] = useState("");

  const updatePostItem = (item) => {
    setPostItem(item);
  };

  const closeSubmenu = () => {
    setIsSubmenu(!isSubmenu);
  };

  const updateCategory = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    console.log("Setting postItem:", postItem);
  }, [postItem]);

  return (
    <GeneralContext.Provider
      value={{
        postItem,
        updatePostItem,
        isSubmenu,
        closeSubmenu,
        category,
        updateCategory,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};
