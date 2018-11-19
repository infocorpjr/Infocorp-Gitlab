<template>
    <Posts post=""/>
</template>

<script>
    // @ is an alias to /src
    import Posts from "@/components/Post/Posts.vue";

    export default {
        name: "Post",
        components: {
            Posts
        }
    }
</script>

<style scoped>

</style>