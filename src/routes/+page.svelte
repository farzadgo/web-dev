<script lang="ts">
  import { onMount } from 'svelte';
  import { ModalType } from '$lib/types';

  import { projects } from '$lib/project-data';
  import WorkItem from '$lib/WorkItem.svelte';
  import Modal from '$lib/Modal.svelte';
  import { Github, Linkedin, Mail, Phone } from 'svelte-feathers';

  let showModal = false;
  let modalType: ModalType;

  let body: HTMLElement | null;

  const btnStyle = 'bg-gray-100 border border-gray-200 py-1 px-3 rounded-full';
  const iconStyle = 'h-5 w-5 md:h-6 md:w-6 stroke-[1.0] fill-none stroke-[#cc0066] mr-4 md:mr-3';

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

  onMount(() => {
    body = document.querySelector('body');
  });

</script>

<svelte:head>
	<title> farzadgo </title>
	<meta name="description" content="farzadgo webdev works"/>
</svelte:head>


<section class="px-4 py-8 lg:w-[910px] text-gray-800">

	  <h1 class="text-3xl md:text-4xl font-bold mb-2"> Farzad Golghasemi </h1>
    <h3 class="md:text-xl mb-10"> Frontend Web Developer based in Bremen and Berlin. </h3>

    <ul class="contact flex flex-col md:flex-row gap-3 md:gap-8 mb-16">
      <li class="flex items-end">
        <Github class={iconStyle}/>
        <a target="_blank" href="https://github.com/farzadgo/"> farzadgo </a>
      </li>
      <li class="flex items-end">
        <Linkedin class={iconStyle}/>
        <a target="_blank" href="https://www.linkedin.com/in/farzadgo/"> in/farzadgo </a>
      </li>
      <li class="flex items-end">
        <Mail class={iconStyle}/>
        <span> farzyxo@gmail.com </span>
      </li>
      <li class="flex items-end">
        <Phone class={iconStyle}/>
        <span> +49 177 9115469 </span>
      </li>
    </ul>

  <div class="flex flex-col gap-4 mb-24">
    <button on:click={() => handleModal('experience')} class={btnStyle}> Relevant Expriences </button>
    <button on:click={() => handleModal('skills')} class={btnStyle}> Skills </button>
    <button on:click={() => handleModal('education')} class={btnStyle}> Education </button>
  </div>

  {#if showModal}
    <Modal closeHandler={closeModal} {modalType} />
  {/if}

  <div class="mb-10">
    <h2 class="text-xl mb-2 font-bold" > Selected Web Projects </h2>
    <p class="text-md"> <i> * Following web-projects are programmed and designed by Farzad Golghasemi unless mentioned otherwise </i></p>
  </div>

  {#each projects as project}
    <WorkItem {project} />
  {/each}

</section>