import Link from "next/link";
import React from "react";
import Header from "./components/Header";

const Custom404 = () =>{
    return(
        <div>
            <p>ERROR</p>
            <Link href='/'> Go back to home page</Link>
        </div>
    )
}
Custom404.getLayout = function getLayout(page) {
    return (
        <>  
        <Header/>
            {page}
        </>
    );
};

export default Custom404