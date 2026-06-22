<script setup lang="ts">
defineProps<{
  title: string;
  problem: string[];
  solution: string[];
  result: string[];
}>();
</script>

<template>
  <article class="space-y-5">
    <h3 class="text-xl font-semibold leading-8 text-slate-900">
      {{ title }}
    </h3>

    <section class="space-y-2">
      <h4 class="text-sm font-semibold text-slate-900">문제</h4>
      <ul class="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        <li v-for="item in problem" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="space-y-2">
      <h4 class="text-sm font-semibold text-slate-900">해결</h4>
      <ul class="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        <li v-for="item in solution" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>

    <section class="space-y-2">
      <h4 class="text-sm font-semibold text-slate-900">결과</h4>
      <ul class="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        <li v-for="item in result" :key="item">
          {{ item }}
        </li>
      </ul>
    </section>
  </article>
</template>
