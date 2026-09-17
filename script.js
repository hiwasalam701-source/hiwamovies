/* =========================================
   HIWAMOVIES
   DYNAMIC MOVIE / TV CATALOG
========================================= */


/* =========================================
   TMDB SETTINGS
========================================= */

// PUT YOUR TMDB API KEY BETWEEN THE QUOTES
const TMDB_API_KEY = 87181806

const TMDB_BASE = "https://api.themoviedb.org/3";
const TMDB_IMAGE = "https://image.tmdb.org/t/p/w500";


/* =========================================
   FALLBACK / LEGAL DEMO MOVIES
========================================= */

let movies = [

    {
        id: "local-1",
        type: "movie",
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        runtime: "2h 28m",
        description:
            "A skilled thief enters people's dreams to steal secrets and attempts an impossible mission.",
        accent: "#563d7c"
    },

    {
        id: "local-2",
        type: "movie",
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.7,
        runtime: "2h 49m",
        description:
            "Explorers travel through a wormhole in search of a new home for humanity.",
        accent: "#263b73"
    },

    {
        id: "local-3",
        type: "movie",
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        runtime: "2h 32m",
        description:
            "Batman faces a criminal mastermind who plunges Gotham into chaos.",
        accent: "#252525"
    },

    {
        id: "local-4",
        type: "movie",
        title: "Gladiator",
        year: 2000,
        genre: "Action",
        rating: 8.5,
        runtime: "2h 35m",
        description:
            "A betrayed Roman general fights his way back toward justice and revenge.",
        accent: "#704d35"
    },

    {
        id: "local-5",
        type: "movie",
        title: "Whiplash",
        year: 2014,
        genre: "Drama",
        rating: 8.5,
        runtime: "1h 46m",
        description:
            "A young drummer pushes himself to the limit under an intense music instructor.",
        accent: "#4d2929"
    },

    {
        id: "local-6",
        type: "movie",
        title: "Parasite",
        year: 2019,
        genre: "Thriller",
        rating: 8.5,
        runtime: "2h 12m",
        description:
            "Two families become unexpectedly connected as their lives collide.",
        accent: "#35543c"
    },

    {
        id: "local-7",
        type: "movie",
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
        rating: 8.7,
        runtime: "2h 16m",
        description:
            "A computer hacker discovers that reality is not what it seems.",
        accent: "#164d37"
    },

    {
        id: "local-8",
        type: "movie",
        title: "Dune",
        year: 2021,
        genre: "Sci-Fi",
        rating: 8.0,
        runtime: "2h 35m",
        description:
            "A young heir becomes caught in an enormous conflict over a desert planet.",
        accent: "#725331"
    },

    {
        id: "local-9",
        type: "movie",
        title: "Oppenheimer",
        year: 2023,
        genre: "Drama",
        rating: 8.6,
        runtime: "3h",
        description:
            "The story of the scientist who led the development of the atomic bomb.",
        accent: "#51423a"
    },

    {
        id: "local-10",
        type: "movie",
        title: "Avengers: Endgame",
        year: 2019,
        genre: "Action",
        rating: 8.4,
        runtime: "3h 1m",
        description:
            "The Avengers attempt to undo the devastating events that changed their universe.",
        accent: "#3b3030"
    },

    {
        id: "local-11",
        type: "movie",
        title: "Spider-Man",
        year: 2002,
        genre: "Action",
        rating: 7.4,
        runtime: "2h 1m",
        description:
            "A teenager gains incredible abilities and learns what it means to be a hero.",
        accent: "#612d35"
    },

    {
        id: "local-12",
        type: "movie",
        title: "John Wick",
        year: 2014,
        genre: "Action",
        rating: 7.4,
        runtime: "1h 41m",
        description:
            "A legendary former assassin is pulled back into the criminal world.",
        accent: "#222b3d"
    },

    {
        id: "local-13",
        type: "movie",
        title: "Get Out",
        year: 2017,
        genre: "Horror",
        rating: 7.8,
        runtime: "1h 44m",
        description:
            "A young man discovers disturbing secrets during a visit to his girlfriend's family.",
        accent: "#433329"
    },

    {
        id: "local-14",
        type: "movie",
        title: "Superbad",
        year: 2007,
        genre: "Comedy",
        rating: 7.6,
        runtime: "1h 53m",
        description:
            "Two best friends try to make the most of their final days before graduation.",
        accent: "#55552e"
    },

    {
        id: "local-15",
        type: "movie",
        title: "Mad Max: Fury Road",
        year: 2015,
        genre: "Action",
        rating: 8.1,
        runtime: "2h",
        description:
            "A thrilling chase across a post-apocalyptic wasteland.",
        accent: "#7b4527"
    },

    {
        id: "local-16",
        type: "movie",
        title: "Arrival",
        year: 2016,
        genre: "Sci-Fi",
        rating: 7.9,
        runtime: "1h 56m",
        description:
            "A linguist works to communicate with mysterious visitors from another world.",
        accent: "#35414d"
    },

    {
        id: "local-101",
        type: "show",
        title: "The Walking Dead",
        year: 2010,
        genre: "Drama",
        rating: 8.1,
        runtime: "11 seasons",
        description:
            "Survivors struggle to rebuild their lives in a world transformed by a mysterious outbreak."
    },

    {
        id: "local-102",
        type: "show",
        title: "Stranger Things",
        year: 2016,
        genre: "Sci-Fi",
        rating: 8.6,
        runtime: "5 seasons",
        description:
            "A group of friends uncover strange experiments and supernatural mysteries in their town."
    },

    {
        id: "local-103",
        type: "show",
        title: "Breaking Bad",
        year: 2008,
        genre: "Drama",
        rating: 9.5,
        runtime: "5 seasons",
        description:
            "A chemistry teacher's life takes a dramatic turn after he enters the criminal world."
    },

    {
        id: "local-104",
        type: "show",
        title: "The Last of Us",
        year: 2023,
        genre: "Drama",
        rating: 8.7,
        runtime: "2 seasons",
        description:
            "A hardened survivor escorts a young girl across a dangerous post-apocalyptic America."
    },

    {
        id: "local-201",
        type: "anime",
        title: "One Piece",
        year: 1999,
        genre: "Adventure",
        rating: 9.0,
        runtime: "1000+ episodes",
        description:
            "Monkey D. Luffy and his crew sail across the Grand Line in search of the legendary treasure."
    },

    {
        id: "local-202",
        type: "anime",
        title: "Attack on Titan",
        year: 2013,
        genre: "Action",
        rating: 9.1,
        runtime: "89 episodes",
        description:
            "Humanity fights for survival behind enormous walls against mysterious giants."
    },

    {
        id: "local-203",
        type: "anime",
        title: "Demon Slayer",
        year: 2019,
        genre: "Action",
        rating: 8.6,
        runtime: "4 seasons",
        description:
            "A young swordsman joins the Demon Slayer Corps while searching for a way to save his sister."
    },

    {
        id: "local-204",
        type: "anime",
        title: "Hunter x Hunter",
        year: 2011,
        genre: "Adventure",
        rating: 9.0,
        runtime: "148 episodes",
        description:
            "A young boy sets out to become a Hunter and find his mysterious father."
    },

    {
        id: "local-205",
        type: "anime",
        title: "Death Note",
        year: 2006,
        genre: "Thriller",
        rating: 8.6,
        runtime: "37 episodes",
        description:
            "A student discovers a mysterious notebook capable of changing people's lives."
    },

    {
        id: "legal-bbb",
        type: "movie",
        title: "Big Buck Bunny",
        year: 2008,
        genre: "Animation",
        rating: 7.0,
        runtime: "10m",
        description:
            "A charming animated short film created by the Blender Foundation.",
        videoUrl:
            "https://download.blender.org/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4",
        accent: "#39552f"
    }
];


