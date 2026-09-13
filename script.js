/* =========================================
   HIWAMOVIES — UPGRADED JAVASCRIPT
========================================= */

const movies = [

  /* =========================
     MOVIES
  ========================= */

  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    runtime: "2h 28m",
    type: "movie",
    description:
      "A skilled team enters the dreams of others to perform an unusual kind of mission.",
    accent: "dream"
  },

  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: "2h 49m",
    type: "movie",
    description:
      "A group of explorers travel beyond our solar system searching for a future for humanity.",
    accent: "space"
  },

  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    rating: 9.0,
    runtime: "2h 32m",
    type: "movie",
    description:
      "Batman faces a dangerous criminal who pushes Gotham into chaos.",
    accent: "gotham"
  },

  {
    id: 4,
    title: "Gladiator",
    year: 2000,
    genre: "Action",
    rating: 8.5,
    runtime: "2h 35m",
    type: "movie",
    description:
      "A Roman general fights his way back after losing everything.",
    accent: "roman"
  },

  {
    id: 5,
    title: "Whiplash",
    year: 2014,
    genre: "Drama",
    rating: 8.5,
    runtime: "1h 46m",
    type: "movie",
    description:
      "A young musician is pushed to his limits by an extremely demanding instructor.",
    accent: "music"
  },

  {
    id: 6,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    rating: 8.5,
    runtime: "2h 12m",
    type: "movie",
    description:
      "Two families from completely different worlds become unexpectedly connected.",
    accent: "parasite"
  },

  {
    id: 7,
    title: "The Matrix",
    year: 1999,
    genre: "Sci-Fi",
    rating: 8.7,
    runtime: "2h 16m",
    type: "movie",
    description:
      "A computer programmer discovers that reality may not be what it seems.",
    accent: "matrix"
  },

  {
    id: 8,
    title: "Dune",
    year: 2021,
    genre: "Adventure",
    rating: 8.0,
    runtime: "2h 35m",
    type: "movie",
    description:
      "A young nobleman becomes caught in a massive struggle over a desert planet.",
    accent: "dune"
  },

  {
    id: 9,
    title: "Oppenheimer",
    year: 2023,
    genre: "Drama",
    rating: 8.6,
    runtime: "3h",
    type: "movie",
    description:
      "A historical drama following the scientist at the center of a world-changing project.",
    accent: "oppenheimer"
  },

  {
    id: 10,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Action",
    rating: 8.4,
    runtime: "3h 1m",
    type: "movie",
    description:
      "The remaining heroes attempt to undo a devastating event and restore what was lost.",
    accent: "avengers"
  },

  {
    id: 11,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: "Animation",
    rating: 8.4,
    runtime: "1h 57m",
    type: "movie",
    description:
      "A teenager discovers that becoming a hero means more than wearing a mask.",
    accent: "spider"
  },

  {
    id: 12,
    title: "The Prestige",
    year: 2006,
    genre: "Drama",
    rating: 8.5,
    runtime: "2h 10m",
    type: "movie",
    description:
      "Two rival performers become obsessed with surpassing each other's greatest tricks.",
    accent: "prestige"
  },

  {
    id: 13,
    title: "John Wick",
    year: 2014,
    genre: "Action",
    rating: 7.4,
    runtime: "1h 41m",
    type: "movie",
    description:
      "A retired assassin is pulled back into a dangerous world he left behind.",
    accent: "wick"
  },

  {
    id: 14,
    title: "Get Out",
    year: 2017,
    genre: "Horror",
    rating: 7.8,
    runtime: "1h 44m",
    type: "movie",
    description:
      "A weekend visit becomes increasingly strange and unsettling.",
    accent: "getout"
  },

  {
    id: 15,
    title: "Superbad",
    year: 2007,
    genre: "Comedy",
    rating: 7.6,
    runtime: "1h 53m",
    type: "movie",
    description:
      "Two friends attempt to make the most of their final days before graduation.",
    accent: "comedy"
  },

  {
    id: 16,
    title: "Mad Max: Fury Road",
    year: 2015,
    genre: "Action",
    rating: 8.1,
    runtime: "2h",
    type: "movie",
    description:
      "A relentless chase unfolds across a dangerous post-apocalyptic wasteland.",
    accent: "madmax"
  },

  {
    id: 17,
    title: "The Social Network",
    year: 2010,
    genre: "Drama",
    rating: 7.8,
    runtime: "2h",
    type: "movie",
    description:
      "The rise of a revolutionary social platform changes the lives of its creators.",
    accent: "social"
  },

  {
    id: 18,
    title: "A Quiet Place",
    year: 2018,
    genre: "Horror",
    rating: 7.5,
    runtime: "1h 30m",
    type: "movie",
    description:
      "A family attempts to survive in a world where making noise can be dangerous.",
    accent: "quiet"
  },

  {
    id: 19,
    title: "The Hangover",
    year: 2009,
    genre: "Comedy",
    rating: 7.7,
    runtime: "1h 40m",
    type: "movie",
    description:
      "A group of friends wake up after an unforgettable night and try to piece together what happened.",
    accent: "hangover"
  },

  {
    id: 20,
    title: "Arrival",
    year: 2016,
    genre: "Sci-Fi",
    rating: 7.9,
    runtime: "1h 56m",
    type: "movie",
    description:
      "A linguist works to understand mysterious visitors who have arrived on Earth.",
    accent: "arrival"
  },


  /* =========================
     TV SHOWS
  ========================= */

  {
    id: 101,
    title: "The Walking Dead",
    year: 2010,
    genre: "Drama",
    rating: 8.1,
    runtime: "11 seasons",
    type: "show",
    description:
      "A group of survivors tries to build a life in a world transformed by a mysterious outbreak.",
    accent: "quiet"
  },

  {
    id: 102,
    title: "Stranger Things",
    year: 2016,
    genre: "Sci-Fi",
    rating: 8.6,
    runtime: "5 seasons",
    type: "show",
    description:
      "A group of friends uncover strange events in their small town.",
    accent: "matrix"
  },

  {
    id: 103,
    title: "Breaking Bad",
    year: 2008,
    genre: "Drama",
    rating: 9.5,
    runtime: "5 seasons",
    type: "show",
    description:
      "A chemistry teacher's life changes dramatically after a serious diagnosis.",
    accent: "social"
  },

  {
    id: 104,
    title: "The Last of Us",
    year: 2023,
    genre: "Drama",
    rating: 8.7,
    runtime: "2 seasons",
    type: "show",
    description:
      "A hardened survivor escorts a teenager across a dangerous post-apocalyptic world.",
    accent: "arrival"
  },


  /* =========================
     ANIME
  ========================= */

  {
    id: 201,
    title: "One Piece",
    year: 1999,
    genre: "Adventure",
    rating: 9.0,
    runtime: "1000+ episodes",
    type: "anime",
    description:
      "A young pirate and his crew set out to find the legendary One Piece.",
    accent: "avengers"
  },

  {
    id: 202,
    title: "Attack on Titan",
    year: 2013,
    genre: "Action",
    rating: 9.1,
    runtime: "89 episodes",
    type: "anime",
    description:
      "Humanity fights for survival against mysterious giant creatures.",
    accent: "gotham"
  },

  {
    id: 203,
    title: "Demon Slayer",
    year: 2019,
    genre: "Action",
    rating: 8.6,
    runtime: "4 seasons",
    type: "anime",
    description:
      "A young swordsman joins a dangerous fight after tragedy strikes his family.",
    accent: "wick"
  },

  {
    id: 204,
    title: "Hunter x Hunter",
    year: 2011,
    genre: "Adventure",
    rating: 9.0,
    runtime: "148 episodes",
    type: "anime",
    description:
      "A young boy becomes a Hunter while searching for his father.",
    accent: "space"
  },

  {
    id: 205,
    title: "Death Note",
    year: 2006,
    genre: "Thriller",
    rating: 8.6,
    runtime: "37 episodes",
    type: "anime",
    description:
      "A mysterious notebook gives its owner extraordinary power and dangerous choices.",
    accent: "matrix"
  },


  /* =========================
     LEGAL VIDEO DEMO
  ========================= */

  {
    id: 900,
    title: "Big Buck Bunny",
    year: 2008,
    genre: "Animation",
    rating: 7.8,
    runtime: "10 minutes",
    type: "movie",
    description:
      "An openly licensed animated short included as a demonstration of HiwaMovies video playback.",
    accent: "comedy",

    /*
      This is an openly licensed demo video.
      Replace this URL only with videos you have
      permission to stream.
    */

    videoUrl:
      "https://download.blender.org/demo/movies/BBB/bbb_sunflower_1080p_30fps_normal.mp4"
  }

];


