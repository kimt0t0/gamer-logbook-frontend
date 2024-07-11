<template>
    <!-- HOW DOES IT WORK -->
    <section class="vertical-display">
        <div class="home-title-container">
            <h2>Take notes on your <span class="colored-primary">games</span></h2>
            <p class="subtitle">Read and write from <span class="colored-primary">wherever you are.</span></p>
        </div>
        <div class="horizontal-display">
            <article>
                <h3>How does it work ?</h3>
                <div class="article-contents">
                    <!-- left side decoration -->
                    <div class="list-decorator">
                        <div class="list-deco-dot __animated"></div>
                        <div class="list-deco-line"></div>
                        <div class="list-deco-dot"></div>
                        <div class="list-deco-line"></div>
                        <div class="list-deco-dot"></div>
                    </div>
                    <!-- list -->
                    <ul class="steps-list">
                        <li>
                            <h4 class="colored-secondary">Create your account</h4>
                            <p>You only need a username, an email address and a strong password.</p>
                        </li>
                        <li>
                            <h4>Log in, and discover your dashboard</h4>
                            <p>You don't need to download anything, just open the application in any browther, on any device.</p>
                        </li>
                        <li>
                            <h4>Create and edit your first logbook</h4>
                            <p>Simply add a new logbook or select an existing one. Pick your game in the games list or add a new one. Ang go !</p>
                        </li>
                    </ul>
                    <!-- animated picture -->
                    <div class="article-illustration-container">
                        <img src="@images/homepage-illus-1.jpg" alt="A bunch of hand notes for games" class="article-illustration __fade" />
                        <img
                            src="@images/homepage-illus-2.jpg"
                            alt="A screenshot of the user dashboard showing the choice of logbooks"
                            class="article-illustration __swell"
                        />
                    </div>
                </div>
            </article>
        </div>
    </section>
    <!-- WHY OPTING FOR GL -->
    <section class="vertical-display">
        <h3>Why opting for a gamer <span class="colored-linear-primary">logbook</span>?</h3>
        <ul class="reasons-list">
            <!-- free and open-source -->
            <li>
                <div class="reasons-item-headline">
                    <h4>100% free and open-source</h4>
                    <div class="reasons-item-icons-container">
                        <cash-icon class="reasons-item-icon icon-colored-success" size="48"></cash-icon>
                        <close-thick-icon class="reasons-item-icon icon-colored-primary __roll-icon"></close-thick-icon>
                    </div>
                </div>
                <p>
                    This project is developed by a junior developer for free and under the LGPL-3 License. You can find the full code and license
                    <a href="https://github.com/kimt0t0/gamer-logbook-frontend" title="Visit the GitHub repository of Gamer Logbook" target="_blank"
                        >on this GitHub repository.</a
                    >
                </p>
            </li>
            <!-- no paper -->
            <li>
                <div class="reasons-item-headline">
                    <h4>No papers</h4>
                    <div class="reasons-item-icons-container">
                        <note-icon class="reasons-item-icon icon-colored-sky" size="48"></note-icon>
                        <close-thick-icon class="reasons-item-icon icon-colored-primary __roll-icon"></close-thick-icon>
                    </div>
                </div>
                <p>You don't need to write on easily lost, often messy and always wasted papers.</p>
            </li>
            <!-- fast -->
            <li>
                <div class="reasons-item-headline">
                    <h4>Load fast</h4>
                    <reload-icon class="reasons-item-icon icon-colored-danger __roll-icon" size="48"></reload-icon>
                </div>
                <p>The application code is light so you can type and use your notes on any device easily.</p>
            </li>
            <!-- download -->
            <li>
                <div class="reasons-item-headline">
                    <h4>No download</h4>
                    <div class="reasons-item-icons-container">
                        <cloud-download-icon class="reasons-item-icon icon-colored-sky" size="48"></cloud-download-icon>
                        <close-thick-icon class="reasons-item-icon icon-colored-primary __roll-icons"></close-thick-icon>
                    </div>
                </div>
                <p>You don't need to download anything, you can use the app on any browser.</p>
            </li>
            <!-- responsive -->
            <li>
                <div class="reasons-item-headline">
                    <h4>Use it anywhere !</h4>
                    <walk-icon class="reasons-item-icon icon-colored-secondary __translate-icon" size="48"></walk-icon>
                </div>
                <p>
                    You can load it easily even on your mobile and use it anywhere. No need to bother with messy papers in your bags when you travel
                    with a game !
                </p>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
