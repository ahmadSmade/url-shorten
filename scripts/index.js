const shortLinks = JSON.parse(localStorage.getItem("sl_links_v1") || "[]");

function toggleMobileMenu() {
    document.querySelector(".mobile-drawer").classList.toggle("open");
}

function isValidUrl(s) {
    try {
        const url = new URL(s);

        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

async function fetchShortenURL(inputValue) {
    const apiUrl = `https://is.gd/create.php?format=json&url=${encodeURIComponent(inputValue)}`;

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log("API response:", data);

    if (!response.ok) {
        throw new Error(data.error || "Failed to shorten the URL.");
    }

    if (!data.shorturl) {
        throw new Error(data.error || "No shortened URL returned by the API.");
    }

    return data.shorturl;
}

function renderResults() {
    const list = document.querySelector(".results-list");

    if (!shortLinks.length) {
        list.style.paddingBottom = "0px";
        return;
    }

    list.style.paddingBottom = "3rem";

    console.log(shortLinks);

    list.innerHTML = shortLinks
        .slice()
        .reverse()
        .map(
            (item) => `
            <div class="result-item">

                <span
                    class="result-original"
                    title="${item.originalUrl}"
                >
                    ${item.originalUrl}
                </span>

                <div class="result-divider"></div>

                <a
                    class="result-short"
                    href="${item.shortenUrl}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ${item.shortenUrl}
                </a>

                <button
                    class="btn-copy"
                    onclick="copyLink(this, '${item.shortenUrl}')"
                >
                    Copy
                </button>

            </div>
        `,
        )
        .join("");
}

function copyLink(btn, link) {
    navigator.clipboard.writeText(link).then(() => {
        document.querySelectorAll(".btn-copy").forEach((b) => {
            b.textContent = "Copy";
            b.classList.remove("copied");
        });

        btn.textContent = "Copied!";
        btn.classList.add("copied");
    });
}

async function shortenUrl() {
    const input = document.querySelector(".input-field");
    const err = document.querySelector(".error-text");

    const val = input.value.trim();

    if (!val) {
        input.classList.add("error");

        err.textContent = "Please add a link";
        err.classList.add("show");

        return;
    }

    if (!isValidUrl(val)) {
        input.classList.add("error");

        err.textContent = "Please enter a valid URL (e.g. https://example.com)";

        err.classList.add("show");

        return;
    }

    input.classList.remove("error");
    err.classList.remove("show");

    try {
        const shortUrl = await fetchShortenURL(val);

        console.log("Short URL:", shortUrl);

        shortLinks.push({
            originalUrl: val,
            shortenUrl: shortUrl,
        });

        localStorage.setItem("sl_links_v1", JSON.stringify(shortLinks));

        input.value = "";

        renderResults();
    } catch (error) {
        console.error("Shortening error:", error);

        input.classList.add("error");

        err.textContent = error.message;

        err.classList.add("show");
    }
}

document.querySelector(".input-field").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        shortenUrl();
    }
});

document.querySelector(".input-field").addEventListener("input", () => {
    document.querySelector(".input-field").classList.remove("error");

    document.querySelector(".error-text").classList.remove("show");
});

document
    .querySelector(".menu-button")
    .addEventListener("click", toggleMobileMenu);

document.querySelector(".btn-shorten").addEventListener("click", shortenUrl);

document.querySelector(".get-start").addEventListener("click", () => {
    document.querySelector(".shortener-section").scrollIntoView({
        behavior: "smooth",
    });
});

renderResults();
