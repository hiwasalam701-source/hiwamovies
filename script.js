/* =========================================
   HIWAMOVIES
   MAIN JAVASCRIPT
========================================= */


/* =========================================
   MOVIE DATABASE
========================================= */

const movies = [

  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    rating: 8.8,
    runtime: "2h 28m",
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
    description:
      "The remaining heroes attempt to undo a devastating event and restore what was lost.",
    accent: "avengers"
  },

  {
    id: 11,
    title: "Spider-Man",
    year: 2018,
    genre: "Animation",
    rating: 8.4,
    runtime: "1h 57m",
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
    description:
      "A linguist works to understand mysterious visitors who have arrived on Earth.",
    accent: "arrival"
  }

];


/* =========================================
   STATE
========================================= */

let currentFilter = "all";

let visibleMovies = 10;

let selectedMovie = null;

let watchlist = JSON.parse(
  localStorage.getItem("hiwaMoviesWatchlist")
) || [];


/* =========================================
   DOM ELEMENTS
========================================= */

const movieGrid =
  document.getElementById(
    "movieGrid"
  );

const watchlistGrid =
  document.getElementById(
    "watchlistGrid"
  );

const emptyWatchlist =
  document.getElementById(
    "emptyWatchlist"
  );

const movieCount =
  document.getElementById(
    "movieCount"
  );

const loadMore =
  document.getElementById(
    "loadMore"
  );

const movieModal =
  document.getElementById(
    "movieModal"
  );

const modalClose =
  document.getElementById(
    "modalClose"
  );

const modalTitle =
  document.getElementById(
    "modalTitle"
  );

const modalGenre =
  document.getElementById(
    "modalGenre"
  );

const modalMeta =
  document.getElementById(
    "modalMeta"
  );

const modalRating =
  document.getElementById(
    "modalRating"
  );

const modalDescription =
  document.getElementById(
    "modalDescription"
  );

const modalPoster =
  document.getElementById(
    "modalPoster"
  );

const addWatchlist =
  document.getElementById(
    "addWatchlist"
  );

const toast =
  document.getElementById(
    "toast"
  );

const toastMessage =
  document.getElementById(
    "toastMessage"
  );

const searchOverlay =
  document.getElementById(
    "searchOverlay"
  );

const searchInput =
  document.getElementById(
    "searchInput"
  );

const searchResults =
  document.getElementById(
    "searchResults"
  );

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );


/* =========================================
   INITIALIZATION
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    movieCount.textContent =
      movies.length;

    renderMovies();

    renderWatchlist();

    setupFilters();

    setupNavigation();

    setupSearch();

    setupModal();

    setupRandomMovie();

    setupGenres();

  }
);


/* =========================================
   POSTER COLORS
========================================= */

const posterThemes = {

  dream: [
    "#392e63",
    "#11111a"
  ],

  space: [
    "#172f5c",
    "#090b14"
  ],

  gotham: [
    "#202633",
    "#08090d"
  ],

  roman: [
    "#56392c",
    "#15100e"
  ],

  music: [
    "#402c51",
    "#111018"
  ],

  parasite: [
    "#294538",
    "#0c1210"
  ],

  matrix: [
    "#153b31",
    "#050908"
  ],

  dune: [
    "#72502d",
    "#17120d"
  ],

  oppenheimer: [
    "#512b24",
    "#100b0a"
  ],

  avengers: [
    "#382f65",
    "#100e1b"
  ],

  spider: [
    "#652e45",
    "#151019"
  ],

  prestige: [
    "#3c4051",
    "#0c0d12"
  ],

  wick: [
    "#242f43",
    "#080a0e"
  ],

  getout: [
    "#263a35",
    "#090e0c"
  ],

  comedy: [
    "#55432c",
    "#16120d"
  ],

  madmax: [
    "#713f27",
    "#180d08"
  ],

  social: [
    "#30465a",
    "#0b1015"
  ],

  quiet: [
    "#343d3c",
    "#0d1111"
  ],

  hangover: [
    "#493a5d",
    "#110e16"
  ],

  arrival: [
    "#263c50",
    "#090e13"
  ]

};


