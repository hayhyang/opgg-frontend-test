export interface LayoutProps {
  children: React.ReactNode;
}

export interface SearchItemProps {
  bookmark?: string[];
  history?: string[];
  updateStorage: () => void;
}
