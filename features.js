/* =========================================
   HIWAMOVIES
   FEATURES.JS — BIG UPGRADE
========================================= */

(() => {
    "use strict";

    /* =========================================
       SETTINGS
    ========================================= */

    const RECENT_KEY = "hiwaMoviesRecent";
    const MAX_RECENT = 8;

    /* =========================================
       SAFE HELPERS
    ========================================= */

    const getEl = (id) => document.getElementById(id);

    function getRecentMovies() {
        try {
            return JSON.parse(localStorage.getItem(RECENT_KEY)) || [];
        } catch {
            return [];
        }
    }

    function saveRecentMovies(list) {
        localStorage.setItem(RECENT_KEY, JSON.stringify(list));
    }

    /* =========================================
       RECENTLY WATCHED
    ========================================= */

    function addToRecentlyViewed(movie) {
        if (!movie) return;

        let recent = getRecentMovies();

        recent = recent.filter(id => Number(id) !== Number(movie.id));
        recent.unshift(movie.id);
        recent = recent.slice(0, MAX_RECENT);

        saveRecentMovies(recent);
        renderRecentlyViewed();
    }

    function renderRecentlyViewed() {
        const existing = getEl("recentlyViewed");

        if (existing) {
            existing.remove();
        }

        const recentIds = getRecentMovies();

        if (!recentIds.length || typeof movies === "undefined") {
            return;
        }

        const recentMovies = recentIds
            .map(id => movies.find(movie => Number(movie.id) === Number(id)))
            .filter(Boolean);

        if (!recentMovies.length) return;

        const section = document.createElement("section");
        section.id = "recentlyViewed";
        section.className = "recently-viewed-section";

        section.innerHTML = `
            <div class="section-heading">
                <div>
                    <span class="section-kicker">KEEP WATCHING</span>
                    <h2>Recently Viewed</h2>
                </div>
                <button class="clear-recent" id="clearRecent">
                    Clear
                </button>
            </div>

            <div class="movie-grid recent-grid">
                ${recentMovies.map(movie => {
                    if (typeof createMovieCard === "function") {
                        return createMovieCard(movie);
                    }

                    return `
                        <article class="movie-card">
                            <div class="movie-info">
                                <h3>${movie.title}</h3>
                            </div>
                        </article>
                    `;
                }).join("")}
            </div>
        `;

        const main = document.querySelector("main");

        if (main) {
            const firstSection = main.querySelector("section");
            if (firstSection) {
                firstSection.before(section);
            } else {
                main.appendChild(section);
            }
        }

        const clearButton = getEl("clearRecent");

        if (clearButton) {
            clearButton.addEventListener("click", () => {
                localStorage.removeItem(RECENT_KEY);
                renderRecentlyViewed();
                showFeatureToast("Recently viewed cleared");
            });
        }
    }

    /* =========================================
       TRACK MOVIE OPENING
    ========================================= */

    function trackMovieOpening() {
        document.addEventListener("click", event => {
            const card = event.target.closest("[data-movie-id]");

            if (!card || typeof movies === "undefined") return;

            const id = card.dataset.movieId;

            const movie = movies.find(
                item => String(item.id) === String(id)
            );

            if (movie) {
                addToRecentlyViewed(movie);
            }
        });
    }

    /* =========================================
       RANDOM MOVIE UPGRADE
    ========================================= */

    function improveRandomButton() {
        const button = getEl("randomButton");

        if (!button || typeof movies === "undefined") return;

        button.addEventListener("click", () => {
            const available = movies.filter(movie => movie);

            if (!available.length) return;

            const randomMovie =
                available[Math.floor(Math.random() * available.length)];

            if (typeof openMovieModal === "function") {
                openMovieModal(randomMovie);
            }
        });
    }

    /* =========================================
       SEARCH ENTER KEY
    ========================================= */

    function improveSearch() {
        const input = getEl("searchInput");

        if (!input) return;

        input.addEventListener("keydown", event => {
            if (event.key === "Enter") {
                event.preventDefault();

                const firstResult =
                    document.querySelector("#searchResults [data-movie-id]");

                if (firstResult) {
                    firstResult.click();
                }
            }
        });
    }

    /* =========================================
       KEYBOARD SHORTCUTS
    ========================================= */

    function setupKeyboardShortcuts() {
        document.addEventListener("keydown", event => {
            const tag = document.activeElement?.tagName;

            if (
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT"
            ) {
                return;
            }

            // "/" = open search
            if (event.key === "/") {
                event.preventDefault();

                const searchButton = getEl("openSearch");

                if (searchButton) {
                    searchButton.click();
                }
            }

            // Escape = close things
            if (event.key === "Escape") {
                const closeSearch = getEl("closeSearch");

                if (closeSearch) {
                    closeSearch.click();
                }

                const modalClose = getEl("modalClose");

                if (modalClose) {
                    modalClose.click();
                }
            }

            // Home
            if (event.key.toLowerCase() === "h") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        });
    }

    /* =========================================
       BACK TO TOP
    ========================================= */

    function createBackToTop() {
        if (getEl("backToTop")) return;

        const button = document.createElement("button");

        button.id = "backToTop";
        button.className = "back-to-top";
        button.setAttribute("aria-label", "Back to top");
        button.innerHTML = "↑";

        document.body.appendChild(button);

        window.addEventListener("scroll", () => {
            button.classList.toggle(
                "visible",
                window.scrollY > 500
            );
        });

        button.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    /* =========================================
       TRENDING BADGES
    ========================================= */

    function addTrendingBadges() {
        if (typeof movies === "undefined") return;

        const popularTitles = [
            "The Dark Knight",
            "Interstellar",
            "Inception",
            "The Walking Dead",
            "One Piece",
            "Breaking Bad",
            "Demon Slayer"
        ];

        document.querySelectorAll("[data-movie-id]").forEach(card => {
            const id = Number(card.dataset.movieId);

            const movie = movies.find(
                item => Number(item.id) === id
            );

            if (!movie) return;

            if (!popularTitles.includes(movie.title)) return;

            if (card.querySelector(".trending-badge")) return;

            const badge = document.createElement("span");

            badge.className = "trending-badge";
            badge.textContent = "🔥 TRENDING";

            const poster = card.querySelector(".movie-poster");

            if (poster) {
                poster.appendChild(badge);
            } else {
                card.prepend(badge);
            }
        });
    }

    /* =========================================
       RECOMMENDATIONS
    ========================================= */

    function renderRecommendations(movie) {
        if (!movie || typeof movies === "undefined") return;

        const old = getEl("recommendations");

        if (old) {
            old.remove();
        }

        const genre = movie.genre;

        let recommendations = movies
            .filter(item =>
                item.id !== movie.id &&
                item.genre === genre
            )
            .slice(0, 6);

        if (recommendations.length < 4) {
            recommendations = movies
                .filter(item => item.id !== movie.id)
                .slice(0, 6);
        }

        if (!recommendations.length) return;

        const section = document.createElement("div");

        section.id = "recommendations";
        section.className = "recommendations";

        section.innerHTML = `
            <div class="recommendation-title">
                <span>BECAUSE YOU LIKED IT</span>
                <h3>You Might Also Like</h3>
            </div>

            <div class="recommendation-grid">
                ${recommendations.map(item => `
                    <button
                        class="recommendation-card"
                        data-recommendation-id="${item.id}"
                    >
                        <div class="recommendation-poster">
                            ${
                                item.poster
                                    ? `<img src="${item.poster}" alt="${escapeHtmlFeature(item.title)}">`
                                    : `<div class="recommendation-fallback">🎬</div>`
                            }
                        </div>

                        <strong>${escapeHtmlFeature(item.title)}</strong>
                        <small>${item.year || ""}</small>
                    </button>
                `).join("")}
            </div>
        `;

        const modal = getEl("movieModal");

        if (modal) {
            modal.appendChild(section);
        }

        section.querySelectorAll("[data-recommendation-id]")
            .forEach(button => {
                button.addEventListener("click", () => {
                    const id = Number(
                        button.dataset.recommendationId
                    );

                    const selected = movies.find(
                        item => Number(item.id) === id
                    );

                    if (
                        selected &&
                        typeof openMovieModal === "function"
                    ) {
                        openMovieModal(selected);
                    }
                });
            });
    }

    /* =========================================
       TOAST
    ========================================= */

    function showFeatureToast(message) {
        const toast = getEl("toast");

        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        clearTimeout(window.hiwaFeatureToast);

        window.hiwaFeatureToast = setTimeout(() => {
            toast.classList.remove("show");
        }, 2200);
    }

    /* =========================================
       HTML ESCAPE
    ========================================= */

    function escapeHtmlFeature(value) {
        return String(value ?? "")
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }

    /* =========================================
       WATCHLIST MESSAGE
    ========================================= */

    function improveWatchlistFeedback() {
        document.addEventListener("click", event => {
            const button = event.target.closest("#addWatchlist");

            if (!button) return;

            setTimeout(() => {
                showFeatureToast("❤️ My List updated");
            }, 100);
        });
    }

    /* =========================================
       IMAGE LAZY LOADING
    ========================================= */

    function improveImages() {
        document.querySelectorAll("img").forEach(img => {
            img.loading = "lazy";
            img.decoding = "async";
        });

        const observer = new MutationObserver(() => {
            document.querySelectorAll("img:not([loading])")
                .forEach(img => {
                    img.loading = "lazy";
                    img.decoding = "async";
                });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    /* =========================================
       SCROLL REVEAL
    ========================================= */

    function setupScrollReveal() {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("revealed");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.08
            }
        );

        document
            .querySelectorAll(
                ".movie-card, .show-card, .anime-card, .genre-card"
            )
            .forEach(element => {
                element.classList.add("scroll-reveal");
                observer.observe(element);
            });
    }

    /* =========================================
       DYNAMIC FEATURE CSS
    ========================================= */

    function injectFeatureStyles() {
        if (getEl("hiwaFeatureStyles")) return;

        const style = document.createElement("style");

        style.id = "hiwaFeatureStyles";

        style.textContent = `
            .back-to-top {
                position: fixed;
                right: 22px;
                bottom: 22px;
                width: 48px;
                height: 48px;
                border: 0;
                border-radius: 50%;
                background: #e50914;
                color: white;
                font-size: 24px;
                font-weight: bold;
                cursor: pointer;
                z-index: 9999;
                opacity: 0;
                pointer-events: none;
                transform: translateY(15px);
                transition: .25s ease;
                box-shadow: 0 8px 25px rgba(0,0,0,.35);
            }

            .back-to-top.visible {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0);
            }

            .trending-badge {
                position: absolute;
                top: 10px;
                left: 10px;
                z-index: 5;
                padding: 5px 8px;
                border-radius: 6px;
                background: rgba(0,0,0,.82);
                color: white;
                font-size: 10px;
                font-weight: 800;
                letter-spacing: .4px;
            }

            .scroll-reveal {
                opacity: 0;
                transform: translateY(18px);
                transition:
                    opacity .5s ease,
                    transform .5s ease;
            }

            .scroll-reveal.revealed {
                opacity: 1;
                transform: translateY(0);
            }

            .recently-viewed-section {
                margin-top: 45px;
                margin-bottom: 45px;
            }

            .recently-viewed-section .section-heading {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 20px;
                margin-bottom: 20px;
            }

            .recently-viewed-section h2 {
                margin: 4px 0 0;
            }

            .section-kicker {
                font-size: 11px;
                font-weight: 800;
                letter-spacing: 1.5px;
                opacity: .6;
            }

            .clear-recent {
                border: 1px solid rgba(255,255,255,.15);
                background: transparent;
                color: inherit;
                border-radius: 8px;
                padding: 8px 13px;
                cursor: pointer;
            }

            .recommendations {
                margin-top: 28px;
                padding-top: 25px;
                border-top: 1px solid rgba(255,255,255,.1);
            }

            .recommendation-title span {
                font-size: 10px;
                font-weight: 800;
                letter-spacing: 1.5px;
                opacity: .55;
            }

            .recommendation-title h3 {
                margin: 5px 0 18px;
                font-size: 22px;
            }

            .recommendation-grid {
                display: grid;
                grid-template-columns:
                    repeat(auto-fill, minmax(125px, 1fr));
                gap: 14px;
            }

            .recommendation-card {
                border: 0;
                background: transparent;
                color: inherit;
                text-align: left;
                cursor: pointer;
                padding: 0;
            }

            .recommendation-poster {
                aspect-ratio: 2 / 3;
                overflow: hidden;
                border-radius: 9px;
                background: #111;
                margin-bottom: 8px;
            }

            .recommendation-poster img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                display: block;
                transition: transform .3s ease;
            }

            .recommendation-card:hover img {
                transform: scale(1.05);
            }

            .recommendation-card strong {
                display: block;
                font-size: 13px;
                line-height: 1.3;
            }

            .recommendation-card small {
                opacity: .55;
                font-size: 11px;
            }

            .recommendation-fallback {
                width: 100%;
                height: 100%;
                display: grid;
                place-items: center;
                font-size: 28px;
            }

            @media (max-width: 600px) {
                .back-to-top {
                    right: 14px;
                    bottom: 14px;
                    width: 44px;
                    height: 44px;
                }

                .recommendation-grid {
                    grid-template-columns:
                        repeat(3, minmax(0, 1fr));
                    gap: 10px;
                }

                .recommendation-card strong {
                    font-size: 11px;
                }
            }
        `;

        document.head.appendChild(style);
    }

    /* =========================================
       MODAL HOOK
    ========================================= */

    function hookModalRecommendations() {
        const originalOpen =
            window.openMovieModal;

        if (
            typeof originalOpen !== "function" ||
            window.hiwaRecommendationHooked
        ) {
            return;
        }

        window.openMovieModal = function(movie) {
            originalOpen(movie);

            setTimeout(() => {
                renderRecommendations(movie);
            }, 100);
        };

        window.hiwaRecommendationHooked = true;
    }

    /* =========================================
       START
    ========================================= */

    function initFeatures() {
        injectFeatureStyles();

        createBackToTop();
        setupKeyboardShortcuts();
        improveSearch();
        improveRandomButton();
        trackMovieOpening();
        improveWatchlistFeedback();
        improveImages();

        setTimeout(() => {
            renderRecentlyViewed();
            addTrendingBadges();
            setupScrollReveal();
            hookModalRecommendations();
        }, 500);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initFeatures
        );
    } else {
        initFeatures();
    }

})();
