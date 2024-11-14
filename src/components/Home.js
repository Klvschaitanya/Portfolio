import React from 'react';
import Photo from '../profilePhoto/IMG_2307.jpg';

const Home = () => {
    return (
        <div style={{ padding: '20px' }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
            }}>
                <div style={{ flex: '1 1 40%', padding: '10px', boxSizing: 'border-box' }}>
                    <img
                        src={Photo}
                        alt="hello"
                        style={{
                            width: '100%',
                            maxWidth: '600px',
                            height: 'auto',
                            border: '2px solid white',
                            borderWidth: '10px',
                        }}
                    />
                </div>
                <div style={{ flex: '1 1 50%', padding: '10px', boxSizing: 'border-box', maxWidth: '600px' }}>
                    <h1
                        style={{
                            fontFamily: 'DM Serif Display',
                            fontWeight: 700,
                            fontStyle: 'normal',
                            fontSize: '5vw',
                            color: 'white',
                            margin: '10px 0',
                        }}
                    >
                        Hi, I'm <br />
                        <span style={{ color: 'crimson' }}>
                            Laxmi Venkata Siva Chaitanya Kunuku
                        </span>
                    </h1>
                    <h2 style={{ color: 'olive', fontSize: '3.5vw' }}>MERN Full Stack Developer</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;


