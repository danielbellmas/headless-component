import React from "react";
import Menu from "./menu";
import classNames from "classnames";

export const BaseMenu = ({ isOpen: isOpenProp, children }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <div>
          <div>
            <Menu.Button>
              <button>...</button>
            </Menu.Button>
          </div>
          {(isOpen || isOpenProp) && (
            <Menu.Items>
              <div className={"menu-items"}>
                {children.map((item, index) => (
                  <Menu.Item key={item.text} index={index}>
                    {({ active }) => (
                      <div className={classNames("menu-item", { active })}>
                        {item.text}
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          )}
        </div>
      )}
    </Menu>
  );
};

export const AlwaysOpenedMenu = ({ items }) => (
  <BaseMenu items={items} isOpen={true} />
);

export const NotificationsMenu = ({ items }) => (
  <div>
    <h2>Notifications </h2>
    <hr />
    <BaseMenu items={items} />
  </div>
);
