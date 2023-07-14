<script lang="ts">
    import { linkGroups } from "$lib/elements";
    let query = ""
    let tijd = berekenTijd();
    
    function extract(num: number) {
        return num.toString().padStart(2, "0")
    }

    function berekenTijd() {
        let date = new Date();
        return `${extract(date.getHours())}:${extract(date.getMinutes())}:${extract(date.getSeconds())}`
    }

    setInterval(() => {
        tijd = berekenTijd();
    }, 1000)
</script>

<div class="bg-black min-w-screen min-h-screen px-24 py-12 flex flex-col gap-6 text-white">
    <p class="text-2xl">{tijd}</p>
    
    <input class="text-xl border-2 border-neutral-800 bg-black px-6 py-2 focus:bg-neutral-800" 
    placeholder="Zoek op Google..." bind:value={query} on:keypress={
    (e) => {if (e.key == "Enter") {window.location.href = encodeURI(`https://www.google.be/search?q=${query}`);}}}>
    
    <div class="grow columns-5 gap-x-6">
        {#each linkGroups as lg}
        <div class="min-h-full bg-neutral-950 p-4">
            <h1 class="text-2xl mb-4">{lg.title}</h1>
            <div class="flex flex-col gap-4 h-fit">
                {#each lg.links as link}
                    <a class="flex flex-row gap-3 items-stretch group" href={link.href}>
                        <div class="aspect-square bg-{link.title} group-hover:scale-125 transition-transform duration-75"></div>
                        <p class="group-hover:translate-x-3 text-xl text-{link.title} transition-transform duration-75">{link.title}</p>
                    </a>
                {/each}
            </div>
        </div>
        {/each}
    </div>
</div>