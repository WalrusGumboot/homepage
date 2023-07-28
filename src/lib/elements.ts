export interface Link {
    href: string,
    title: string,
    colour: string
}

export interface LinkGroup {
    title: string,
    links: Link[]
}

export const linkGroups: LinkGroup[] = [
    {
        title: "Google",
        links: [
            { href: "https://calendar.google.com/",  title: "Calendar",  colour: "4285f4" },
            { href: "https://passwords.google.com/", title: "Passwords", colour: "4285f4" },
            { href: "https://drive.google.com/",     title: "Drive",     colour: "4285f4" },
            { href: "https://maps.google.com/",      title: "Maps",      colour: "4285f4" },
            { href: "https://photos.google.com/",    title: "Photos",    colour: "4285f4" },
            { href: "https://keep.google.com/",      title: "Keep",      colour: "fbbc04" },
            { href: "https://mail.google.com/",      title: "Gmail",     colour: "3a9e58" },
        ]
    },
    {
        title: "Social",
        links: [
            { href: "https://www.twitter.com/",  title: "Twitter",   colour: "1d9bf0" },
            { href: "https://www.youtube.com/",  title: "YouTube",   colour: "ff0000" },
            { href: "https://twitch.tv",         title: "Twitch",    colour: "a970ff" },
            { href: "https://web.whatsapp.com/", title: "WhatsApp",  colour: "00bd07" },
            { href: "https://instagram.com/",    title: "Instagram", colour: "f69a4b" },
        ]
    },
    {
        title: "Ontwikkeling",
        links: [
            { href: "https://stackoverflow.com/",    title: "StackOverflow", colour: "f48024" },
            { href: "https://tailwindcss.com/docs/", title: "Tailwind CSS",  colour: "38bdf8" },
            { href: "https://figma.com",             title: "Figma",         colour: "fe7161" },
            { href: "https://github.com",            title: "GitHub",        colour: "adbac7" },
            { href: "https://mobilevikings.atlassian.net/jira/software/c/projects/INT/boards/136", title: "MV - Jira", colour: "0052cc"},
        ]
    },
    {
        title: "Teksten",
        links: [
            { href: "https://sefaria.org/",        title: "Sefaria",   colour: "212e50" },
            { href: "https://thekingsbible.com/",  title: "KJV",       colour: "003366" },
            { href: "https://quran.com/",          title: "quran.com", colour: "2ca4ab" }
        ]
    },
    {
        title: "Academisch",
        links: [
            { href: "https://toledo.kuleuven.be/portal",             title: "Toledo",   colour: "286090" },
            { href: "https://webwsp.aps.kuleuven.be/sap/bc/ui2/flp", title: "KU Loket", colour: "354a5f" },
            { href: "https://overleaf.com",                          title: "Overleaf", colour: "459c3f" },
            { href: "https://typst.app",                             title: "Typst",    colour: "239cad" },
        ]
    }
]