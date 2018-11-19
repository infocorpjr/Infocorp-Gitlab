<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-vertical-center">
                    <div class="column">
                        <img src="img/icons/apple-icon-180x180.png"/>
                    </div>
                    <div class="column">
                        <h1 class="animated fadeIn title">
                            <b class="has-text-link">Infocorp</b> Gitlab
                        </h1>
                        <h2 class="animated fadeIn subtitle">{{msg}}</h2>
                    </div>
                </div>
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