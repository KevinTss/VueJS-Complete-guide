<template>
    <div>
        <h3>Some User Details</h3>
        <p>User loaded has id : {{$route.params.id}}</p>
        <router-link tag="button" :to="link" class="btn btn-primary">Edit</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            link: { 
                name: 'userEdit', 
                params: { id: this.$route.params.id }, 
                query: { locale: 'en' }, 
                hash: '#data'
            }
        }
    }
}
</script>
