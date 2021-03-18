<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-left">
        <router-link :to="{ name:'user.create'}" class="btn btn-success my-3">Add user<span style="font-size:18px"> +</span></router-link>

        <table class="table">
          <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" class="text-left">pic</th>
            <th scope="col" class="text-left">First Name</th>
            <th scope="col" class="text-left">Last Name</th>
            <th scope="col" class="text-left">Email</th>
            <th scope="col">Action</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user['id'] }}</th>
            <td align="left">
              <img :src="user['picture']" width="100" style="border: 1px solid #000" alt="">
            </td>
            <td align="left">{{ user['first_name'] }}</td>
            <td align="left">{{ user['last_name'] }}</td>
            <td align="left">{{ user['email'] }}</td>
            <td>
              <router-link :to="{ name: 'user.edit', params: { id: user.id }}" class="btn btn-warning mr-2">Edit</router-link>
              <button  class="btn btn-danger" v-on:click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'UserList',
  components: {

  },
  data() {
    return {
      users: null
    }
  },
  methods: {
    getUser() {
      this.$http.get('http://127.0.0.1:8000/api/user').then(response => (this.users = response.data));
    },
    deleteUser(id) {
      if (confirm('Are you sure you want to delete this post?')) {
        this.$http.delete('http://127.0.0.1:8000/api/user/' + id);
      }
    },
  },
  mounted: function(){
    this.getUser();
  }
}
</script>
