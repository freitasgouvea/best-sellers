"use client";

import { ThemeProvider } from "next-themes";
import { createContext, useState } from "react";
import { NavigationContextType, DateContextType } from "../types/context";

export const NavigationContext = createContext<NavigationContextType | null>(null);
export const DateContext = createContext<DateContextType | null>(null);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [navigation, setNavigation] = useState<string>("CombinedPrintAndEBookFiction");

  const setNavigationContext = (list: string) => {
    setNavigation(list);
  };

  const [date, setDate] = useState<string | null>(null);

  const setDateContext = (date: string | null) => {
    setDate(date);
  };

  return (
    <NavigationContext.Provider value={{ navigation, setNavigationContext }}>
      <DateContext.Provider value={{ date, setDateContext }}>
        <ThemeProvider>{children}</ThemeProvider>
      </DateContext.Provider>
    </NavigationContext.Provider>
  );
}