/* =========================================
   STATE
========================================= */

let activeType = "all";
let activeGenre = "all";
let visibleCount = 12;
let selectedMovie = null;

let moviePage = 1;
let tvPage = 1;

let loadingMovies = false;
let loadingTV = false;

const WATCHLIST_KEY = "hiwamovies-watchlist";


/* =========================================
   DOM HELPERS
========================================= */

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);


/* =========================================
   HTML ESCAPE
========================================= */

function escapeHtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================
   TYPE LABEL
========================================= */

function getTypeLabel(type) {
    if (type === "show") return "TV";
    if (type === "anime") return "ANIME";
    return "MOVIE";
}


/* =========================================
   TMDB REQUEST
========================================= */

async function tmdbRequest(endpoint, params = {}) {

    if (
        !TMDB_API_KEY ||
        TMDB_API_KEY === "PASTE_YOUR_TMDB_API_KEY_HERE"
    ) {
        console.warn("TMDB API key has not been added.");
        return null;
    }

    const url = new URL(`${TMDB_BASE}/${endpoint}`);

    url.searchParams.set("api_key", TMDB_API_KEY);
    url.searchParams.set("language", "en-US");

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    try {

        const response = await fetch(url);

        if (!response.ok) {
            console.error(
                "TMDB request failed:",
                response.status
            );

            return null;
        }

        return await response.json();

    } catch (error) {

        console.error("TMDB error:", error);

        return null;
    }
}


