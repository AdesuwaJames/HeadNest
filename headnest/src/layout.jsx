// Layout with header/footer
import Header from "./components/Header";
import Footer from "./components/Footer";
export const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Layout without header/footer
export const BlankLayout = ({ children }) => <>{children}</>;
