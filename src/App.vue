<template>
    <div id="app" class="app">
        <!-- Navbar content -->
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <router-link class="navbar-item" to="/">
                    <img src="img/icons/apple-icon-114x114.png">
                </router-link>
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   @click="collapsed=!collapsed"
                   v-bind:class="{ 'is-active': collapsed }">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu" v-bind:class="{ 'is-active': collapsed }">
                <div class="navbar-start">
                    <router-link class="navbar-item" to="/">
                        Home
                    </router-link>
                    <router-link class="navbar-item" to="/group">
                        Group
                    </router-link>
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>
                        <div class="navbar-dropdown">
                            <router-link class="navbar-item" to="/about">About</router-link>
                            <router-link class="navbar-item" to="/post">Posts</router-link>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider">
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Container content -->
        <div class="container">
            <!-- View -->
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                collapsed: !true
            }
        },
        mounted: function () {
            // alert(this.$cookies.get('__token'));
        }
    };
</script>

<style scoped>
    .navbar-menu {
        -webkit-box-shadow: none;
        box-shadow: none;
    }
</style>