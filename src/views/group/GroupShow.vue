<template>
    <section>
        <div class="columns">
            <div class="column is-12 has-text-centered" v-if="!group">Carregando ...</div>
            <div class="column is-12">
                <div class="hero" v-if="group">
                    <div class="hero-body">
                        <h1 class="title">
                            {{group.name}}
                        </h1>
                        <h2 class="subtitle">
                            {{group.description}}
                        </h2>
                    </div>
                </div>
            </div>
            <div class="column is-12">

            </div>
        </div>
        <div class="columns" v-if="group">
            <div class="column">
                <p class="is-size-4">Projetos</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "GroupShow",
        data: function () {
            return {
                group: null
            }
        },
        mounted: function () {
            let _self = this;
            let token = this.$cookies.get('__token');
            this.$http.get('https://gitlab.com/api/v4/groups/' + this.$route.params.group + '?access_token=' + token)
                .then(function (response) {
                    _self.group = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    _self.error = true;
                });
        }
    }
</script>

<style scoped>

</style>