/* =========================================
   CONVERT TMDB MOVIE
========================================= */

function convertTMDBMovie(item) {

    if (!item || !item.id) return null;

    return {

        id: `tmdb-movie-${item.id}`,

        tmdbId: item.id,

        type: "movie",

        title:
            item.title ||
            item.original_title ||
            "Unknown",

        year:
            item.release_date
                ? item.release_date.substring(0, 4)
                : "—",

        genre:
            getGenreName(item.genre_ids),

        rating:
            Number(item.vote_average || 0).toFixed(1),

        runtime: "Movie",

        description:
            item.overview ||
            "No description available.",

        poster:
            item.poster_path
                ? `${TMDB_IMAGE}${item.poster_path}`
                : null
    };
}


/* =========================================
   CONVERT TMDB TV
========================================= */

function convertTMDBTV(item) {

    if (!item || !item.id) return null;

    return {

        id: `tmdb-tv-${item.id}`,

        tmdbId: item.id,

        type: "show",

        title:
            item.name ||
            item.original_name ||
            "Unknown",

        year:
            item.first_air_date
                ? item.first_air_date.substring(0, 4)
                : "—",

        genre:
            getGenreName(item.genre_ids),

        rating:
            Number(item.vote_average || 0).toFixed(1),

        runtime: "TV Series",

        description:
            item.overview ||
            "No description available.",

        poster:
            item.poster_path
                ? `${TMDB_IMAGE}${item.poster_path}`
                : null
    };
}


/* =========================================
   GENRES
========================================= */

const genreNames = {

    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",

    10759: "Action",
    10762: "Kids",
    10763: "News",
    10764: "Reality",
    10765: "Sci-Fi",
    10766: "Soap",
    10767: "Talk",
    10768: "War"
};


function getGenreName(ids) {

    if (!ids || !ids.length) {
        return "Other";
    }

    const name = genreNames[ids[0]];

    return name || "Other";
}


/* =========================================
   ADD WITHOUT DUPLICATES
========================================= */

function addToCatalog(items) {

    if (!Array.isArray(items)) return;

    const existing = new Set(
        movies.map(movie => String(movie.id))
    );

    items.forEach(movie => {

        if (!movie) return;

        const id = String(movie.id);

        if (!existing.has(id)) {

            movies.push(movie);

            existing.add(id);
        }
    });
}


/* =========================================
   LOAD MORE MOVIES
========================================= */

async function loadMoreMovies() {

    if (loadingMovies) return;

    loadingMovies = true;

    const data = await tmdbRequest(
        "discover/movie",
        {
            page: moviePage,
            sort_by: "popularity.desc",
            include_adult: "false"
        }
    );

    if (data?.results) {

        const converted =
            data.results
                .map(convertTMDBMovie)
                .filter(Boolean);

        addToCatalog(converted);

        moviePage++;
    }

    loadingMovies = false;

    renderMovies();
}


/* =========================================
   LOAD MORE TV
========================================= */

async function loadMoreTV() {

    if (loadingTV) return;

    loadingTV = true;

    const data = await tmdbRequest(
        "discover/tv",
        {
            page: tvPage,
            sort_by: "popularity.desc",
            include_adult: "false"
        }
    );

    if (data?.results) {

        const converted =
            data.results
                .map(convertTMDBTV)
                .filter(Boolean);

        addToCatalog(converted);

        tvPage++;
    }

    loadingTV = false;

    renderMovies();
    renderShows();
}


