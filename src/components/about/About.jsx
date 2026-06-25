import "./About.css";

const profileImage = "/media/Profile/20230924-_DSC1351_hojaseditadas_1-1.webp";

const About = () => {
    return(
        <main className="About">
            <img
                className="About__image"
                src={profileImage}
                alt="Dante Perini"
            />
            <section className="About__content" aria-label="About Dante Perini">
                <p>Born in 1994, he is a film, television, commercial, and music video editor based in Buenos Aires.</p>

                <p>His credits include the documentary feature films <em>Nuestra Cosa Perdida</em> (Official Selection BAFICI 2025) and <em>Machado</em> (Winner of the Argentine Competition at BAFICI 2026), for which he received the SAE-EDA Award for Best Editing for his co-editing work.</p>

                <p>He has edited series for Disney+, Shorta, and Prime Video, and has worked on commercials and music videos for production companies including Mam&aacute; H&uacute;ngara, Argentinacine, Oruga, and Pantera &amp; Co.</p>

                <p>He graduated in Film Editing from ENERC and continued his training in Dramatic Structure with Miguel P&eacute;rez and Mauricio Kart&uacute;n, while also studying Art History at the National Museum of Fine Arts.</p>

                <p>He is co-founder of Trigo Estudio, a Buenos Aires&ndash;based post-production company. He is currently studying Music and pursuing a degree in Literature at the University of Buenos Aires.</p>

                <div className="About__links">
                    <a href="mailto:perinidante@gmail.com">perinidante@gmail.com</a>
                    <a href="https://www.imdb.com/name/nm13629021/" target="_blank" rel="noreferrer">IMDB</a>
                    <a href="https://www.instagram.com/danteperini/" target="_blank" rel="noreferrer">IG</a>
                    <a href="https://www.linkedin.com/in/perinidante/" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </section>
        </main>
    );
};

export default About;
