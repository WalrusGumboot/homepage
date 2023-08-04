export const handlerPrefix: string = "!"

export interface SearchHandler {
    prefix: string,
    searchUrl: string,
}

export const searchHandlers: SearchHandler[] = [
    { prefix: "rust", searchUrl: "https://doc.rust-lang.org/stable/std/index.html?search=" },
    { prefix: "yt",   searchUrl: "https://www.youtube.com/results?search_query=" },
    { prefix: "aur",  searchUrl: "https://aur.archlinux.org/packages?O=0&K=" },
    { prefix: "arch", searchUrl: "https://archlinux.org/packages/?sort=&q=" },
    { prefix: "py",   searchUrl: "https://docs.python.org/3/search.html?check_keywords=yes&area=default&q="}
]