'use client';

// Next.js Imports:

import Image from 'next/image';

// React Imports:

import React, { useState } from 'react';

// Component Imports:

import Credits from '@/app/components/credits/Credits';

// CSS Imports:

import '@/app/components/footer/Footer.css';

export default function Footer() {

    const [isVisible, setVisible] = useState(false);
    const [hasInteracted, setInteracted] = useState(false);

    // Handles clicking on 'Credits & Attributions' to show the credits modal.
    const show = () => {
        setVisible(true);
        setInteracted(true);
    }

    // Handles clicking the close button on the credits modal to hide the modal.
    const hide = () => {
        setVisible(false)
    }
    return (
        <>
            <footer>
                <div id = 'footer-content'>
                    <div id = 'social-container'>
                        <div id = 'ko-fi-container'>
                            <a href = 'https://ko-fi.com/pixele' id = 'ko-fi-button' target = '_blank'
                               rel = 'noopener noreferrer'>
                                <Image
                                    src = 'https://assets.pixele.gg/footer/ko-fi.png'
                                    alt = 'Ko-fi'
                                    width = { 100 }
                                    height = { 100 }
                                />
                                Support me!
                            </a>
                        </div>
                        <div id = 'social-links'>
                            <a href = 'https://twitter.com/blockspinner44' className = 'social-icon' target = '_blank'
                               rel = 'noopener noreferrer'>
                                <Image
                                    src = 'https://assets.pixele.gg/footer/twitter.png'
                                    alt = 'Twitter'
                                    width = { 100 }
                                    height = { 100 }
                                />
                            </a>
                            <a href = 'https://www.reddit.com/r/Pixelegg/' className = 'social-icon' target = '_blank'
                               rel = 'noopener noreferrer'>
                                <Image
                                    src = 'https://assets.pixele.gg/footer/reddit.png'
                                    alt = 'Reddit'
                                    width = { 100 }
                                    height = { 100 }
                                />
                            </a>
                            <a href = 'https://discord.gg/WG6ySKvZJP' className = 'social-icon' target = '_blank'
                               rel = 'noopener noreferrer'>
                                <Image
                                    src = 'https://assets.pixele.gg/footer/discord.png'
                                    alt = 'Discord'
                                    width = { 100 }
                                    height = { 100 }
                                />
                            </a>
                        </div>
                        <p id = 'credits' onClick = { show }>Credits & Attributions</p>
                    </div>
                </div>
            </footer>
            <Credits isVisible = { isVisible } onClose = { hide } hasInteracted = { hasInteracted }/>
        </>
    );
}