.home-title-container > h2 {
    font-size: $font-xl;
    padding-bottom: $space-xs;
}

/* HOW DOES IT WORK */
.article-contents {
    box-sizing: border-box;
    display: flex;
    white-space: normal;
    gap: $space-xxl;
}

.steps-list {
    display: flex;
    flex-direction: column;
    gap: $space-xxl;
    > li {
        position: relative;
        > h4 {
            padding: 0;
        }
        > p {
            margin: 0;
            font-size: $font-xs;
        }
    }
}

.list-decorator {
    padding-top: $space-m;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-s;
    > .list-deco-dot {
        box-sizing: border-box;
        width: 1.25vw;
        height: 1.25vw;
        border-radius: 50%;
        background-color: color($white, 40);
        &.__animated {
            animation: pulse 1.5s ease-in-out 1s infinite reverse;
        }
    }
    > .list-deco-line {
        width: 0px;
        height: 4vw;
        border: 1px solid color($white, 40);
    }
}

.article-illustration-container {
    box-sizing: border-box;
    margin-top: -$space-xxl;
    min-width: 40vw;
    width: 40vw;
    max-width: 40vw;
    min-height: 20vw;
    height: 20vw;
    max-height: 20vw;
    overflow: hidden;
    border: 1px solid color($white, 20);
    border-radius: $radius-xxs;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    animation: colorBack 2s ease-in 4s 1 normal forwards;
    > .article-illustration {
        position: absolute;
        width: 100%;
        transform-origin: center;
        &.__fade {
            animation: fade 1.8s ease-in 2s 1 normal forwards;
        }
        &.__swell {
            opacity: 0;
            animation: swell 2s ease-in 4s 1 normal forwards;
        }
    }
}

/* WHY OPTING FOR GL */
.reasons-list {
    display: flex;
    flex-wrap: wrap;
    gap: $space-xxxl;
    @media (max-width: $bp-m) {
        gap: $space-xl;
    }
    @media (max-width: $bp-xs) {
        flex-direction: column;
    }
    > li {
        box-sizing: border-box;
        padding: $space-l;
        border: 1px solid color($white, 20);
        border-radius: $radius-xxs;
        display: flex;
        flex-direction: column;
        width: 25vw;
        @media (max-width: $bp-m) {
            width: 40vw;
        }
        @media (max-width: $bp-xs) {
            width: 100%;
        }

        > .reasons-item-headline {
            display: flex;
            justify-content: space-between;
            > .reasons-item-icons-container {
                position: relative;
                > .reasons-item-icon {
                    position: absolute;
                    top: 0;
                    right: $space-xxs;
                }
            }
        }

        > p {
            text-align: justify;
        }
    }
}

.reasons-item-icon {
    font-size: $font-m;
    cursor: pointer;
    @include classicTransition();
    &.__roll-icon:hover {
        transform: rotate(360deg);
    }
    &.__translate-icon:hover {
        transform: translate($space-l, -$space-xs);
    }
}

/* ANIMATIONS*/
@keyframes fade {
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
        transform: rotate(-420deg) scale(0.3);
        border-radius: 50%;
    }
}

@keyframes swell {
    0% {
        opacity: 0;
        transform: rotate(-420deg) scale(0.1);
        border-radius: 50%;
    }
    50% {
        opacity: 1;
        width: 100%;
        transform: rotate(360deg);
        border-radius: $radius-xxs;
    }
    100% {
        opacity: 1;
        width: 100%;
        transform: rotate(360deg);
        border-radius: $radius-xxs;
    }
}

@keyframes colorBack {
    0% {
        background-color: transparent;
        opacity: 0.3;
    }
    60% {
        background-color: color($primary, 55);
        opacity: 0.6;
    }
    100% {
        background-color: color($primary, 60);
        opacity: 1;
    }
}

@keyframes pulse {
    0% {
        background-color: color($white, 40);
    }
    50% {
        background-color: color($secondary, 50);
        box-shadow: 0 0 0.5vw color($secondary, 50);
    }
    100% {
        background-color: color($secondary, 55);
        box-shadow: 0 0 1vw 0.5vw color($secondary, 55);
    }
}
</style>
