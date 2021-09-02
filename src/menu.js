import React, { useContext } from "react";

const MenuContext = React.createContext({
  isOpen: false,
  activeIndex: null,
});

const Menu = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(-1);

  const setMenuVisibility = (nextIsOpen) => {
    setIsOpen(nextIsOpen);
  };

  const onKeyPress = (e) => {
    if (e.key === "ArrowUp") {
      setActiveIndex((curr) => (curr === 0 ? 0 : curr - 1));
    } else if (e.key === "ArrowDown") {
      setActiveIndex((curr) => curr + 1);
    }
  };

  React.useEffect(() => {
    const removeEvent = (cb) =>
      window.removeEventListener("keydown", cb, false);
    window.addEventListener("keydown", onKeyPress);
    return () => removeEvent(onKeyPress);
  }, []);

  React.useEffect(() => {
    return () => setActiveIndex(null);
  }, []);

  return (
    <MenuContext.Provider value={{ isOpen, activeIndex, setMenuVisibility }}>
      {children({
        setMenuVisibility,
        isOpen,
        activeIndex,
      })}
    </MenuContext.Provider>
  );
};

const Item = ({ index, children, onClick }) => {
  const { activeIndex, setMenuVisibility } = useContext(MenuContext) || {};

  return children({
    active: index === activeIndex,
    onClick: (e) => {
      setMenuVisibility(false, { source: "ITEM_CLICKED" });
      onClick && onClick(e);
    },
  });
};

const MenuButton = ({ onClick, children }) => {
  const { isOpen, setMenuVisibility } = useContext(MenuContext) || {};

  return React.cloneElement(children, {
    active: isOpen,
    onClick: (e) => {
      onClick && onClick(e);
      setMenuVisibility(!isOpen);
    },
  });
};

const MenuItems = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

Menu.Items = MenuItems;

Menu.Button = MenuButton;

Menu.Item = Item;

export default Menu;