/* =========================================
   POSTER THEMES
========================================= */

const posterThemes = {

  dream: ["#392e63", "#11111a"],
  space: ["#172f5c", "#090b14"],
  gotham: ["#202633", "#08090d"],
  roman: ["#56392c", "#15100e"],
  music: ["#402c51", "#111018"],
  parasite: ["#294538", "#0c1210"],
  matrix: ["#153b31", "#050908"],
  dune: ["#72502d", "#17120d"],
  oppenheimer: ["#512b24", "#100b0a"],
  avengers: ["#382f65", "#100e1b"],
  spider: ["#652e45", "#151019"],
  prestige: ["#3c4051", "#0c0d12"],
  wick: ["#242f43", "#080a0e"],
  getout: ["#263a35", "#090e0c"],
  comedy: ["#55432c", "#16120d"],
  madmax: ["#713f27", "#180d08"],
  social: ["#30465a", "#0b1015"],
  quiet: ["#343d3c", "#0d1111"],
  hangover: ["#493a5d", "#110e16"],
  arrival: ["#263c50", "#090e13"]

};


/* =========================================
   STATE
========================================= */

let currentType = "all";
let currentFilter = "all";
let visibleMovies = 10;
let selectedMovie = null;

let watchlist =
  JSON.parse(
    localStorage.getItem(
      "hiwaMoviesWatchlist"
    ) || "[]"
  );


