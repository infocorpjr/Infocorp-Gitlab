<template>
    <section>
        <div class="columns">
            <div class="column is-8">
                <h2 class="is-size-2 has-text-black-ter" v-if="group">{{group.name}}</h2>
                <h6 class="is-size-6" v-if="group">{{group.description}}</h6>
                <nav class="level">
                    <div class="level-item has-text-centered" v-if="group">
                        <div>
                            <p class="heading">Projetos</p>
                            <p class="title">{{group.projects.length}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered" v-if="group">
                        <div>
                            <p class="heading">Compartilhados</p>
                            <p class="title">{{group.shared_projects.length}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered" v-if="members">
                        <div>
                            <p class="heading">Membros</p>
                            <p class="title">{{members.length}}</p>
                        </div>
                    </div>
                    <div class="level-item has-text-centered" v-if="issues">
                        <div>
                            <p class="heading">Atividades</p>
                            <p class="title">{{issues.length}}</p>
                        </div>
                    </div>
                </nav>
                <div v-if="group">
                    <div class="tabs">
                        <ul>
                            <li class="is-active"><a>PROJETOS</a></li>
                        </ul>
                    </div>
                    <article class="message" v-for="project in group.projects" v-bind:key="project.id"
                             v-bind:class="{'is-success': !project.archived,'is-primary': project.archived}">
                        <div class="message-body">
                            <span class="is-uppercase">{{project.name}} </span>
                            <span class="tag is-danger" v-if="project.archived">arquivado</span>
                            <br>
                            - {{project.description || 'Projeto sem descrição'}}
                        </div>
                    </article>
                </div>
            </div>
            <div class="column is-4">
                <div v-if="members">
                    <p class="is-size-3 has-text-black">Membros</p>
                    <div v-for="(member, index) in members">
                        <article class="media">
                            <figure class="media-left">
                                <p class="image is-64x64">
                                    <img v-bind:src="member.avatar_url">
                                </p>
                            </figure>
                            <div class="media-content">
                                <div class="content">
                                    <p>
                                        <strong>{{member.name}}</strong>
                                        <br>
                                        <small>@{{member.username}}</small>
                                        <br>
                                        -
                                    </p>
                                </div>
                            </div>
                            <div class="media-right">
                                <button class="delete"></button>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "GroupShow",
        data: function () {
            return {
                error: null,
                group: null,
                members: null,
                issues: []
            }
        },
        methods: {
            requestGroupsIssues: function (page) {
                let vm = this;
                // Verifica se o métodos existe.
                // let page = page ? page : 1;
                // GET /groups/:id/issues
                this.$http.get('https://gitlab.com/api/v4/groups/' + this.$route.params.group + '/issues', {
                    params: {
                        access_token: this.$cookies.get('__token'),
                        per_page: 100,
                        page: page
                    }
                }).then(function (response) {
                    response.data.forEach(function (value) {
                        vm.issues.push(value);
                    });
                    // Verifica se existe uma proxima página
                    if (response.headers['x-next-page']) {
                        vm.requestGroupsIssues(response.headers['x-next-page']);
                    }
                }).catch(function (error) {
                    vm.error = true;
                });
            }
        },
        mounted: function () {
            let vm = this;
            let token = this.$cookies.get('__token');
            // GET /groups/:id
            this.$http.get('https://gitlab.com/api/v4/groups/' + this.$route.params.group + '?access_token=' + token)
                .then(function (response) {
                    vm.group = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    vm.error = true;
                });
            // GET /groups/:id/members
            this.$http.get('https://gitlab.com/api/v4/groups/' + this.$route.params.group + '/members', {
                params: {
                    access_token: token,
                    per_page: 100,
                    orderBy: 'name'
                }
            }).then(function (response) {
                vm.members = response.data;
            }).catch(function (error) {
                console.log(error);
                vm.error = true;
            });
            // Faz a solicitação das atividades do projeto.
            this.requestGroupsIssues();
        }
    }
</script>

<style scoped>
    .level {
        margin-top: 5%;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
    }
</style>