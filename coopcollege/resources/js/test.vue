


<script>
export default {
  data() {
  	return {
	    awesome: true
  	}
	}
}
</script>

<template>
  <button @click="awesome = !awesome">toggle</button>

	<h1 v-if="awesome">Vue is awesome!</h1>
	<h1 v-else>Oh no 😢</h1>
</template>