/* =========================================
   DOM
========================================= */

const $ = id =>
  document.getElementById(id);

const movieGrid =
  $("movieGrid");

const watchlistGrid =
  $("watchlistGrid");

const emptyWatchlist =
  $("emptyWatchlist");

const loadMore =
  $("loadMore");

const movieModal =
  $("movieModal");

const modalClose =
  $("modalClose");

const modalTitle =
  $("modalTitle");

const modalGenre =
  $("modalGenre");

const modalMeta =
  $("modalMeta");

const modalRating =
  $("modalRating");

const modalDescription =
  $("modalDescription");

const modalPoster =
  $("modalPoster");

const addWatchlist =
  $("addWatchlist");

const toast =
  $("toast");

const searchOverlay =
  $("searchOverlay");

const searchInput =
  $("searchInput");

const searchResults =
  $("searchResults");

const modalPlayerWrap =
  $("modalPlayerWrap");

const modalVideo =
  $("modalVideo");

const watchNow =
  $("watchNow");


/* =========================================
   FILTER
========================================= */

function getFilteredMovies() {

  return movies.filter(movie => {

    const typeMatch =
      currentType === "all" ||
      movie.type === currentType;

    const genreMatch =
      currentFilter === "all" ||
      movie.genre === currentFilter;

    return typeMatch && genreMatch;

  });

}


/* =========================================
   CREATE CARD
========================================= */

