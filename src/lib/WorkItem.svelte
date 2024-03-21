<script lang="ts">
  import type { Project } from "./types";
  import external from '$lib/assets/external-link.svg';
  import code from '$lib/assets/code.svg';
  // import code from '$lib/assets/github.svg';
  import { lazyLoad } from '$lib/lazyLoad';

  export let project: Project;
  // console.log(project);

  const separateArrayItmes = (arr: string[]) => arr.join(' • ');


  // const namedDate = (date: string) => {
  //   let monthName = new Date(date).toLocaleString('default', { month: 'long' });
  //   return `${new Date(date).getFullYear()} ${monthName}`;
  // }

</script>


<div class="mb-10 md:mb-20 border border-gray-200 p-4 md:p-6 bg-gray-100 rounded-xl md:rounded-2xl text-gray-800">

  <div class="flex justify-between items-end mb-2">
    <h2 class="text-md md:text-xl font-bold mr-2">{@html project.title}</h2>
    <div class="hidden md:flex grow h-1 border-t border-gray-300 border-dotted"></div>
    <div class="flex gap-5 pt-1 ml-3">
      <a class="w-6 h-6" target="_blank" href={project.liveUrl}><img src={external} alt='live link'></a>
      <a class="w-6 h-6" target="_blank" href={project.codeUrl}><img src={code} alt='code link'></a>
    </div>
  </div>

  <div class="mb-6">
    <!-- <span> {namedDate(project.date)} </span> -->
    <span> {project.date.replace('-', '.')} </span>
    {#if project.endDate}
    <span class="text-gray-500"> – {project.endDate.replace('-', '.')}</span>
    {/if}
  </div>
  
  {#if project.description}
  <p class="text-sm text-gray-500 mb-6"> {@html project.description} </p>
  {/if}
  
  <p class="text-sm md:text-md mb-2 text-gray-500 font-mono"> {separateArrayItmes(project.stack)} </p>

  {#if project.images && project.images.length > 0}
  <div class="overflow-hidden w-[calc(100%+1rem)] md:w-[calc(100%+1.5rem)] pt-6">
    <div class="flex gap-4 md:gap-6 h-[25vh] md:h-[38vh] overflow-x-auto scroll-smooth no-scrollbar">
      {#each project.images as image}
        {#if image.url}
        <img
          alt={image.alt}
          use:lazyLoad={image.url}
          class="ph object-cover w-auto opacity-0 transition-opacity duration-500 last:mr-4 md:last:mr-6 rounded-md md:rounded-xl border border-gray-200 shadow-sm"
        />
        {/if}
      {/each}
    </div>
  </div>
  {/if}

</div>