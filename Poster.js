function createPoster(movie) {
    const firstLetter = escapeHtml(movie.title.charAt(0).toUpperCase());
    const title = escapeHtml(movie.title);
    const accent = movie.accent || "#252a33";

    if (movie.poster) {
        return `
            <img
                class="real-poster"
                src="${escapeHtml(movie.poster)}"
                alt="${title} poster"
                loading="lazy"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >

            <div class="poster-fallback" style="
                display: none;
                background:
                    radial-gradient(circle at 20% 20%, rgba(255,255,255,.12), transparent 25%),
                    linear-gradient(145deg, ${accent}, #08090c 75%);
            ">
                <span class="poster-letter">${firstLetter}</span>
                <strong>${title}</strong>
                <small>${getTypeLabel(movie.type)}</small>
            </div>
        `;
    }

    return `
        <div class="poster-fallback" style="
            background:
                radial-gradient(circle at 20% 20%, rgba(255,255,255,.12), transparent 25%),
                linear-gradient(145deg, ${accent}, #08090c 75%);
        ">
            <span class="poster-letter">${firstLetter}</span>
            <strong>${title}</strong>
            <small>${getTypeLabel(movie.type)}</small>
        </div>
    `;
}
