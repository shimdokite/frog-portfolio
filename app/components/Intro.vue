<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
  }>(),
  {}
);

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value: boolean) => emit('update:modelValue', value)
});
</script>

<template>
  <Modal v-model="isOpen">
    <div class="space-y-4">
      <p
        class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500"
      >
        Introduce
      </p>
      <h2
        class="text-[clamp(1.5rem,3vw,1.6rem)] font-semibold leading-tight text-slate-900"
      >
        안녕하세요,<br />
        프론트엔드 개발자 심도연 입니다.
      </h2>
      <p class="text-base leading-7 text-slate-600">
        React(Next.js), Vue(Nuxt2), AngularJS 기반의 웹 서비스 및 백오피스 개발
        경험을 보유한 프론트엔드 개발자입니다.
      </p>
      <p class="text-base leading-7 text-slate-600">
        사용자 경험 개선과 서비스 운영 효율화를 위해 주문 관리, 결제, 물류
        시스템 등 다양한 기능을 구현해왔으며 REST API 연동과 성능 최적화 경험을
        갖추고 있습니다.
      </p>
      <p class="text-base leading-7 text-slate-600">
        단순히 동작하는 기능을 만드는 것을 넘어 왜 문제가 발생했는지 탐구하고 더
        나은 구조와 사용자 경험으로 이어지는 개선 과정을 즐깁니다.
      </p>
    </div>
  </Modal>
</template>
