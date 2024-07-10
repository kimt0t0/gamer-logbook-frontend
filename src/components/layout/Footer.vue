<template>
    <footer>
        <div class="footer-container">
            <!-- SOCIAL -->
            <ul class="social-media-list">
                <!-- Github -->
                <li>
                    <a href="https://github.com/kimt0t0" class="social-media-link" title="Visit my Github page" target="_blank">
                        <github-icon class="footer-link-icon"></github-icon>
                    </a>
                </li>
                <!-- LinkedIn -->
                <li>
                    <a href="https://www.linkedin.com/in/krobert44/" class="social-media-link" title="Visit my LinkedIn page" target="_blank">
                        <linkedin-icon class="footer-link-icon"></linkedin-icon>
                    </a>
                </li>
            </ul>
            <!-- NAME & LICENCE -->
            <div class="attributions">
                <p>This website is coded and written by Kim Robert.</p>
                <p>·</p>
                <p>
                    Code and contents are under the
                    <a
                        href="https://github.com/IQAndreas/markdown-licenses/blob/master/gnu-lgpl-v3.0.md"
                        class="footer-link"
                        title="Access to full license text"
                        target="_blank"
                        >LGPL-3 License</a
                    >.
                </p>
            </div>
            <!-- USEFUL LINKS -->
            <div>
                <h6>Useful links:</h6>
                <ul class="useful-links-list">
                    <li><RouterLink class="footer-link" to="/about" target="_blank">About</RouterLink></li>
                    <li><RouterLink class="footer-link" to="/q-and-a" target="_blank">Q&A</RouterLink></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    margin: 0;
    padding: 0;
    border-top: 1px solid color($white, 20);
}
.footer-container {
    padding: $space-l $space-xxl $space-s;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.social-media-list {
    display: flex;
    > li > .social-media-link {
        border-bottom: none;
        &:hover {
            border-bottom: none;
        }
    }
}
.attributions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-xs;
    > p {
        margin: 0;
    }
}
h6 {
    padding-bottom: $space-s;
}
p {
    font-size: $font-xxs;
    font-weight: 600;
    color: color($white, 40);
}
.footer-link {
    font-size: $font-xxs;
    border-bottom: none;
    &:hover {
        border-bottom: none;
        color: $primary;
    }
}
.useful-links-list {
    list-style-type: none;

    > li > .footer-link {
        border-left: 1px solid color($white, 20);
        padding: $space-s;
        &:hover {
            border-left-color: $primary;
        }
    }
}
</style>
