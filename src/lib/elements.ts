export type Link = {
    href: string,
    title: string,
    colour: string
}

export type LinkGroup = {
    title: string,
    links: Link[]
}

export const linkGroups: LinkGroup[] = [
    {
        title: "Google",
        links: [
            { href: "https://mail.google.com/", title: "Gmail", colour: "3a9e58" },
            // { href: "https://passwords.google.com/", title: "Passwords", colour: "4285f4" },
            { href: "https://calendar.google.com/", title: "Calendar", colour: "4285f4" },
            { href: "https://drive.google.com/", title: "Drive", colour: "4285f4" },
            { href: "https://maps.google.com/", title: "Maps", colour: "4285f4" },
            { href: "https://photos.google.com/", title: "Photos", colour: "4285f4" },
            { href: "https://docs.google.com/document/u/0/", title: "Documents", colour: "4285f4" },
            { href: "https://keep.google.com/", title: "Keep", colour: "fbbc04" },
            { href: "https://docs.google.com/spreadsheets/u/0/", title: "Sheets", colour: "34a853" },
        ]
    },
    {
        title: "Social",
        links: [
            { href: "https://www.twitter.com/", title: "Twitter", colour: "1d9bf0" },
            { href: "https://www.youtube.com/", title: "YouTube", colour: "ff0000" },
            // { href: "https://twitch.tv", title: "Twitch", colour: "a970ff" },
            { href: "https://web.whatsapp.com/", title: "WhatsApp", colour: "00bd07" },
            { href: "https://instagram.com/", title: "Instagram", colour: "f69a4b" },
            { href: "https://www.messenger.com", title: "Messenger", colour: "aa00ff" },
            { href: "https://www.facebook.com", title: "Facebook", colour: "0866ff" },
            { href: "https://winaleuven.workplace.com/", title: "Wina Workplace", colour: "4125be" },
            { href: "https://mail.google.com/chat/u/2/#chat/home", title: "Wina Google Chat", colour: "4285f4" }
        ]
    },
    {
        title: "Ontwikkeling",
        links: [
            // { href: "https://stackoverflow.com/", title: "StackOverflow", colour: "f48024" },
            { href: "https://tailwindcss.com/docs/", title: "Tailwind CSS", colour: "38bdf8" },
            { href: "https://figma.com", title: "Figma", colour: "fe7161" },
            { href: "https://github.com", title: "GitHub", colour: "adbac7" },
            { href: "https://vercel.com/dashboard", title: "Vercel", colour: "ffffff" },
            // { href: "https://mobilevikings.atlassian.net/jira/software/c/projects/INT/boards/136", title: "MV Jira", colour: "0052cc" },
            // { href: "https://mobilevikings.atlassian.net/wiki/spaces/INT/pages/781942940/Technical+docs", title: "MV Technical Docs", colour: "0052cc" },
            // { href: "https://github.com/vikingco/mv-client", title: "mv-client", colour: "adbac7" },
            // { href: "https://github.com/vikingco/skipta", title: "skipta", colour: "adbac7" },
            // { href: "https://github.com/vikingco/unleashed-web-api", title: "uwa", colour: "adbac7" },
            // { href: "https://github.com/vikingco/snuru", title: "snuru", colour: "adbac7" },
            { href: "https://regex101.com/", title: "RegEx101", colour: "1a2c42" },
            { href: "https://kwispel.letocart.be/", title: "Kwispel", colour: "f0ddc0" }
        ]
    },
    {
        title: "Academisch",
        links: [
            { href: "https://toledo.kuleuven.be/portal", title: "Toledo", colour: "286090" },
            { href: "https://www.wolframalpha.com", title: "Wolfram Alpha", colour: "f88c63"},
            { href: "https://typst.app/app", title: "Typst App", colour: "239cad" },
            { href: "https://typst.app/docs/reference", title: "Typst Reference", colour: "239cad" },
            { href: "https://webwsp.aps.kuleuven.be/sap/bc/ui2/flp", title: "KU Loket", colour: "354a5f" },
            { href: "https://onderwijsaanbod.kuleuven.be/opleidingen/n/SC_51016765.htm#bl=all", title: "Wiskundebachelor", colour: "00407a" },
            // { href: "https://overleaf.com", title: "Overleaf", colour: "459c3f" },
            { href: "https://math.stackexchange.com/", title: "Math SE", colour: "cb181f" },
            // { href: "https://matlab.mathworks.com", title: "MATLAB", colour: "f49610" },
            { href: "https://www.desmos.com/calculator", title: "Desmos", colour: "00a513"},
            { href: "https://www.desmos.com/3d", title: "Desmos 3D", colour: "00a513"}
        ]
    },
    {
        title: "Talig",
        links: [
            { href: "https://www.veto.be", title: "Veto", colour: "a62f28" },
            { href: "https://labrador.veto.be", title: "Veto backend", colour: "363a3e" },
            { href: "https://vetobe.workplace.com", title: "Veto Workplace", colour: "4125be" }
        ]
    }
]