function createMovieCard(
  movie,
  index
) {

  const saved =
    watchlist.includes(
      movie.id
    );

  const theme =
    posterThemes[
      movie.accent
    ] || [
      "#29253e",
      "#111219"
    ];

  const card =
    document.createElement(
      "article"
    );

  card.className =
    "movie-card";

  card.innerHTML = `

    <div
      class="movie-poster"
      style="
        background:
        linear-gradient(
          145deg,
          ${theme[0]},
          ${theme[1]}
        );
      "
    >

      <div class="poster-number">
        ${String(index + 1).padStart(2, "0")}
      </div>

      <div class="poster-type">
        ${
          movie.type === "show"
            ? "TV"
            : movie.type === "anime"
              ? "ANIME"
              : "MOVIE"
        }
      </div>

      <button
        class="
          favorite-button
          ${saved ? "saved" : ""}
        "
        aria-label="Add to watchlist"
      >
        ${saved ? "♥" : "♡"}
      </button>

      <div class="poster-title">
        ${escapeHtml(movie.title)}
      </div>

    </div>

    <div class="movie-info">

      <div class="movie-title">
        ${escapeHtml(movie.title)}
      </div>

      <div class="movie-bottom">

        <div class="movie-meta">

          <span>${movie.year}</span>

          <span>•</span>

          <span>${escapeHtml(movie.genre)}</span>

        </div>

        <div class="movie-rating">
          ⭐ ${movie.rating}
        </div>

      </div>

    </div>

  `;


  card.addEventListener(
    "click",
    event => {

      if (
        event.target.closest(
          ".favorite-button"
        )
      ) {
        return;
      }

      openMovieModal(movie);

    }
  );


  card
    .querySelector(
      ".favorite-button"
    )
    .addEventListener(
      "click",
      event => {

        event.stopPropagation();

        toggleWatchlist(
          movie.id
        );

      }
    );


  return card;

}


/* =========================================
   RENDER MOVIES
========================================= */

function renderMovies() {

  if (!movieGrid) {
    return;
  }

  movieGrid.innerHTML = "";

  const filtered =
    getFilteredMovies();

  const visible =
    filtered.slice(
      0,
      visibleMovies
    );


  if (
    visible.length === 0
  ) {

    movieGrid.innerHTML = `

      <div
        style="
          grid-column:1/-1;
          padding:60px;
          text-align:center;
          color:#777985;
        "
      >

        <div style="font-size:40px;">
          🎬
        </div>

        <h3
          style="
            margin-top:15px;
            color:white;
          "
        >
          Nothing found
        </h3>

        <p>
          Try another filter.
        </p>

      </div>

    `;

    if (loadMore) {
      loadMore.style.display =
        "none";
    }

    return;

  }


  visible.forEach(
    (movie, index) => {

      movieGrid.appendChild(
        createMovieCard(
          movie,
          index
        )
      );

    }
  );


  if (loadMore) {

    loadMore.style.display =
      visible.length <
      filtered.length
        ? "block"
        : "none";

  }

}


/* =========================================
   LOAD MORE
========================================= */

if (loadMore) {

  loadMore.addEventListener(
    "click",
    () => {

      visibleMovies += 5;

      renderMovies();

    }
  );

}


/* =========================================
   MEDIA FILTERS
========================================= */

function setupMediaFilters() {

  document
    .querySelectorAll(
      ".media-filter"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".media-filter"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );

            button.classList.add(
              "active"
            );

            currentType =
              button.dataset.type;

            visibleMovies = 10;

            renderMovies();

          }
        );

      }
    );

}


/* =========================================
   GENRE FILTERS
========================================= */

function setupGenreFilters() {

  document
    .querySelectorAll(
      ".filter"
    )
    .forEach(
      button => {

        button.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".filter"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );

            button.classList.add(
              "active"
            );

            currentFilter =
              button.dataset.filter;

            visibleMovies = 10;

            renderMovies();

          }
        );

      }
    );

}


/* =========================================
   GENRES
========================================= */

