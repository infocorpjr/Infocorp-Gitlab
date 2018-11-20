<template>
    <div>
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">
                    Meus grupos
                </h1>
                <h2 class="subtitle">
                    Aqui estão todos os grupos em que pertenço
                </h2>
            </div>
        </div>
        <div v-for="group in groups" v-bind:key="group.id">
            <div class="animated fadeIn columns is-vertical-center">
                <div class="column is-1">
                    <img class="avatar" v-if="group.avatar_url" v-bind:src="group.avatar_url" v-bind:title="group.id"/>
                </div>
                <div class="column">
                    <h4 class="is-size-4 is-uppercase">
                        <router-link :to="{ name: 'group.show', params: { group: group.id }}">
                            {{group.name}}
                        </router-link>
                    </h4>
                    <p>- {{group.description || 'Sem descrição' }}</p>
                </div>
            </div>
        </div>
        <p class="has-text-centered" v-if="!groups">Carregando ...</p>
    </div>
</template>

<script>
    export default {
        name: "GroupIndex",
        data: function () {
            return {
                error: false,
                groups: null
            }
        },
        methods: {
            say: function (message) {
                alert(message)
            }
        },
        created: function () {

        },
        mounted: function () {
            let _self = this;
            this.$http.get('https://gitlab.com/api/v4/groups?access_token=' + this.$cookies.get('__token'))
                .then(function (response) {
                    _self.groups = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    _self.error = true;
                });
        }
    }
</script>

<style scoped>
    .columns {
        padding: 3rem 1.5rem;
    }

    .avatar {
        width: 100%;
        border: 3px solid #eee;
        border-radius: 50%;
    }
</style>