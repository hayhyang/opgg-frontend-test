import Header from "./Header";

import { LayoutProps } from "types/common";

const AppLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AppLayout;
