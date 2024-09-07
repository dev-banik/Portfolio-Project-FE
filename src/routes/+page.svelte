<script lang="ts">
	import Carrousel from '$lib/components/Carrousel/Carrousel.svelte';
	import Icon from '$lib/components/Icon/Icon.svelte';
	import MainTitle from '$lib/components/MainTitle/MainTitle.svelte';
	import { titleSuffix } from '@data/app';
	import { links, description, lastName, name, title, skills } from '@data/home';
	import { items as skillsItems } from '@data/skills';
	import { useTitle } from '$lib/utils/helpers';
	import { isBlank } from '@riadh-adrani/utils';
	import { getPlatfromIcon } from '$lib/utils';
	import Assets, { getAssetURL } from '$lib/data/assets'; 

	let profileImage = Assets.Profile; 
	let resolvedProfileImage = getAssetURL(profileImage); 

	const isEmail = (email: string): boolean => {
		const reg =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		return !isBlank(email) && reg.test(email);
	};
</script>

<svelte:head>
	<title>{useTitle(title, titleSuffix)}</title>
</svelte:head>

<div class="col self-center flex-1 md:flex-row md:self-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px">
	<!-- Text section takes more space (3x the space of the image section) -->
	<div class="md:flex-[3] gap-10px">
		<MainTitle classes="md:text-left">{name} {lastName}</MainTitle>
		<p class="text-[var(--tertiary-text)] text-center md:text-left text-[1.2em] font-extralight">
			{description}
		</p>
		<div class="row justify-center md:justify-start p-y-15px p-x-0px gap-2">
			{#each links as link}
				<a class="decoration-none" href={`${isEmail(link.link) ? 'mailto:' : ''}${link.link}`} target="_blank" rel="noreferrer">
					<Icon icon={getPlatfromIcon(link.platform)} color={'var(--accent-text)'} size={'20px'} />
				</a>
			{/each}
		</div>
	</div>

	<!-- Profile image section takes less space (1/4 of the row width) -->
	<div class="md:flex-[1] p-y-10px flex justify-end">
		<img
		  src={resolvedProfileImage}
		  alt="ProfileImage"
		  class="profile-image w-[300px] h-[300px] object-cover" 
		/>
	</div>
</div>


<style>
	.profile-image {
		border-radius: 5px; 
  		transition: all 0.3s ease-in-out;
  		box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
	}

	.profile-image:hover {
  		box-shadow: 0 0 20px 5px rgba(58, 255, 255, 0.8), 0 0 35px 10px rgba(58, 255, 255, 0.6); 
  		transform: scale(1.05); 
	}
</style>
