import React from 'react'


export default function Header() {
  return (
    <>
    <header className="navbar-light header-sticky">
        <nav className="navbar navbar-expand-xl">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img className="light-mode-item navbar-brand-item" src="../assets/images/logo-dark.svg" alt="logo" />
                    <img className="dark-mode-item navbar-brand-item" src="../assets/images/logo-light.svg" alt="logo"/>
                </a>
            </div>
        </nav>
    </header>
    </>
  )
}
