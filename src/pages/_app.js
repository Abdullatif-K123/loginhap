import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import "@/i18n/config";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {" "}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
