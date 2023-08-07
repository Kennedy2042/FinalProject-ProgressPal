import './LogoutSucess.css'

const LogoutSucess = () => {
    return (
        <>
        <main>
            <div className='mainContainer'>
                <div className='container'>
                    <section className='logoutSection'>
                   <img src="./src/assets/sirfan-logo-whtie.png" alt="img" />
                    </section>

                    <div className='check'>
                        <hr />
                        <img src="./src/assets/injustice-removebg-preview.png" alt="" className='checkImage'></img>
                        <hr />
                    </div>

                    <div className='sucessMessage'>
                        <p>You have logged out sucessFully</p>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}

export default LogoutSucess