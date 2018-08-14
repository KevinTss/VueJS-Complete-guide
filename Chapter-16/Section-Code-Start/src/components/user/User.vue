<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click='navigateToHome'>Go to home</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    watch: {
      
    },
    methods: {
        navigateToHome() {
            this.$router.push('/')
        }
    }
}
</script>
