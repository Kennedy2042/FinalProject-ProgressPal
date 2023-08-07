import './Logout.css'

const logout = () => {
    return (
        <>
        <main>
            <div className='Logout'>

                <section className='logOutContainer'>
                    <div className='logoutImage'>
                    <img src="./src/assets/56-567194_lawyer-scales-of-whatsapp-dp-for-lawyers.png" alt="" className='logoutMainImage' />
                    </div>

                    <div className='logOutTitle'>
                        <h1>Log out</h1>
                    </div>
                    
                    <div className='logOutText'>
                        <p>Hi user@gmail.com</p>
                        <p>Are you sure you want to log out?</p>
                    </div>

                    <div className='yesnoButton'>
                        <button className='no' >No</button>
                        <button className='yes'>Yes</button>
                    </div>

                </section>
            </div>
        </main>
        </>
    )
}

export default logout