/* =========================================
   POSTER
========================================= */

function createPoster(movie) {

    if (movie.poster) {

        return `
            <img
                src="${escapeHtml(movie.poster)}"
                alt="${escapeHtml(movie.title)}"
                loading="lazy"
            >
        `;
    }

    const firstLetter =
        escapeHtml(
            movie.title.charAt(0).toUpperCase()
        );

    const accent =
        movie.accent || "#252a33";

    return `
        <div
            class="poster-fallback"
            style="
                background:
                radial-gradient(
                    circle at 20% 20%,
                    rgba(255,255,255,.12),
                    transparent 25%
                ),
                linear-gradient(
                    145deg,
                    ${accent},
                    #08090c 75%
                );
            "
        >
            <span class="poster-letter">
                ${firstLetter}
            </span>

            <strong>
                ${escapeHtml(movie.title)}
            </strong>

            <small>
                ${getTypeLabel(movie.type)}
            </small>
        </div>
    `;
}


/* =========================================
   MOVIE CARD
========================================= */

function createMovieCard(movie) {

    const isSaved =
        getWatchlist()
            .map(String)
            .includes(String(movie.id));

    return `
        <article
            class="movie-card"
            data-id="${escapeHtml(movie.id)}"
        >

            <button
                class="movie-card-button"
                type="button"
                data-open-movie="${escapeHtml(movie.id)}"
                aria-label="Open ${escapeHtml(movie.title)}"
            >

                <div class="movie-poster">

                    ${createPoster(movie)}

                    <div class="movie-overlay">
                        <span class="play-circle">
                            ▶
                        </span>
                    </div>

                    <span class="type-badge">
                        ${getTypeLabel(movie.type)}
                    </span>

                    <span class="rating-badge">
                        ★ ${movie.rating}
                    </span>

                </div>

                <div class="movie-card-info">

                    <h3>
                        ${escapeHtml(movie.title)}
                    </h3>

                    <div class="movie-card-meta">

                        <span>
                            ${movie.year}
                        </span>

                        <span>•</span>

                        <span>
                            ${escapeHtml(movie.genre)}
                        </span>

                    </div>

                </div>

            </button>

            <button
                class="card-list-button ${isSaved ? "saved" : ""}"
                type="button"
                data-toggle-watchlist="${escapeHtml(movie.id)}"
                aria-label="${isSaved ? "Remove from" : "Add to"} My List"
            >
                ${isSaved ? "♥" : "♡"}
            </button>

        </article>
    `;
}


/* =========================================
   FILTER
========================================= */

function getFilteredMovies() {

    return movies.filter(movie => {

        const typeMatches =
            activeType === "all" ||
            movie.type === activeType;

        const genreMatches =
            activeGenre === "all" ||
            movie.genre === activeGenre;

        return typeMatches && genreMatches;
    });
}


/* =========================================
   RENDER MOVIES
========================================= */

function renderMovies() {

    const grid = $("#movieGrid");
    const loadMore = $("#loadMore");

    if (!grid) return;

    const filtered =
        getFilteredMovies();

    const visible =
        filtered.slice(0, visibleCount);

    if (!visible.length) {

        grid.innerHTML = `
            <div class="empty-state grid-empty">

                <div class="empty-icon">
                    ⌕
                </div>

                <h3>
                    Nothing found
                </h3>

                <p>
                    Try another genre or media type.
                </p>

            </div>
        `;

        if (loadMore) {
            loadMore.hidden = true;
        }

        return;
    }

    grid.innerHTML =
        visible
            .map(createMovieCard)
            .join("");

    if (loadMore) {

        loadMore.hidden =
            visible.length >= filtered.length;
    }

    bindDynamicButtons();
}


/* =========================================
   SHOWS
========================================= */

function renderShows() {

    const grid = $("#showGrid");

    if (!grid) return;

    const shows =
        movies
            .filter(movie => movie.type === "show")
            .slice(0, 8);

    grid.innerHTML =
        shows
            .map(createMovieCard)
            .join("");

    bindDynamicButtons();
}


