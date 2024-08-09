<script lang="ts">
    import { linkGroups } from "$lib/elements";
    import {
        searchHandlers,
        type SearchHandler,
        handlerPrefix,
    } from "$lib/searchHandlers";
    import { onMount } from "svelte";
    let query = "";
    let tijd = berekenTijd();
    let zoekvak: HTMLInputElement;

    function extract(num: number) {
        return num.toString().padStart(2, "0");
    }

    function berekenTijd() {
        let date = new Date();
        return `${extract(date.getHours())}:${extract(
            date.getMinutes(),
        )}:${extract(date.getSeconds())}`;
    }

    setInterval(() => {
        tijd = berekenTijd();
    }, 1000);

    onMount(() => {
        zoekvak.focus();
    });

    let navigatorLink = "";
    let navigator: HTMLAnchorElement;

    const isValidUrl = (urlString: string) => {
        var urlPattern = new RegExp(
            "^(https?:\\/\\/)" + // validate protocol
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
                "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
                "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
                "(\\#[-a-z\\d_]*)?$",
            "i",
        ); // validate fragment locator
        return !!urlPattern.test(urlString);
    };

    // holy shit dit is boecht
    // mogelijks de slechtste code die ik het afgelopen jaar al schreef
    // beste bedrijven: ik kan wel degelijk programmeren
    // TODO: refactor dit allejezus
    function handleSearch(): string {
        let retval = "";

        if (isValidUrl(query)) {
            console.log("already valid");
            return encodeURI(query);
        }
        try {
            if (!query.startsWith("http")) {
                console.log("added https://");
                retval = "https://" + query;
            }

            if (isValidUrl(retval)) {
                console.log(`${retval} is een geldige URL`);
                retval = encodeURI(retval);
            } else {
                retval = "";
            }
        } catch (e) {
            for (let sh of searchHandlers) {
                if (query.startsWith(handlerPrefix + sh.prefix)) {
                    let re = RegExp(`${handlerPrefix}${sh.prefix}(\\s)*`);
                    return encodeURI(sh.searchUrl + query.replace(re, ""));
                }
            }
        }

        if (retval == "") {
            console.log("fallthrough");
            return encodeURI(`https://www.google.be/search?q=${query}`);
        } else {
            return retval;
        }
    }

    let poort = "5173";
</script>

<a href={navigatorLink} bind:this={navigator} id="navigator" class="hidden">
</a>

<div
    class="bg-black min-w-screen min-h-screen px-24 py-12 flex flex-col gap-3 text-white"
>
    <p class="text-2xl">{tijd}</p>

    <div class="flex flex-row gap-3">
        <input
            class="grow text-xl border-2 border-neutral-800 bg-black px-6 py-2 hover:bg-neutral-950 focus:bg-neutral-950 focus:outline-none"
            bind:this={zoekvak}
            placeholder="Zoek op Google..."
            bind:value={query}
            on:keypress={(e) => {
                if (e.key == "Enter") {
                    // window.location.replace(handleSearch());
                    console.log(handleSearch());
                }
            }}
        />
        <input
            class="text-xl border-2 border-neutral-800 bg-black p-2 hover:bg-neutral-950 focus:bg-neutral-950 focus:outline-none w-24"
            bind:value={poort}
        />
        <button
            class="p-2 text-xl bg-blue-500 text-white"
            on:click={() => {
                window.location.href = `http://localhost:${poort}`;
            }}>localhost</button
        >
    </div>

    <div class="grow flex flex-col lg:flex-row gap-3">
        {#each linkGroups.slice(0, -1) as lg}
            <div
                class="bg-black hover:bg-neutral-950 w-full lg:w-1/4 p-4 border-neutral-800 border-2 transition-all duration-200"
            >
                <h1 class="text-2xl mb-4">{lg.title}</h1>
                <div class="flex flex-col gap-4 h-fit">
                    {#each lg.links as link}
                        <a
                            class="flex flex-row gap-3 items-stretch group"
                            href={link.href}
                        >
                            <div
                                class="aspect-square bg-{link.title.replaceAll(
                                    /( |\.)/g,
                                    '-',
                                )} group-hover:scale-x-125 origin-left transition-transform duration-75"
                            ></div>
                            <p
                                class="group-hover:translate-x-3 text-xl transition-transform duration-75"
                            >
                                {link.title}
                            </p>
                        </a>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
    <div
        class="bg-black hover:bg-neutral-950 p-4 border-neutral-800 border-2 transition-all duration-200"
    >
        <div class="flex flex-col gap-4 h-fit">
            <h1 class="text-2xl mb-4">
                {linkGroups[linkGroups.length - 1].title}
            </h1>
            {#each linkGroups[linkGroups.length - 1].links as link}
                <a
                    class="flex flex-row gap-3 items-stretch group"
                    href={link.href}
                >
                    <div
                        class="aspect-square bg-{link.title.replaceAll(
                            /( |\.)/g,
                            '-',
                        )} group-hover:scale-x-125 origin-left transition-transform duration-75"
                    ></div>
                    <p
                        class="group-hover:translate-x-3 text-xl transition-transform duration-75"
                    >
                        {link.title}
                    </p>
                </a>
            {/each}
        </div>
    </div>
</div>