function setupGenres() {

  document
    .querySelectorAll(
      ".genre-card"
    )
    .forEach(
      card => {

        card.addEventListener(
          "click",
          () => {

            currentFilter =
              card.dataset.genre;

            currentType =
              "all";

            visibleMovies = 10;

            document
              .querySelectorAll(
                ".filter"
              )
              .forEach(
                filter => {

                  filter.classList.toggle(
                    "active",
                    filter.dataset.filter ===
                      currentFilter
                  );

                }
              );

            document
              .querySelectorAll(
                ".media-filter"
              )
              .forEach(
                filter => {

                  filter.classList.toggle(
                    "active",
                    filter.dataset.type ===
                      "all"
                  );

                }
              );

            renderMovies();

            $("movies")
              ?.scrollIntoView({
                behavior:
                  "smooth"
              });

          }
        );

      }
    );

}


/* =========================================
   WATCHLIST
========================================= */

function toggleWatchlist(
  movieId
) {

  if (
    watchlist.includes(
      movieId
    )
  ) {

    watchlist =
      watchlist.filter(
        id =>
          id !== movieId
      );

    showToast(
      "Removed from watchlist"
    );

  } else {

    watchlist.push(
      movieId
    );

    showToast(
      "Added to watchlist ❤️"
    );

  }


  localStorage.setItem(
    "hiwaMoviesWatchlist",
    JSON.stringify(
      watchlist
    )
  );


  renderMovies();

  renderWatchlist();

  updateWatchlistButton();

}


/* =========================================
   RENDER WATCHLIST
========================================= */

function renderWatchlist() {

  if (
    !watchlistGrid
  ) {
    return;
  }

  watchlistGrid.innerHTML = "";

  const savedMovies =
    movies.filter(
      movie =>
        watchlist.includes(
          movie.id
        )
    );


  if (
    emptyWatchlist
  ) {

    emptyWatchlist.style.display =
      savedMovies.length
        ? "none"
        : "block";

  }


  savedMovies.forEach(
    (movie, index) => {

      watchlistGrid.appendChild(
        createMovieCard(
          movie,
          index
        )
      );

    }
  );

}


/* =========================================
   MODAL
========================================= */

