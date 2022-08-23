import AppLayout from "components/layout/AppLayout";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import GlobalStyle from "../styles/globalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <RecoilRoot>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </RecoilRoot>
    </>
  );
}
