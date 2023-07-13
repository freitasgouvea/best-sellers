export type NavigationContextType = {
  navigation: string;
  setNavigationContext: (navigation: string) => void;
};

export type DateContextType = {
  date: string | null;
  setDateContext: (date: string | null) => void;
};