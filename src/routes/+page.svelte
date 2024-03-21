<script>
  import { projects } from "$lib/projects";
  import WorkItem from "$lib/WorkItem.svelte";

  import github from '$lib/assets/github.svg';
  import linkedin from '$lib/assets/linkedin.svg';
  import mail from '$lib/assets/mail.svg';
  import phone from '$lib/assets/phone.svg';

  // console.log(projects);

</script>

<svelte:head>
	<title> farzadgo </title>
	<meta name="description" content="farzadgo webdev works"/>
</svelte:head>


<section class="px-4 py-8 lg:w-[1010px]">

  <header class="mb-32 text-gray-800">
	  <h1 class="text-3xl md:text-4xl font-bold mb-4"> Farzad Golghasemi </h1>
    <h3 class="md:text-xl mb-6 "> Frontend web developer based in Bremen and Berlin. </h3>

    <ul class="contact flex flex-col md:flex-row gap-3 md:gap-8 ">
      <li class="flex items-end">
        <img src={github} class="h-6 w-6 mr-3" alt='github-icon'>
        <a target="_blank" href="https://github.com/farzadgo/"> farzadgo </a>
      </li>
      <li class="flex items-end">
        <img src={linkedin} class="h-6 w-6 mr-3" alt='linkedin-icon'>
        <a target="_blank" href="https://www.linkedin.com/in/farzadgo/"> in/farzadgo </a>
      </li>
      <li class="flex items-end">
        <img src={mail} class="h-6 w-6 mr-3" alt='mail-icon'>
        <span> fagosemi@gmail.com </span>
      </li>
      <li class="flex items-end">
        <img src={phone} class="h-6 w-6 mr-3" alt='phone-icon'>
        <span> +49 177 9115469 </span>
      </li>
    </ul>
	</header>

  <div class="mb-10 text-gray-600">
    <!-- <h2 class="text-2xl mb-2 font-bold" > Web Projects </h2> -->
    <p class="text-md"> <i> * Following web-projects are programmed and designed by Farzad Golghasemi unless mentioned otherwise </i></p>
  </div>

  {#each projects as project}
    <WorkItem {project} />
  {/each}


</section>