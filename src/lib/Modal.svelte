<script lang="ts">
  import { modalData } from '$lib/modal-data';
  import { ModalType, Language } from '$lib/types';
  import { X } from 'svelte-feathers';

  export let lang: Language;
  export let modalType: ModalType;
  export let closeHandler: () => void;

  const selectedData = modalData.filter((item) => item.type === modalType);
  // console.log(selectedData);

</script>


<div class="fixed inset-0 flex h-screen w-screen justify-center bg-zinc-200/60 dark:bg-zinc-700/70 backdrop-blur-[9px]">
  <div class="modal flex flex-col px-4 w-full lg:w-[800px] overflow-auto">

    <button on:click={closeHandler} class="ml-auto mt-6 mb-3 md:mb-12">
      <X class="h-12 w-12 md:h-16 md:w-16 stroke-[0.5]"/>
    </button>

    {#each selectedData as item}
    <div class="mb-14">
      <h2 class="text-lg md:text-xl font-bold mb-2"> {item.title[lang]} </h2>
      {#if item.date}
        <p class="mb-4"> {item.date} </p>
      {/if}
      {#if item.subtitle}
        <p class="text-lg mb-2"> {item.subtitle[lang]} </p>
      {/if}
      {#if item.description}
        <p class="text-sm"> {@html item.description[lang]} </p>
      {/if}
      {#if item.stack}
        <ul class="flex flex-wrap gap-2 mt-4 font-mono">
          {#each item.stack as stackItem}
            <li class="flex-initial whitespace-nowrap text-sm md:text-base px-3 py-1 rounded-full border-2 border-zinc-300 dark:border-zinc-600"> {stackItem} </li>
          {/each}
        </ul>
      {/if}
    </div>
    {/each}
    
  </div>
</div>