/* =========================================
   ANIME
========================================= */

function renderAnime() {

    const grid = $("#animeGrid");

    if (!grid) return;

    const anime =
        movies
            .filter(movie => movie.type === "anime")
            .slice(0, 8);

    grid.innerHTML =
        anime
            .map(createMovieCard)
            .join("");

    bindDynamicButtons();
}


/* =========================================
   WATCHLIST
========================================= */

function getWatchlist() {

    try {

        const saved =
            localStorage.getItem(
                WATCHLIST_KEY
            );

        return saved
            ? JSON.parse(saved)
            : [];

    } catch {

        return [];
    }
}


function saveWatchlist(list) {

    localStorage.setItem(
        WATCHLIST_KEY,
        JSON.stringify(list)
    );
}


function toggleWatchlist(id) {

    const movieId = String(id);

    let list =
        getWatchlist()
            .map(String);

    if (list.includes(movieId)) {

        list =
            list.filter(
                item => item !== movieId
            );

        showToast(
            "Removed from My List"
        );

    } else {

        list.push(movieId);

        showToast(
            "Added to My List ♥"
        );
    }

    saveWatchlist(list);

    renderMovies();
    renderShows();
    renderAnime();
    renderWatchlist();

    if (
        selectedMovie &&
        String(selectedMovie.id) === movieId
    ) {
        updateWatchlistButton();
    }
}


/* =========================================
   RENDER WATCHLIST
========================================= */

function renderWatchlist() {

    const grid = $("#watchlistGrid");
    const empty = $("#emptyWatchlist");

    if (!grid) return;

    const ids =
        getWatchlist()
            .map(String);

    const savedMovies =
        ids
            .map(id =>
                movies.find(
                    movie =>
                        String(movie.id) === id
                )
            )
            .filter(Boolean);

    if (!savedMovies.length) {

        grid.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;
    }

    if (empty) {
        empty.hidden = true;
    }

    grid.innerHTML =
        savedMovies
            .map(createMovieCard)
            .join("");

    bindDynamicButtons();
}


/* =========================================
   OPEN MOVIE
========================================= */

function openMovie(movieId) {

    const movie =
        movies.find(
            item =>
                String(item.id) === String(movieId)
        );

    if (!movie) return;

    selectedMovie = movie;

    const modal = $("#movieModal");
    const title = $("#modalTitle");
    const genre = $("#modalGenre");
    const meta = $("#modalMeta");
    const rating = $("#modalRating");
    const description = $("#modalDescription");
    const poster = $("#modalPoster");
    const playerWrap = $("#modalPlayerWrap");
    const video = $("#modalVideo");

    if (!modal) return;

    if (title) {
        title.textContent =
            movie.title;
    }

    if (genre) {
        genre.textContent =
            `${getTypeLabel(movie.type)} • ${movie.genre}`;
    }

    if (meta) {
        meta.textContent =
            `${movie.year} • ${movie.runtime}`;
    }

    if (rating) {
        rating.textContent =
            `★ ${movie.rating}`;
    }

    if (description) {
        description.textContent =
            movie.description;
    }

    if (poster) {

        if (movie.poster) {

            poster.src =
                movie.poster;

            poster.style.display =
                "block";

        } else {

            poster.removeAttribute(
                "src"
            );

            poster.style.display =
                "none";
        }
    }

    if (playerWrap) {
        playerWrap.hidden = true;
    }

    if (video) {

        video.pause();

        video.removeAttribute(
            "src"
        );

        video.load();
    }

    updateWatchlistButton();

    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}


/* =========================================
   CLOSE MOVIE
========================================= */

function closeMovie() {

    const modal = $("#movieModal");
    const video = $("#modalVideo");

    if (video) {

        video.pause();

        video.removeAttribute(
            "src"
        );

        video.load();
    }

    if (modal) {

        modal.classList.remove(
            "open"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );
    }

    document.body.classList.remove(
        "modal-open"
    );
}


/* =========================================
   WATCHLIST BUTTON
========================================= */

function updateWatchlistButton() {

    const button =
        $("#addWatchlist");

    if (!button || !selectedMovie) {
        return;
    }

    const saved =
        getWatchlist()
            .map(String)
            .includes(
                String(selectedMovie.id)
            );

    button.textContent =
        saved
            ? "♥ In My List"
            : "♡ My List";
}


