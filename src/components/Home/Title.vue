<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <h1 class="title">Infocorp Gitlab</h1>
                <h2 class="subtitle">{{msg}}</h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Title",
        props: {
            msg: String
        }
    }
</script>

<style scoped>
.title {
    font-size: 3em;
}
</style>