function openMovieModal(
  movie
) {

  selectedMovie =
    movie;


  modalTitle.textContent =
    movie.title;

  modalGenre.textContent =
    `${
      movie.type === "show"
        ? "TV Show"
        : movie.type === "anime"
          ? "Anime"
          : "Movie"
    } • ${movie.genre}`;

  modalMeta.textContent =
    `${movie.year} • ${movie.runtime}`;

  modalRating.textContent =
    `⭐ ${movie.rating} / 10`;

  modalDescription.textContent =
    movie.description;


  const theme =
    posterThemes[
      movie.accent
    ] || [
      "#29253e",
      "#111219"
    ];


  modalPoster.style.background =
    `
      linear-gradient(
        145deg,
        ${theme[0]},
        ${theme[1]}
      )
    `;


  modalPoster.innerHTML = `
    <strong>
      ${escapeHtml(movie.title)}
    </strong>
  `;


  updateWatchlistButton();


  if (modalPlayerWrap) {

    modalPlayerWrap.hidden =
      true;

  }


  if (modalVideo) {

    modalVideo.pause();

    modalVideo.removeAttribute(
      "src"
    );

    modalVideo.load();

  }


  if (watchNow) {

    watchNow.textContent =
      movie.videoUrl
        ? "▶ Watch Now"
        : "▶ Watch";

  }


  movieModal.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeMovieModal() {

  if (modalVideo) {

    modalVideo.pause();

    modalVideo.removeAttribute(
      "src"
    );

    modalVideo.load();

  }


  if (modalPlayerWrap) {

    modalPlayerWrap.hidden =
      true;

  }


  movieModal.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

}


/* =========================================
   MODAL EVENTS
========================================= */

function setupModal() {

  modalClose?.addEventListener(
    "click",
    closeMovieModal
  );


  document
    .querySelector(
      ".modal-backdrop"
    )
    ?.addEventListener(
      "click",
      closeMovieModal
    );


  addWatchlist?.addEventListener(
    "click",
    () => {

      if (
        selectedMovie
      ) {

        toggleWatchlist(
          selectedMovie.id
        );

      }

    }
  );


  watchNow?.addEventListener(
    "click",
    () => {

      if (
        !selectedMovie
      ) {
        return;
      }


      if (
        !selectedMovie.videoUrl
      ) {

        showToast(
          "No licensed video source is configured for this title."
        );

        return;

      }


      modalPlayerWrap.hidden =
        false;

      modalVideo.src =
        selectedMovie.videoUrl;

      modalVideo.load();

      modalVideo.play()
        .catch(
          () => {}
        );

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {

        closeMovieModal();

      }

    }
  );

}


/* =========================================
   WATCHLIST BUTTON
========================================= */

function updateWatchlistButton() {

  if (
    !selectedMovie ||
    !addWatchlist
  ) {
    return;
  }


  const saved =
    watchlist.includes(
      selectedMovie.id
    );


  addWatchlist.textContent =
    saved
      ? "✓ In Watchlist"
      : "+ Add to Watchlist";

}


/* =========================================
   RANDOM
========================================= */

function setupRandomMovie() {

  $("randomButton")
    ?.addEventListener(
      "click",
      () => {

        const random =
          movies[
            Math.floor(
              Math.random() *
                movies.length
            )
          ];

        openMovieModal(
          random
        );

      }
    );

}


/* =========================================
   EXPLORE
========================================= */

function setupExplore() {

  $("exploreButton")
    ?.addEventListener(
      "click",
      () => {

        $("movies")
          ?.scrollIntoView({
            behavior:
              "smooth"
          });

      }
    );


  $("viewAllButton")
    ?.addEventListener(
      "click",
      () => {

        currentType =
          "all";

        currentFilter =
          "all";

        visibleMovies =
          movies.length;


        document
          .querySelectorAll(
            ".media-filter"
          )
          .forEach(
            filter => {

              filter.classList.toggle(
                "active",
                filter.dataset.type ===
                  "all"
              );

            }
          );


        document
          .querySelectorAll(
            ".filter"
          )
          .forEach(
            filter => {

              filter.classList.toggle(
                "active",
                filter.dataset.filter ===
                  "all"
              );

            }
          );


        renderMovies();

        $("movies")
          ?.scrollIntoView({
            behavior:
              "smooth"
          });

      }
    );


  $("featuredButton")
    ?.addEventListener(
      "click",
      () => {

        const featured =
          movies.find(
            movie =>
              movie.id === 3
          );

        if (featured) {
          openMovieModal(
            featured
          );
        }

      }
    );

}


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

  const openSearch =
    $("openSearch");

  const closeSearch =
    $("closeSearch");


  openSearch?.addEventListener(
    "click",
    () => {

      searchOverlay.classList.add(
        "active"
      );

      document.body.style.overflow =
        "hidden";

      setTimeout(
        () =>
          searchInput?.focus(),
        100
      );

    }
  );


  closeSearch?.addEventListener(
    "click",
    closeSearchOverlay
  );


  searchOverlay?.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        searchOverlay
      ) {

        closeSearchOverlay();

      }

    }
  );


  searchInput?.addEventListener(
    "input",
    () => {

      performSearch(
        searchInput.value
      );

    }
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "/" &&
        document.activeElement !==
          searchInput
      ) {

        event.preventDefault();

        searchOverlay.classList.add(
          "active"
        );

        searchInput.focus();

      }

    }
  );

}


/* =========================================
   SEARCH RESULTS
========================================= */

