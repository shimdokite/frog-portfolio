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
      <h2 class="text-3xl font-semibold text-slate-900">
        안녕하세요,<br />
        프론트엔드 개발자 심도연 입니다.
      </h2>
      <p class="text-base leading-7 text-slate-600">
        문제 해결과 사용자 경험 개선을 중심으로 끊임없이 고민합니다. <br />
        이커머스 스타트업에서 기능 개발과 유지보수를 통해 안정적인 서비스를
        구현해왔으며, 코드 품질을 고려한 구조적인 개발을 지향합니다.
      </p>
    </div>
  </Modal>
</template>
