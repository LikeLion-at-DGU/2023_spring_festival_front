import Footer from "./Footer";
import HeadTitle from "./Head";
import NavBar from "./NavBar";

export default function Layout( {children} ){
        return(
            <>
                <HeadTitle/>
                <NavBar />
                    <div>{children}</div>
                <Footer/>
            </>
        )
}