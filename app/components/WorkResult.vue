<script setup lang="ts">
defineProps<{
  projectName: string;
  period: string;
  results: string[];
}>();
</script>

<template>
  <article class="space-y-3">
    <div class="flex justify-between space-y-1">
      <h3 class="text-xl font-semibold text-slate-900">
        {{ projectName }}
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
