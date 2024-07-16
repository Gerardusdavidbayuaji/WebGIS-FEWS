import { ReactNode } from "react";

import Navbar from "@/components/Navbar";

interface Props {
  children: ReactNode;
}

const Layout = (props: Props) => {
  const { children } = props;

  return (
    <div className="bg-white h-screen w-full text-lg font-bold flex flex-col">
      <Navbar />
      <div className="flex flex-grow min-h-0">{children}</div>
    </div>
  );
};

export default Layout;
