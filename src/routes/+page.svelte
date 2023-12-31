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

    function handleSearch(): string {
        try {
            return encodeURI(new URL(query).toString());
        } catch (e) {
            for (let sh of searchHandlers) {
                if (query.startsWith(handlerPrefix + sh.prefix)) {
                    let re = RegExp(`${handlerPrefix}${sh.prefix}(\\s)*`);
                    return encodeURI(sh.searchUrl + query.replace(re, ""));
                }
            }

            return encodeURI(`https://www.google.be/search?q=${query}`);
        }
    }

    let poort = "5173";
</script>

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
                    window.location.href = handleSearch();
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

    <div class="grow flex flex-row gap-3">
        {#each linkGroups as lg}
            <div
                class="bg-black hover:bg-neutral-950 w-1/4 p-4 border-neutral-800 border-2 transition-all duration-200"
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
</div>
