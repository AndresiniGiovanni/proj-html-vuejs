<template>
  <section id="developer-tollset">
    <div class="container-fluid my-cont">
      <div class="row d-flex align-items-center">
        <div class="col-6">
          <div class="mb-3" id="developement">Developement</div>
          <h1 class="text-capitalize my-title">
            a complete <br />
            developer toolset
          </h1>
          <p class="mt-4">
            Launch your campaign and benefit from our expertise on designing
            <br />
            and managing conversion centered bootstrap4 html page.
          </p>
          <button class="btn btn-primary me-2 mt-2">Get Started</button>
          <button class="btn my-btn mt-2">Documentation</button>
          <div class="version mt-3">Current Version v2.6.0</div>
        </div>
        <div class="col-6 mt-5 mb-5 d-flex justify-content-end">
          <img class="w-75" :src="'/public/img/about.png'" alt="" />
        </div>
      </div>
    </div>
    <hr id="my-hr" />
    <div class="brand-section">
      <div class="container-fluid">
        <div class="row pt-4 pb-4">
          <div class="col-2" v-for="(image, index) in brands" key="index">
            <img :src="image.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section></section>
  <section></section>
  <section></section>
  <section></section>
</template>

<script>
export default {
  data() {
    return {
      info: [
        {
          title: "a complete developer toolset",
        },
        {
          parag:
            "launch your caompaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page.",
        },
      ],
      brands: [
        {
          image: "/public/img/amazon.svg",
        },
        {
          image: "/public/img/google.svg",
        },
        {
          image: "/public/img/lenovo.svg",
        },
        {
          image: "/public/img/paypal.svg",
        },
        {
          image: "/public/img/shopify.svg",
        },
        {
          image: "/public/img/spotify.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#developer-tollset {
  background-color: $backgroundHeader;

  #developement {
    width: 8rem;
    background-color: $backgroundIcons;
    color: $blueIcons;
    border-radius: 10px;
    padding-left: 12px;
    font-size: 16px;
  }
  .my-cont {
    width: 1350px;
    margin: 0 auto;
  }
  .my-title {
    font-weight: 600;
  }
  p,
  .version {
    color: $prgcolor;
  }
  .my-btn {
    color: $blueIcons;
    border: 1px solid $blueIcons;
  }
}
.brand-section {
  width: 1350px;
  margin: 0 auto;
  background-color: $backgroundHeader;

  img {
    width: 40%;
  }
}
#my-hr {
  color: $prgcolor;
}
</style>
