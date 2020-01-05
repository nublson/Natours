import React from "react"

import Head from "./Head"

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            {children}
        </>
    )
}

export default Layout
