// Layout with header/footer
import Header from "./temp_components/Header";
import Footer from "./temp_components/Footer";
export const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Layout without header/footer
export const BlankLayout = ({ children }) => <>{children}</>;
