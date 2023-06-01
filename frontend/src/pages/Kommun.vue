<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import kommuner from '../assets/communes.json'

interface Kommun {
  keywords: string[]
  restaurants: any
  id: number
  name: string
}

const route = useRoute()
const kommun = ref<Kommun>()
onMounted(() => {
  kommun.value = kommuner.find(k => k.id.toString() === (route.params.id as string))
})
</script>

<template>
  <h1>{{ kommun?.name }}</h1>
</template>
