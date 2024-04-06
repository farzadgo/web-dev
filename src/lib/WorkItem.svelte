<script lang="ts">
  import type { Project } from './types';
  import { ArrowUpRight, Code } from 'svelte-feathers';
  import { lazyLoad } from '$lib/lazyLoad';

  export let project: Project;

  const linkIconStyle = 'h-6 w-6 md:h-7 md:w-7 stroke-[1.5] fill-none';

  // const namedDate = (date: string) => {
  //   let monthName = new Date(date).toLocaleString('default', { month: 'long' });
  //   return `${new Date(date).getFullYear()} ${monthName}`;
  // }

</script>


<div class="mb-14 md:mb-20 bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 p-4 md:p-6 rounded-xl md:rounded-2xl">

  <div class="flex justify-between items-end mb-2">
    <h2 class="text-lg md:text-xl font-bold mr-2">{@html project.title}</h2>
    <!-- <div class="hidden md:flex grow h-1 border-t border-zinc-300 border-dotted"></div> -->
    <div class="flex gap-4 pt-1 ml-4">
      <a target="_blank" href={project.codeUrl}> <Code class={linkIconStyle}/> </a>
      <a target="_blank" href={project.liveUrl}> <ArrowUpRight class={linkIconStyle}/> </a>
    </div>
  </div>

  <div class="mb-6">
    <span> {project.date.replace('-', '.')} </span>
    {#if project.endDate}
    <span class="text-zinc-500 dark:text-zinc-400"> – {project.endDate.replace('-', '.')}</span>
    {/if}
  </div>
  
  {#if project.description || project.employer || project.designer}
    <div class="flex flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-7">
      {#if project.description}
        <p> {@html project.description} </p>
      {/if}
      {#if project.employer}
        <p> <i>employer</i> → {project.employer} </p>
      {/if}
      {#if project.designer}
        <p> <i>designer</i> → {project.designer} </p>
      {/if}
    </div>
  {/if}
  
  <ul class="flex flex-wrap gap-2 mb-1 font-mono">
    {#each project.stack as stackItem}
      <li class="flex-initial whitespace-nowrap text-xs md:text-sm px-3 py-1 rounded-full text-zinc-600 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-500"> {stackItem} </li>
    {/each}
  </ul>

  {#if project.images && project.images.length > 0}
  <div class="overflow-hidden w-[calc(100%+1rem)] md:w-[calc(100%+1.5rem)] pt-6">
    <div class="flex gap-4 md:gap-6 h-[25vh] md:h-[38vh] overflow-x-auto scroll-smooth no-scrollbar">
      {#each project.images as image}
        {#if image.url}
        <img
          alt={image.alt}
          use:lazyLoad={image.url}
          class="object-cover w-auto opacity-0 transition-opacity duration-500 last:mr-4 md:last:mr-6 rounded-md md:rounded-xl border border-zinc-200 dark:border-zinc-600 shadow-sm"
          loading="lazy"
        />
        {/if}
      {/each}
    </div>
  </div>
  {/if}

</div>