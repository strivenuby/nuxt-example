<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-svg-demo
      </h1>
      <svg aria-hidden="true">
        <use xlink:href="#icon-example"/>
      </svg>
      <svg aria-hidden="true">
        <use xlink:href="#icon-eye"/>
      </svg>
      <svg aria-hidden="true">
        <use xlink:href="#icon-form"/>
      </svg>
      <svg aria-hidden="true">
        <use xlink:href="#icon-link"/>
      </svg>
      <svg-icon
        v-for="item in icon"
        :key="item"
        :iconClass="item" />
    </div>
  </section>
</template>

<script>
// import "~/assets/svg/user.svg";
export default {
  data() {
    return {
      icon: [
        // "example",
        // "eye",
        // "form",
        // "link",
        "nested",
        "password",
        "table",
        "tree",
        "user"
      ]
    };
  },
  components: {}
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

svg {
  width: 30px;
  margin: 0px 5px;
}
</style>
