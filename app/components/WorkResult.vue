<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  projectName: string;
  period: string;
  link?: string;
  results: string[];
}>();

const projectNameParts = computed(() => {
  const [prefix, linkedName] = props.projectName.split('|').map((part) => part.trim());

  return {
    prefix,
    linkedName
  };
});
</script>

<template>
  <article class="space-y-3">
    <div class="flex justify-between space-y-1">
      <h3 class="text-xl font-semibold text-slate-900">
        <template v-if="link && projectNameParts.linkedName">
          {{ projectNameParts.prefix }} |
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="text-[#FF383C] underline-offset-4 transition hover:underline"
          >
            {{ projectNameParts.linkedName }}
          </a>
        </template>
        <template v-else>
          {{ projectName }}
        </template>
      </h3>
      <p class="text-sm leading-6 text-slate-500">
        {{ period }}
      </p>
    </div>

    <ul class="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
      <li v-for="result in results" :key="result">
        {{ result }}
      </li>
    </ul>
  </article>
</template>