/* =========================================
   LEGAL VIDEO PLAYER
========================================= */

function watchSelectedMovie() {

    if (!selectedMovie) return;

    const video =
        $("#modalVideo");

    const playerWrap =
        $("#modalPlayerWrap");

    if (!video || !playerWrap) {
        return;
    }

    if (!selectedMovie.videoUrl) {

        showToast(
            "No licensed video source is configured for this title."
        );

        return;
    }

    playerWrap.hidden = false;

    video.src =
        selectedMovie.videoUrl;

    video.load();

    const playPromise =
        video.play();

    if (
        playPromise &&
        typeof playPromise.catch === "function"
    ) {

        playPromise.catch(() => {

            showToast(
                "Press ▶ on the player to start the video."
            );
        });
    }
}


/* =========================================
   SEARCH TMDB
========================================= */

let searchTimer = null;

async function searchTMDB(query) {

    const data =
        await tmdbRequest(
            "search/multi",
            {
                query: query,
                include_adult: "false",
                page: 1
            }
        );

    if (!data?.results) {
        return [];
    }

    return data.results
        .filter(
            item =>
                item.media_type === "movie" ||
                item.media_type === "tv"
        )
        .map(item => {

            if (item.media_type === "movie") {
                return convertTMDBMovie(item);
            }

            return convertTMDBTV(item);
        })
        .filter(Boolean);
}


/* =========================================
   SEARCH UI
========================================= */

function openSearch() {

    const overlay =
        $("#searchOverlay");

    const input =
        $("#searchInput");

    if (!overlay) return;

    overlay.classList.add(
        "open"
    );

    if (input) {

        input.value = "";

        renderSearchResults("");

        setTimeout(
            () => input.focus(),
            50
        );
    }
}


function closeSearch() {

    const overlay =
        $("#searchOverlay");

    if (overlay) {

        overlay.classList.remove(
            "open"
        );
    }
}


/* =========================================
   RENDER SEARCH
========================================= */

async function renderSearchResults(query) {

    const results =
        $("#searchResults");

    if (!results) return;

    const cleanQuery =
        query.trim();

    if (!cleanQuery) {

        results.innerHTML = `
            <div class="search-empty">
                Start typing to search.
            </div>
        `;

        return;
    }

    results.innerHTML = `
        <div class="search-empty">
            Searching...
        </div>
    `;

    clearTimeout(searchTimer);

    searchTimer =
        setTimeout(
            async () => {

                const localMatches =
                    movies.filter(movie => {

                        const searchable = [
                            movie.title,
                            movie.genre,
                            movie.year,
                            movie.type
                        ]
                            .join(" ")
                            .toLowerCase();

                        return searchable.includes(
                            cleanQuery.toLowerCase()
                        );
                    });

                let apiMatches = [];

                if (
                    TMDB_API_KEY &&
                    TMDB_API_KEY !==
                    "PASTE_YOUR_TMDB_API_KEY_HERE"
                ) {

                    apiMatches =
                        await searchTMDB(
                            cleanQuery
                        );

                    addToCatalog(
                        apiMatches
                    );
                }

                const combined = [
                    ...localMatches,
                    ...apiMatches
                ];

                const unique = [];

                const seen =
                    new Set();

                combined.forEach(movie => {

                    const key =
                        String(movie.id);

                    if (!seen.has(key)) {

                        seen.add(key);

                        unique.push(movie);
                    }
                });

                if (!unique.length) {

                    results.innerHTML = `
                        <div class="search-empty">
                            No results for
                            "${escapeHtml(query)}"
                        </div>
                    `;

                    return;
                }

                results.innerHTML =
                    unique
                        .slice(0, 20)
                        .map(movie => `

                            <button
                                class="search-result"
                                type="button"
                                data-search-movie="${escapeHtml(movie.id)}"
                            >

                                <div class="search-result-poster">
                                    ${createPoster(movie)}
                                </div>

                                <div class="search-result-info">

                                    <strong>
                                        ${escapeHtml(movie.title)}
                                    </strong>

                                    <span>
                                        ${movie.year}
                                        •
                                        ${escapeHtml(movie.genre)}
                                        •
                                        ★ ${movie.rating}
                                    </span>

                                </div>

                            </button>

                        `)
                        .join("");

                $$(".search-result")
                    .forEach(button => {

                        button.addEventListener(
                            "click",
                            () => {

                                closeSearch();

                                openMovie(
                                    button.dataset.searchMovie
                                );
                            }
                        );
                    });

            },
            250
        );
}