function performSearch(
  query
) {

  const clean =
    query
      .trim()
      .toLowerCase();


  if (!clean) {

    searchResults.innerHTML = `
      <p style="
        color:#666873;
        padding:20px 0;
      ">
        Start typing to search...
      </p>
    `;

    return;

  }


  const results =
    movies.filter(
      movie => {

        const text =
          `${movie.title}
           ${movie.genre}
           ${movie.year}
           ${movie.type}`.toLowerCase();

        return text.includes(
          clean
        );

      }
    );


  if (
    results.length === 0
  ) {

    searchResults.innerHTML = `
      <p style="
        color:#666873;
        padding:20px 0;
      ">
        Nothing found for
        "${escapeHtml(query)}".
      </p>
    `;

    return;

  }


  searchResults.innerHTML =
    results
      .slice(0, 12)
      .map(
        movie => `

          <button
            class="search-result"
            data-id="${movie.id}"
          >

            <span
              style="
                font-size:25px;
              "
            >
              ${
                movie.type === "anime"
                  ? "🍥"
                  : movie.type === "show"
                    ? "📺"
                    : "🎬"
              }
            </span>

            <span>

              <strong>
                ${escapeHtml(movie.title)}
              </strong>

              <small
                style="
                  display:block;
                  color:#666873;
                  margin-top:3px;
                "
              >
                ${movie.year}
                •
                ${escapeHtml(movie.genre)}
                •
                ${movie.type}
                •
                ⭐ ${movie.rating}
              </small>

            </span>

          </button>

        `
      )
      .join("");


  document
    .querySelectorAll(
      ".search-result"
    )
    .forEach(
      result => {

        result.addEventListener(
          "click",
          () => {

            const id =
              Number(
                result.dataset.id
              );

            const movie =
              movies.find(
                item =>
                  item.id === id
              );

            closeSearchOverlay();

            if (movie) {
              openMovieModal(
                movie
              );
            }

          }
        );

      }
    );

}


/* =========================================
   CLOSE SEARCH
========================================= */

function closeSearchOverlay() {

  searchOverlay.classList.remove(
    "active"
  );

  document.body.style.overflow =
    "";

  searchInput.value = "";

  searchResults.innerHTML =
    "";

}


/* =========================================
   NAVIGATION
========================================= */

function setupNavigation() {

  document
    .querySelectorAll(
      ".nav-link"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            document
              .querySelectorAll(
                ".nav-link"
              )
              .forEach(
                item =>
                  item.classList.remove(
                    "active"
                  )
              );

            link.classList.add(
              "active"
            );

          }
        );

      }
    );

}


/* =========================================
   MOBILE MENU
========================================= */

function setupMobileMenu() {

  const button =
    $("mobileMenuButton");

  const menu =
    $("mobileMenu");


  button?.addEventListener(
    "click",
    () => {

      menu?.classList.toggle(
        "active"
      );

    }
  );


  document
    .querySelectorAll(
      ".mobile-menu a"
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            menu?.classList.remove(
              "active"
            );

          }
        );

      }
    );

}


/* =========================================
   TOAST
========================================= */

let toastTimer;

function showToast(
  message
) {

  if (!toast) {
    return;
  }


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
   ESCAPE HTML
========================================= */

function escapeHtml(
  value
) {

  return String(
    value
  ).replace(
    /[&<>"']/g,
    character => {

      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return entities[
        character
      ];

    }
  );

}


/* =========================================
   START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderMovies();

    renderWatchlist();

    setupMediaFilters();

    setupGenreFilters();

    setupGenres();

    setupNavigation();

    setupSearch();

    setupModal();

    setupRandomMovie();

    setupExplore();

    setupMobileMenu();

  }
);
/* =========================================
   HIWAMOVIES DEBUG CHECK
========================================= */

console.log("🔥 HiwaMovies JavaScript is loaded!");

window.addEventListener("load", () => {
  console.log("✅ Page finished loading");

  const cssTest = document.querySelector("link[href*='style.css']");

  if (cssTest) {
    console.log("✅ style.css is connected");
  } else {
    console.error("❌ style.css is NOT connected");
  }

  const movieGrid = document.getElementById("movieGrid");

  if (movieGrid) {
    console.log("✅ Movie grid found");
  } else {
    console.error("❌ Movie grid not found");
  }
});
