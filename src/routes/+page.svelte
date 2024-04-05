<script lang="ts">
  import { onMount } from 'svelte';
  import { ModalType } from '$lib/types';

  import { projects } from '$lib/project-data';
  import WorkItem from '$lib/WorkItem.svelte';
  import Modal from '$lib/Modal.svelte';
  import { Github, Linkedin, Mail, Phone, Download, Sun, Moon } from 'svelte-feathers';

  const sitedata = {
    title: 'farzadgo',
    description: 'Farzad Golghasemi: Frontend Web Developer based in Germany',
    image: '/farzadgo-dev.png',
    url: 'https://fago.vercel.app'
  }

  let showModal = false;
  let modalType: ModalType;

  let body: HTMLElement | null;
  let activeTheme = 'light';
  let lastModified: string;

  const namedDate = (date: string) => {
    let monthName = new Date(date).toLocaleString('default', { month: 'long' });
    let day = new Date(date).getDate();
    return `${monthName.substring(0, 3)} ${day}, ${new Date(date).getFullYear()}`;
  }

  const modalBtnStyle = 'bg-zinc-100 dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-600 py-1 px-3 rounded-full';
  const contactIconStyle = 'h-4 w-4 md:h-5 md:w-5 stroke-[1.5] fill-none mr-4 md:mr-3';
  const settingsIconStyle = 'h-8 w-8 stroke-[1.0] fill-none';

  $: {
    if (body) {
      if (showModal) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
  }

  const closeModal = () => showModal = false;

  const handleModal = (type: string) => {
    showModal = true;

    switch (type) {
      case 'experience':
        modalType = ModalType.EXPERIENCE;
        break;
      case 'skills':
        modalType = ModalType.SKILLS;
        break;
      case 'education':
        modalType = ModalType.EDUCATION;
        break;
      default:
        modalType = ModalType.EXPERIENCE;
    }
  }

  const toogleTheme = () => {
    if (body && !body.classList.contains('dark')) {
      body.classList.add('dark');
      activeTheme = 'dark';
    } else {
      body?.classList.remove('dark');
      activeTheme = 'light';
    }
  }

  onMount(() => {
    body = document.querySelector('body');
    lastModified = document.lastModified;
  });

</script>

<svelte:head>
	<title> {sitedata.title} </title>
	<meta name="description" content={sitedata.description}/>
  <meta name="image" content={`${sitedata.url}${sitedata.image}`} />
  <meta property="og:title" content={sitedata.title} />
  <meta property="og:description" content={sitedata.description} />
  <meta property="og:image" content={`${sitedata.url}${sitedata.image}`} />
  <meta property="og:url" content={sitedata.url} />
  <meta property="og:type" content="website" />
</svelte:head>


<section class="px-4 py-8 lg:w-[910px] text-zinc-800 dark:text-zinc-300">

  <h1 class="text-3xl md:text-4xl font-bold mb-2"> Farzad Golghasemi </h1>
  <h3 class="md:text-xl mb-10"> Frontend Web Developer based in Germany </h3>

  <ul class="contact flex flex-col md:flex-row gap-3 md:gap-8 mb-10 md:mb-20">

    <li class="flex items-center">
      <Mail class={contactIconStyle}/>
      <span> farzyxo@gmail.com </span>
    </li>
    <li class="flex items-center">
      <Phone class={contactIconStyle}/>
      <span> +49 177 9115469 </span>
    </li>
    <li class="flex items-center">
      <Github class={contactIconStyle}/>
      <a class="underline underline-offset-2 decoration-[1.5px] decoration-zinc-400" target="_blank" href="https://github.com/farzadgo/"> farzadgo </a>
    </li>
    <li class="flex items-center">
      <Linkedin class={contactIconStyle}/>
      <a class="underline underline-offset-2 decoration-[1.5px] decoration-zinc-400" target="_blank" href="https://www.linkedin.com/in/farzadgo/"> in/farzadgo </a>
    </li>
  </ul>

  <div class="flex gap-5 justify-center mb-14 md:mb-20 items-end">
    {#if lastModified}
      <p class="text-sm"> Last updated {namedDate(lastModified)} </p>
    {/if}
    <a href="/Farzad-Golghasemi_dev-CV_2024-03_EN.pdf" download> <Download class={settingsIconStyle}/> </a>
    <button on:click={toogleTheme}>
      {#if activeTheme === 'dark'}
        <Sun class={settingsIconStyle}/>
      {:else}
        <Moon class={settingsIconStyle}/>
      {/if}
    </button>
  </div>

  <div class="flex flex-col gap-4 mb-20">
    <button on:click={() => handleModal('experience')} class={modalBtnStyle}> Relevant Expriences </button>
    <button on:click={() => handleModal('skills')} class={modalBtnStyle}> Skills </button>
    <button on:click={() => handleModal('education')} class={modalBtnStyle}> Education </button>
  </div>

  {#if showModal}
    <Modal closeHandler={closeModal} {modalType} />
  {/if}

  <div class="mb-10">
    <h2 class="text-lg font-bold mb-2" > Selected Web Projects <span class="text-sm font-thin">(Newest first)</span></h2>
    <p class="text-sm"> <i> * Following web-projects are programmed and designed by Farzad Golghasemi unless mentioned otherwise.  </i></p>
  </div>

  {#each projects as project}
    <WorkItem {project} />
  {/each}

</section>