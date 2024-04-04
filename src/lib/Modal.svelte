<script lang="ts">
  import { modalData } from '$lib/modal-data';
  import { ModalType } from '$lib/types';
  import { X } from 'svelte-feathers';

  export let modalType: ModalType;
  export let closeHandler: () => void;

  const selectedData = modalData.filter((item) => item.type === modalType);
  // console.log(selectedData);

</script>


<div class="fixed inset-0 flex h-screen w-screen justify-center bg-zinc-200/60 dark:bg-zinc-700/70 backdrop-blur-[9px]">
  <div class="modal flex flex-col px-4 w-full lg:w-[910px] overflow-auto">

    <button on:click={closeHandler} class="ml-auto mt-6 mb-10">
      <X class="h-12 w-12 sm:h-16 sm:w-16 stroke-[0.5]"/>
    </button>

    {#each selectedData as item}
    <div class="flex flex-col gap-4 mb-14">
      <h2 class="text-xl font-bold"> {item.title} </h2>
      {#if item.date}
      <p class="text-base"> {item.date} </p>
      {/if}
      {#if item.subtitle}
      <p class="text-lg"> {item.subtitle} </p>
      {/if}
      <p class={`${modalType === 'skills' ? 'font-mono text-base' : 'text-sm'}`}> {@html item.description} </p>
    </div>
    {/each}
    
  </div>
</div>