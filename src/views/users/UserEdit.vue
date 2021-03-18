<template>
  <div class="container">
    <div class="row">
      <div class="col-6 text-left pt-5" v-if="user">
        <h1 class="pb-3">Update User</h1>
        <div class="form-group">
          <label for="first_name">First Name</label>
          <input type="name" class="form-control" id="first_name" placeholder="Enter first name" v-model="user['first_name']">
        </div>
        <div class="form-group">
          <label for="last_name">Last Name</label>
          <input type="name" class="form-control" id="last_name" placeholder="Enter last name" v-model="user['last_name']">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email" v-model="user['email']">
        </div>
        <div class="form-group">
           <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
        </div>
        <button class="btn btn-primary" v-on:click="save($route.params.id)">Save</button>
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'UserEdit',
  components: {

  },
  data() {
    return {
      user: null
    }
  },
  methods: {
    get(id) {
      this.$http.get('http://127.0.0.1:8000/api/user/' + id + '/edit').then(response => (this.user = response.data));
    },
    save(id) {
      let formData = new FormData();

      Object.keys(this.user).map(key => (formData.append(key, this.user[key])));

      this.$http.patch('http://127.0.0.1:8000/api/user/' + id, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => (this.$route.push('/user')));
    }
  },
  mounted: function(){
    this.get(this.$route.params.id);
  }
}
</script>
