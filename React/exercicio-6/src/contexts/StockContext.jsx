import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const StockContext = createContext({});

StockContextProvider.propTypes = {
  children: PropTypes.node
};

// função para garantir sempre uma data válida
const parseDate = (value) => {
  const d = new Date(value);
  return isNaN(d) ? new Date() : d;
};

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("obc-react-stock");
    if (!storedItems) return [];

    const items = JSON.parse(storedItems);

    // Converte TODAS as datas em Date válidas ao carregar
    items.forEach((item) => {
      item.createdAt = parseDate(item.createdAt);
      item.updatedAt = parseDate(item.updatedAt);
    });

    return items;
  });

  const addItem = (item) => {
    const newItem = {
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    setItems((current) => {
      const updatedItems = [newItem, ...current];
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === +itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];

      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: new Date()
      });

      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((current) => {
      const updatedItems = current.filter((item) => item.id !== itemId);
      localStorage.setItem("obc-react-stock", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  const stock = {
    items,
    addItem,
    getItem,
    updateItem,
    deleteItem
  };

  return (
    <StockContext.Provider value={stock}>
      {children}
    </StockContext.Provider>
  );
}
