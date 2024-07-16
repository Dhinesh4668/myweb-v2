import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ padding: '1em', textAlign: 'center', backgroundColor: '#f8f9fa', marginTop: 'auto' }}>
            <div style={{ textAlign: "left" }}>
                <p>Ready to make a kickstart?</p>
                <p>make the call </p>
            </div>
            {/* lists */}
            {/* container */}
            {/* left */}
            {/* right list servides / page links */}
            <p>&copy; {currentYear} Dhineshkumar. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
