import Header from '@/components/Header';
import Footer from '@/components/Footer';


const BasicLayout = ({children}) => {
  return(
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default BasicLayout;