/* =========================================
   TOAST
========================================= */

let toastTimer;

function showToast(message) {

    const toast =
        $("#toast");

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    clearTimeout(
        toastTimer
    );

    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );
}


/* =========================================
   MOBILE MENU
========================================= */

function toggleMobileMenu() {

    const menu =
        $("#mobileMenu");

    const button =
        $("#mobileMenuButton");

    if (!menu) return;

    const open =
        menu.classList.toggle(
            "open"
        );

    if (button) {

        button.setAttribute(
            "aria-expanded",
            String(open)
        );
    }
}


function closeMobileMenu() {

    const menu =
        $("#mobileMenu");

    const button =
        $("#mobileMenuButton");

    if (menu) {
        menu.classList.remove(
            "open"
        );
    }

    if (button) {

        button.setAttribute(
            "aria-expanded",
            "false"
        );
    }
}


/* =========================================
   SCROLL
========================================= */

function scrollToSection(id) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================
   RANDOM
========================================= */

function openRandomMovie() {

    if (!movies.length) return;

    const randomMovie =
        movies[
            Math.floor(
                Math.random() *
                movies.length
            )
        ];

    openMovie(
        randomMovie.id
    );
}


/* =========================================
   TYPE FILTER
========================================= */

function setTypeFilter(type) {

    activeType = type;

    visibleCount = 12;

    $$(".media-filter")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.type === type
            );
        });

    renderMovies();
}


/* =========================================
   GENRE FILTER
========================================= */

function setGenreFilter(genre) {

    activeGenre = genre;

    visibleCount = 12;

    $$(".filter")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === genre
            );
        });

    renderMovies();
}


/* =========================================
   VIEW ALL
========================================= */

function viewAllType(type) {

    activeType = type;

    activeGenre = "all";

    visibleCount =
        movies.length;

    $$(".media-filter")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.type === type
            );
        });

    $$(".filter")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.filter === "all"
            );
        });

    renderMovies();

    scrollToSection(
        "movies"
    );
}


/* =========================================
   DYNAMIC BUTTONS
========================================= */

