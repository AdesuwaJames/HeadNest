// Layout with header/footer
import Header from "./Components/Header";
import Footer from "./Components/Footer";
export const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Layout without header/footer
export const BlankLayout = ({ children }) => <>{children}</>;
