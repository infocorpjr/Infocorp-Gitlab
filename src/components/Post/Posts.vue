<template>
    <section>
        <h2 class="title is-2">Todos os posts</h2>

        <div class="animated shake notification is-danger has-text-centered" v-if="error">
            <button class="delete" v-on:click="error=false"></button>
            Houve um erro ao tentar recuperar os dados !
        </div>

        <table class="table is-striped">
            <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
            </thead>
            <tbody>
            <tr class="animated fadeIn" v-for="post in posts">
                <td>{{post.id}}</td>
                <td>{{post.title}}</td>
                <td>{{post.body}}</td>
            </tr>
            <tr v-if="!posts">
                <td colspan="3">Aguarde um momento, buscando...</td>
            </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
    /**
     * Props validation
     *
     * String
     * Number
     * Boolean
     * Array
     * Object
     * Date
     * Function
     * Symbol
     */

    export default {
        name: "Posts",
        data: function () {
            return {
                error: false,
                posts: null
            }
        },
        props: {
            postss: {
                type: Array,
                required: false,
                default: null
            }
        },
        created: function () {
            let _self = this;
            this.$http.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (response) {
                    _self.posts = response.data;
                })
                .catch(function (e) {
                    _self.error = true;
                });
        }
    }
</script>

<style scoped>

</style>