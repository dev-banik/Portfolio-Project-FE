<script lang="ts">
	import { base } from '$app/paths';
	import { title, groupByCategory } from '@data/skills';
	import { getAssetURL } from '$lib/data/assets';

	import SearchPage from '$lib/components/SearchPage.svelte';
	import Card from '$lib/components/Card/Card.svelte';
	import Chip from '$lib/components/Chip/Chip.svelte';
	import UIcon from '$lib/components/Icon/UIcon.svelte';
	import CardDivider from '$lib/components/Card/CardDivider.svelte';

	let result = groupByCategory('');

	const onSearch = (e: CustomEvent<{ search: string }>) => {
		const query = e.detail.search;

		result = groupByCategory(query.trim().toLowerCase());
	};
</script>

<svelte:head>
    <title>Skills | Portfolio | Parthib Banik</title>
</svelte:head>

<!-- <SearchPage {title} on:search={onSearch}> -->

<div style="display: flex; justify-content: center; align-items: center; height: 20vh; font-size: 4em; font-weight: bold;">
	Skills
</div>

{#if result.length === 0}
	<div class="p-5 col-center gap-3 m-y-auto text-[var(--accent-text)] flex-1">
		<UIcon icon="i-carbon-cube" classes="text-3.5em" />
		<p class="font-300">Could not find anything...</p>
	</div>
{:else}
	<div class="col mt-5 gap-7">
		{#each result as group (group.category.slug)}
			<div class="col gap-5 mb-7">
				<div class="row items-center gap-5">
					<div class="bg-[var(--main-hover)] h-[1px] w-[20px]" />
					<p class="text-[var(--main-close)]">{group.category.name}</p>
					<div class="flex-1 bg-[var(--main-hover)] h-[1px]" />
				</div>
				<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3 lg:gap-5">
					{#each group.items as skill (skill.slug)}
						<Card>
							<p>{skill.name}</p>
						</Card>
					{/each}
				</div>
			</div>
		{/each}
	</div>
{/if}
<!-- </SearchPage> -->