/* =========================================
   GET FILTERED MOVIES
========================================= */

function getFilteredMovies() {

  if (
    currentFilter === "all"
  ) {

    return movies;

  }

  return movies.filter(
    movie =>
      movie.genre ===
      currentFilter
  );

}


/* =========================================
   CREATE MOVIE CARD
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
        ${movie.title}
      </div>

    </div>

    <div class="movie-info">

      <div class="movie-title">
        ${movie.title}
      </div>

      <div class="movie-bottom">

        <div class="movie-meta">

          <span>
            ${movie.year}
          </span>

          <span>•</span>

          <span>
            ${movie.genre}
          </span>

        </div>

        <div class="movie-rating">
          ⭐ ${movie.rating}
        </div>

      </div>

    </div>

  `;


  /* Open details */

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

      openMovieModal(
        movie
      );

    }
  );


  /* Favorite */

  const favoriteButton =
    card.querySelector(
      ".favorite-button"
    );

  favoriteButton.addEventListener(
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
          grid-column: 1 / -1;
          padding: 60px;
          text-align: center;
          color: #777985;
        "
      >

        <div style="font-size:40px;">
          🎬
        </div>

        <h3 style="
          margin-top:15px;
          color:white;
        ">
          No movies found
        </h3>

        <p style="
          margin-top:5px;
        ">
          Try another genre.
        </p>

      </div>

    `;

    loadMore.style.display =
      "none";

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


  if (
    visible.length <
    filtered.length
  ) {

    loadMore.style.display =
      "block";

  } else {

    loadMore.style.display =
      "none";

  }

}


/* =========================================
   LOAD MORE
========================================= */

loadMore.addEventListener(
  "click",
  () => {

    visibleMovies += 5;

    renderMovies();

  }
);


/* =========================================
   FILTERS
========================================= */

function setupFilters() {

  const filters =
    document.querySelectorAll(
      ".filter"
    );


  filters.forEach(
    filter => {

      filter.addEventListener(
        "click",
        () => {

          filters.forEach(
            button =>
              button.classList.remove(
                "active"
              )
          );

          filter.classList.add(
            "active"
          );

          currentFilter =
            filter.dataset.filter;

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

  const genreCards =
    document.querySelectorAll(
      ".genre-card"
    );


  genreCards.forEach(
    card => {

      card.addEventListener(
        "click",
        () => {

          const genre =
            card.dataset.genre;

          currentFilter =
            genre;

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
                  genre
                );

              }
            );

          renderMovies();

          document
            .getElementById(
              "movies"
            )
            .scrollIntoView({
              behavior: "smooth"
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

  const exists =
    watchlist.includes(
      movieId
    );


  if (exists) {

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


  if (
    selectedMovie &&
    selectedMovie.id === movieId
  ) {

    updateWatchlistButton();

  }

}


/* =========================================
   RENDER WATCHLIST
========================================= */

function renderWatchlist() {

  watchlistGrid.innerHTML = "";


  const savedMovies =
    movies.filter(
      movie =>
        watchlist.includes(
          movie.id
        )
    );


  if (
    savedMovies.length === 0
  ) {

    emptyWatchlist.style.display =
      "block";

    return;

  }


  emptyWatchlist.style.display =
    "none";


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
    movie.genre;

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
      ${movie.title}
    </strong>
  `;


  updateWatchlistButton();


  movieModal.classList.add(
    "active"
  );

  document.body.style.overflow =
    "hidden";

}


