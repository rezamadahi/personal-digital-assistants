import ProfileCard from "./ProfileCard";
import {useState, useEffect} from 'react';

import './assets/css/styles.css';
import AlexaImage from './assets/images/alexa.png';
import CortanaImage from './assets/images/cortana.png';
import SiriImage from './assets/images/siri.png';

function App() {

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    }, [darkMode]);

    return (
        <div className={ darkMode ? 'theme-dark' : 'theme-light' }>

            <div>
                <nav className="navbar">
                    <div className="navbar-brand">
                        <span className="navbar-item">Theme Switcher</span>
                    </div>
                    <div className="navbar-end">
                        <button className="button is-primary" onClick={ () => setDarkMode(!darkMode) }>
                            { darkMode ? 'Light mode' : 'Dark mode'}
                        </button>
                    </div>
                </nav>
                <section className="section">
                    <h1 className="title">Welcome to My App</h1>
                    <p className="subtitle">Dark Mode is {darkMode ? 'On' : 'Off'}</p>
                </section>
            </div>

            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">Personal Digital Assistants</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-3">
                            <ProfileCard
                                title="Alexa"
                                handle="@alexa99"
                                description="Alexa was created by Amazon and helps you buy things."
                                image={AlexaImage}
                                imageAlt="Alexa"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Cortana"
                                handle="@cortana32"
                                description="Cortana was made by Microsoft. who knows what it does?"
                                image={CortanaImage}
                                imageAlt="Cortana"/>
                        </div>
                        <div className="column is-3">
                            <ProfileCard
                                title="Siri"
                                handle="@siri01"
                                description="Siri was made by Apple and is being phase out."
                                image={SiriImage}
                                imageAlt="Siri"/>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
