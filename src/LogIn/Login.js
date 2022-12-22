import React from 'react'
import "./Login.css"
import { login_uri } from './spotify'
import { FaSpotify } from 'react-icons/fa'
import { motion } from 'framer-motion'

function Login() {



    return (
        <div className="login"  >
            <div className="logo">
                <FaSpotify className="spotify-icon" />
                <h1>Spotify Wrapped</h1>
            </div>
            <h6 className="author-credits">Original idea by: bhushan6</h6>
            <div className="tag-line" style={{ overflow: "hidden" }}>
                <motion.p
                    initial={{ y: "125%" }}
                    animate={{
                        y: "0%",
                        transition: {
                            duration: 0.8
                        }
                    }}
                >
                    Listening is Everything
                </motion.p>
            </div>
            <a href={login_uri}>Login with Spotify</a>
        </div>
    )
}

export default Login
