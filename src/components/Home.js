
import React from 'react';
import Photo from '../profilePhoto/IMG_2307.jpg';
import Navbar from './Navbar';



const Home = () => {
    return (


        <div >
            <Navbar />
            <div >
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <div>
                        <img
                            src={Photo}
                            height={700}
                            width={600}
                            alt="hello"
                            style={{
                                margin: '50px',
                                padding: '20px',
                                border: '2px solid white',
                                borderWidth: '10px',
                            }}
                        />
                    </div>
                    <div style={{ maxWidth: '100%' }}>
                        <h1
                            style={{
                                flex: 1,
                                fontFamily: 'DM Serif Display',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                fontSize: '80px',
                                color: 'white',
                            }}
                        >
                            Hi, I'm <br />
                            <span style={{ color: 'crimson' }}>
                                Laxmi Venkata Siva Chaitanya Kunuku
                            </span>
                        </h1>
                        <h2 style={{ color: 'olive' }}>MERN Full Stack Developer</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home