function bindDynamicButtons() {

    $$("[data-open-movie]")
        .forEach(button => {

            button.onclick =
                event => {

                    event.stopPropagation();

                    openMovie(
                        button.dataset.openMovie
                    );
                };
        });

    $$("[data-toggle-watchlist]")
        .forEach(button => {

            button.onclick =
                event => {

                    event.stopPropagation();

                    toggleWatchlist(
                        button.dataset.toggleWatchlist
                    );
                };
        });
}


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    async () => {

        /* Initial local catalog */

        renderMovies();
        renderShows();
        renderAnime();
        renderWatchlist();


        /* Current year */

        const year =
            $("#currentYear");

        if (year) {

            year.textContent =
                new Date()
                    .getFullYear();
        }


        /* Search */

        const openSearchButton =
            $("#openSearch");

        const closeSearchButton =
            $("#closeSearch");

        const mobileSearchButton =
            $("#mobileSearchButton");

        const searchInput =
            $("#searchInput");

        const searchOverlay =
            $("#searchOverlay");


        if (openSearchButton) {

            openSearchButton.addEventListener(
                "click",
                openSearch
            );
        }


        if (closeSearchButton) {

            closeSearchButton.addEventListener(
                "click",
                closeSearch
            );
        }


        if (mobileSearchButton) {

            mobileSearchButton.addEventListener(
                "click",
                () => {

                    closeMobileMenu();

                    openSearch();
                }
            );
        }


        if (searchInput) {

            searchInput.addEventListener(
                "input",
                () => {

                    renderSearchResults(
                        searchInput.value
                    );
                }
            );
        }


        if (searchOverlay) {

            searchOverlay.addEventListener(
                "click",
                event => {

                    if (
                        event.target ===
                        searchOverlay
                    ) {
                        closeSearch();
                    }
                }
            );
        }


        /* Mobile menu */

        const mobileMenuButton =
            $("#mobileMenuButton");

        if (mobileMenuButton) {

            mobileMenuButton.addEventListener(
                "click",
                toggleMobileMenu
            );
        }


        /* Navigation */

        $(
            ".nav-link, .mobile-nav-link, .footer-links a"
        ).forEach(link => {

            link.addEventListener(
                "click",
                closeMobileMenu
            );
        });


        /* Explore */

        const exploreButton =
            $("#exploreButton");

        if (exploreButton) {

            exploreButton.addEventListener(
                "click",
                () => {

                    scrollToSection(
                        "movies"
                    );
                }
            );
        }


        /* Random */

        const randomButton =
            $("#randomButton");

        if (randomButton) {

            randomButton.addEventListener(
                "click",
                openRandomMovie
            );
        }


        /* Media filters */

        $$(".media-filter")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        setTypeFilter(
                            button.dataset.type
                        );
                    }
                );
            });


        /* Genre filters */

        $$(".filter")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        setGenreFilter(
                            button.dataset.filter
                        );
                    }
                );
            });


        /* Load more */

        const loadMore =
            $("#loadMore");

        if (loadMore) {

            loadMore.addEventListener(
                "click",
                async () => {

                    visibleCount += 12;

                    renderMovies();

                    /*
                     * Keep loading the catalog
                     * when the user gets near
                     * the end.
                     */

                    if (
                        visibleCount >
                        movies.length - 12
                    ) {

                        await Promise.all([
                            loadMoreMovies(),
                            loadMoreTV()
                        ]);
                    }
                }
            );
        }


        /* Genre cards */

        $$(".genre-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        const genre =
                            card.dataset.genre;

                        setTypeFilter(
                            "all"
                        );

                        setGenreFilter(
                            genre
                        );

                        scrollToSection(
                            "movies"
                        );
                    }
                );
            });


        /* View all */

        $$("[data-view-type]")
            .forEach(button => {

                button.addEventListener(
                    "click",
                    () => {

                        viewAllType(
                            button.dataset.viewType
                        );
                    }
                );
            });


        /* Featured */

        const featuredButton =
            $("#featuredButton");

        if (featuredButton) {

            featuredButton.addEventListener(
                "click",
                () => {

                    openMovie(
                        featuredButton.dataset.movieId
                    );
                }
            );
        }


        /* Modal */

        const modalClose =
            $("#modalClose");

        const modalBackdrop =
            $("#modalBackdrop");

        if (modalClose) {

            modalClose.addEventListener(
                "click",
                closeMovie
            );
        }

        if (modalBackdrop) {

            modalBackdrop.addEventListener(
                "click",
                closeMovie
            );
        }


        /* Watch */

        const watchNow =
            $("#watchNow");

        if (watchNow) {

            watchNow.addEventListener(
                "click",
                watchSelectedMovie
            );
        }


        /* My List */

        const addWatchlist =
            $("#addWatchlist");

        if (addWatchlist) {

            addWatchlist.addEventListener(
                "click",
                () => {

                    if (selectedMovie) {

                        toggleWatchlist(
                            selectedMovie.id
                        );
                    }
                }
            );
        }


        /* Keyboard */

        document.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Escape"
                ) {

                    closeSearch();

                    closeMovie();

                    closeMobileMenu();
                }

                if (
                    event.key === "/" &&
                    document.activeElement?.tagName !==
                        "INPUT" &&
                    document.activeElement?.tagName !==
                        "TEXTAREA"
                ) {

                    event.preventDefault();

                    openSearch();
                }
            }
        );


        /* Load first huge catalog pages */

        if (
            TMDB_API_KEY &&
            TMDB_API_KEY !==
                "PASTE_YOUR_TMDB_API_KEY_HERE"
        ) {

            await Promise.all([
                loadMoreMovies(),
                loadMoreTV()
            ]);

            renderMovies();
            renderShows();
            renderAnime();
            renderWatchlist();

        } else {

            console.warn(
                "HIWAMOVIES: Add your TMDB API key to load the large catalog."
            );
        }

    }
);
