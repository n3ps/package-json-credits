<template>
  <div class="mb-8">
    <h2 class="smallcaps text-xl text-center">
      {{ heading }}
    </h2>

    <div class="flex opacity-80">
      <ul class="flex-1 mr-2 capitalize text-right">
        <li v-for="(item, i) in split(data)[0]" :key="i">
          {{ item | format }}
        </li>
      </ul>
      <ul class="flex-1 ml-2 smallcaps">
        <li v-for="(item, i) in split(data)[1]" :key="i">
          {{ item | format }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
function kebabToWords (str) {
  return str.replace(/@/g, '').replace(/[-/]/g, ' ')
}

function splitObject (obj) {
  const keys = Object.keys(obj)
  const half = Math.round(keys.length / 2)

  return [
    keys.slice(0, half),
    keys.slice(half)
  ]
}

export default {
  props: {
    heading: String,
    data: Object
  },
  filters: {
    format: kebabToWords
  },
  methods: {
    split: splitObject
  }
}
</script>