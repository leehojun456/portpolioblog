<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="flex justify-end p-4 gap-4 fixed top-0 left-0 right-0 items-center text-xl">
	<a href="/"><ion-icon name="home-outline">HOME</ion-icon></a>
	<a href="/login"><ion-icon name="log-in-outline">LOGIN</ion-icon></a>
</nav>
<div class="rounded-lg p-4 flex flex-col items-center justify-center w-dvw h-dvh align-middle">
	{@render children()}
</div>