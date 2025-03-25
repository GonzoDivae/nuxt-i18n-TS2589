<script lang="ts" setup>
const { localeProperties } = useI18n();
</script>

<template>
  <div>
    <h1>Nuxt I18n Starter - {{ $t('hello') }}!</h1>
    {{ localeProperties }}
  </div>
</template>
