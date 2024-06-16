export const handlerPrefix: string = "!"

export type SearchHandler = {
    prefix: string,
    searchUrl: string,
}

export const searchHandlers: SearchHandler[] = [
    { prefix: "rs",    searchUrl: "https://doc.rust-lang.org/stable/std/index.html?search=" },
    { prefix: "yt",    searchUrl: "https://www.youtube.com/results?search_query=" },
    { prefix: "aur",   searchUrl: "https://aur.archlinux.org/packages?O=0&K=" },
    { prefix: "arch",  searchUrl: "https://archlinux.org/packages/?sort=&q=" },
    { prefix: "py",    searchUrl: "https://docs.python.org/3/search.html?check_keywords=yes&area=default&q="},
    { prefix: "cargo", searchUrl: "https://crates.io/search?q=" },
    { prefix: "tsym",  searchUrl: "https://typst.app/docs/reference/symbols/sym/?query=" },
    { prefix: "genus", searchUrl: "https://www.inventio.nl/cgi-bin/genus.pl?woord=" },
    { prefix: "gb",    searchUrl: "https://woordenlijst.org/zoeken/?q=" }
]