function closeMovieModal() {

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

  modalClose.addEventListener(
    "click",
    closeMovieModal
  );


  document
    .querySelector(
      ".modal-backdrop"
    )
    .addEventListener(
      "click",
      closeMovieModal
    );


  addWatchlist.addEventListener(
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
   UPDATE WATCHLIST BUTTON
========================================= */

function updateWatchlistButton() {

  if (
    !selectedMovie
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
   RANDOM MOVIE
========================================= */

function setupRandomMovie() {

  const button =
    document.getElementById(
      "randomButton"
    );


  button.addEventListener(
    "click",
    () => {

      const randomIndex =
        Math.floor(
          Math.random() *
          movies.length
        );


      openMovieModal(
        movies[randomIndex]
      );

    }
  );

}


/* =========================================
   EXPLORE BUTTON
========================================= */

document
  .getElementById(
    "exploreButton"
  )
  .addEventListener(
    "click",
    () => {

      document
        .getElementById(
          "movies"
        )
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =========================================
   SEARCH
========================================= */

function setupSearch() {

  const searchButton =
    document.getElementById(
      "searchButton"
    );

  const closeSearch =
    document.getElementById(
      "closeSearch"
    );


  searchButton.addEventListener(
    "click",
    () => {

      searchOverlay.classList.add(
        "active"
      );

      document.body.style.overflow =
        "hidden";

      setTimeout(
        () =>
          searchInput.focus(),
        100
      );

    }
  );


  closeSearch.addEventListener(
    "click",
    closeSearchOverlay
  );


  searchOverlay.addEventListener(
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


  searchInput.addEventListener(
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
      movie =>

        movie.title
          .toLowerCase()
          .includes(clean)

        ||

        movie.genre
          .toLowerCase()
          .includes(clean)

        ||

        String(movie.year)
          .includes(clean)

    );


  if (
    results.length === 0
  ) {

    searchResults.innerHTML = `
      <p style="
        color:#666873;
        padding:20px 0;
      ">
        No movies found for
        "${query}".
      </p>
    `;

    return;

  }


  searchResults.innerHTML =
    results
      .slice(0, 8)
      .map(
        movie => `

          <button
            class="search-result"
            data-id="${movie.id}"
            style="
              display:flex;
              width:100%;
              align-items:center;
              gap:15px;
              padding:14px;
              border:1px solid #242631;
              border-radius:12px;
              background:#111219;
              color:white;
              text-align:left;
              margin-bottom:8px;
            "
          >

            <span style="
              font-size:20px;
            ">
              🎬
            </span>

            <span>
              <strong>
                ${movie.title}
              </strong>

              <small style="
                display:block;
                color:#666873;
                margin-top:3px;
              ">
                ${movie.year}
                •
                ${movie.genre}
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

            openMovieModal(
              movie
            );

          }
        );

      }
    );

}


/* =========================================
   NAVIGATION
========================================= */

function setupNavigation() {

  const navLinks =
    document.querySelectorAll(
      ".nav-link"
    );


  navLinks.forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          navLinks.forEach(
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

const mobileMenuButton =
  document.getElementById(
    "mobileMenuButton"
  );

const mobileClose =
  document.getElementById(
    "mobileClose"
  );


mobileMenuButton.addEventListener(
  "click",
  () => {

    mobileMenu.classList.add(
      "active"
    );

  }
);


mobileClose.addEventListener(
  "click",
  () => {

    mobileMenu.classList.remove(
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

          mobileMenu.classList.remove(
            "active"
          );

        }
      );

    }
  );


/* =========================================
   TOAST
========================================= */

let toastTimer;


function showToast(
  message
) {

  toastMessage.textContent =
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
   VIEW ALL
========================================= */

document
  .getElementById(
    "viewAllButton"
  )
  .addEventListener(
    "click",
    () => {

      currentFilter =
        "all";

      visibleMovies =
        movies.length;

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

      document
        .getElementById(
          "movies"
        )
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =========================================
   KEYBOARD SEARCH
========================================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.ctrlKey &&
      event.key.toLowerCase() ===
      "k"
    ) {

      event.preventDefault();

      searchOverlay.classList.add(
        "active"
      );

      searchInput.focus();

    }

  }
);
