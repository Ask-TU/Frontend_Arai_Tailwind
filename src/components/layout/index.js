import { Footer, Header } from "./Layout";
import { Navbar } from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-10 max-xl:hidden">
        <Navbar />
      </div>
      <main className="w-full h-screen">{children}</main>
      <Footer />
    </>
  );
}
