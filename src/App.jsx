import { LanguageProvider } from "./i18n";
import {
  Header,
  Hero,
  OrderForm,
  Services,
  Fleet,
  Advantages,
  Steps,
  Faq,
  Contact,
  Footer,
  MobileBar,
} from "./components";

const App = () => (
  <LanguageProvider>
    <Header />
    <main>
      <Hero />
      <OrderForm />
      <Services />
      <Fleet />
      <Advantages />
      <Steps />
      <Faq />
      <Contact />
    </main>
    <Footer />
    <MobileBar />
  </LanguageProvider>
);

export default App;
