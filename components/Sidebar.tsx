"use client";

import { useContext } from 'react';
import classnames from 'classnames';
import styles from '../styles/Sidebar.module.css';
import { NavigationContext } from '../app/providers';
import { NavigationContextType } from '../types/context';
import { bestSellersLists } from '../config/lists';

export const Sidebar = () => {
  const { navigation, setNavigationContext } = useContext(NavigationContext) as NavigationContextType;

  const handleListClick = (key: string) => {
    setNavigationContext(key);
    window.scrollTo(0, 0);
  };

  return (
    <ul>
      <small>WEEKLY LISTS</small>
      {Object.entries(bestSellersLists)
        .filter(([, value]) => value.updated === 'WEEKLY')
        .map(([key, value]) => (
          <li
            key={key}
            className={classnames({
              [styles.SidebarItem]: navigation !== key,
              [styles.SidebarItemActive]: navigation === key,
            })}
            onClick={() => handleListClick(key)}
          >
            {value.name}
          </li>
        ))}
      <br />
      <small>MONTHLY LISTS</small>
      {Object.entries(bestSellersLists)
        .filter(([, value]) => value.updated === 'MONTHLY')
        .map(([key, value]) => (
          <li
            key={key}
            className={classnames({
              [styles.SidebarItem]: navigation !== key,
              [styles.SidebarItemActive]: navigation === key,
            })}
            onClick={() => handleListClick(key)}
          >
            {value.name}
          </li>
        ))}
    </ul>
  );
};
