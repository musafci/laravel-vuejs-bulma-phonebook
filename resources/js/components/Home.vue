<template>
    <div>
        <nav class="panel column is-offset-2 is-8" style="margin-top:20px;">
            <p class="panel-heading">
                Vue.js + Larvel Phonebook
                <button class="button is-link is-outlined" @click="openAddModal">
                    Add New
                </button>
                <span class="is-pulled-right" v-if="loading">
                    <i class="fa fa-refresh fa-spin fa-2x fa-fw"></i>
                </span>
            </p>
            <div class="panel-block">
                <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search">
                <span class="icon is-left">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
                </p>
            </div>

            <a class="panel-block" v-for="item,key in lists">
                <span class="column is-9">
                    {{ item.name }}
                </span>
                <span class="panel-icon column is-1">
                    <i class="fa fa-trash has-text-danger" aria-hidden="true" @click="deleteItem(key, item.id)"></i>
                </span>
                <span class="panel-icon column is-1">
                    <i class="fa fa-edit has-text-info" aria-hidden="true" @click="openUpdateModal(key)"></i>
                </span>
                <span class="panel-icon column is-1">
                    <i class="fa fa-eye has-text-primary" aria-hidden="true" @click="openShowModal(key)"></i>
                </span>
            </a>
        </nav>

        <Add :openmodal="addActive" @closeRequest="close"></Add>
        <Show :openmodal="showActive" @closeRequest="close"></Show>
        <Update :openmodal="updateActive" @closeRequest="close"></Update>
    </div>
</template>


<script>

let Add     = require("./Add.vue").default;
let Show    = require("./Show.vue").default;
let Update  = require("./Update.vue").default;

export default {
    components: {Add,Show,Update},

    data() {
        return{
            addActive: "",
            showActive: "",
            updateActive: "",
            lists: {},
            errors: {},
            loading: false,
        }
    },

    mounted() {
        axios.post('/getData')
        .then((response) => {
            this.lists = response.data
        })
        .catch((error) => {
            this.errors = error.response.data.errors
        })
    },

    methods: {
        openAddModal: function() {
            this.addActive = "is-active";
        },
        openShowModal: function(key) {
            this.$children[1].list = this.lists[key];
            this.showActive = "is-active";
        },
        openUpdateModal: function(key) {
            this.$children[2].list = this.lists[key];
            this.updateActive = "is-active";
        },
        deleteItem: function(key, id) {

            if(confirm("Are you sure?")) {
                this.loading = !this.loading;
                axios.delete(`/phonebook/${id}`)
                .then((response) => {
                    this.lists.splice(key,1);
                    this.loading = !this.loading;
                })
                .catch((error) => {
                    this.errors = error.response.data.errors
                })
            }
        },

        close: function() {
            this.addActive = "";
            this.showActive = "";
            this.updateActive = "";
        }
    }
}
</script>