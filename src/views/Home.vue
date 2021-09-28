<template>
  <div id="home-page" class="full-height bg-danger p-4">
    <div class="container pt-3">
      <div class="row pb-5">
        <div class="col-lg-6">
        </div>
        <div class="col-lg-6">
          <div class="text-center mb-3">
            <h1 class="display-1">{{title}}</h1>
            <h3 class="display-6">Visit you dreamplace</h3>
          </div>
          <div class="border p-3 p-md-5 bg-white rounded shadow">
            <form>
              <div class="form-group">
                <input 
                        type="text" 
                        placeholder="Type in destination"
                        class="form-control"
                        >
                <input  type="date" id="start" name="trip-start"
                        value=""
                        min="2021-01-01" 
                        max="2021-12-31"
                        >
                <input  type="date" id="end" name="trip-start"
                        value=""
                        min="2021-01-01" 
                        max="2021-12-31"
                        >
              <div>
                <button type="submit" class="btn btn-info mt-3">Search</button>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      title: 'Explore the world'
    }
  },
  components: {
  }
}
</script>

<style scoped>

#home-page{
  background-color: #92D2F2;
  background: url('../assets/mypic.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.display-1, .display-6{
  color: rgb(211, 81, 200);
}

</style>
