<script setup lang="ts">
defineProps<{
  projectName: string;
  role: string;
  period: string;
  link: string;
  description: string;
  responsibilities: string[];
  skills: string[];
}>();
</script>

<template>
  <article class="space-y-4">
    <div class="flex justify-between space-y-1">
      <div class="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <h3 class="text-xl font-semibold text-slate-900">
          {{ projectName }}
        </h3>
        <p class="text-sm font-semibold text-slate-500">
          {{ role }} |
          <a
            :href="link"
            target="_blank"
            rel="noopener noreferrer"
            class="break-all text-sm font-semibold leading-6 text-slate-700 underline-offset-4 transition hover:text-slate-950 hover:underline"
          >
            {{ link }}
          </a>
        </p>
      </div>

      <p class="text-sm leading-6 text-slate-500">
        {{ period }}
      </p>
    </div>

    <p class="text-base leading-7 text-slate-600">
      {{ description }}
    </p>

    <div class="space-y-2">
      <h4
        class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
      >
        담당
      </h4>
      <ul class="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        <li v-for="responsibility in responsibilities" :key="responsibility">
          {{ responsibility }}
        </li>
      </ul>
    </div>

    <div class="space-y-2">
      <h4
        class="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500"
      >
        기술
      </h4>
      <p class="text-base leading-7 text-slate-600">
        {{ skills.join(', ') }}
      </p>
    </div>
  </article>
</template>
