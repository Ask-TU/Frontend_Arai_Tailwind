import { Footer, Header } from "./Layout";
import { Navbar } from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="mt-8 max-xl:hidden">
        <Navbar />
      </div>
      <main className="w-full h-full">{children}</main>
      <Footer />
    </>
  );
}
