<section></section>
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
  <section class="key-features">
    <div>
      <h3>Key Features</h3>
      <p>
        Start Working with
        <span style="color: blue; font-weight: 600">Landrick</span> that can
        provide everything you need to generate <br />
        awareness, drive traffic, connect.
      </p>
    </div>

    <div class="container-fluid mt-5">
      <div class="row d-flex justify-content-between">
        <div class="col-3 card my-card" v-for="(card, index) in store.keyCards">
          <div class="mt-3">
            <i class="p-3 my-awe" :class="card.fontawe"></i>
          </div>
          <h6 class="mt-3" style="font-weight: 600; text-transform: capitalize">
            {{ card.name }}
          </h6>
          <p>{{ card.prg }}</p>
          <div class="text-capitalize myReadMore">
            {{ card.readMore }}
            <span
              ><i
                style="font-size: 13px"
                :class="card.angleRight"
                class="pb-4"
              ></i
            ></span>
          </div>
        </div>
      </div>
    </div>

    <div class="quickstart mt-5">
      <div class="text-capitalize text-center blueicons mb-2">quick start</div>
      <h3 class="text-center">Awesome isn't it? Let's dive in!</h3>
      <p class="text-center">
        Start Working with
        <span style="color: blue; font-weight: 600">Landrick</span> that can
        provide everything you need to generate <br />
        awareness, drive traffic, connect.
      </p>

      <div class="my-width">
        <div class="container my-npm-cont pt-4 pb-4 rounded-2">
          <div
            class="text-white gray-layer d-flex justify-content-around rounded-1 p-1 me-2 ms-2 mb-3 "
          >
            <span>npm</span>
            <span>nuget</span>
            <span>spm</span>
            <span>github</span>
          </div>
          <span class="myEntity ms-2"
            >&#36;<span class="my-gray">npm install</span></span
          >
          <span class="myEntity ms-2"
            >&#45;g
            <span class="my-gray">claps.js</span>
          </span>
        </div>
        <div class="mt-3">
          <span class="pe-2"
            ><i class="fa-regular fa-circle-check my-circle"></i
          ></span>

          <span class="pe-4 check-text"> Organize your data </span>

          <span class="pe-2">
            <i class="fa-regular fa-circle-check my-circle"></i
          ></span>
          <span class="check-text">Work with any team</span>
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
import { store } from "../store";
export default {
  data() {
    return {
      store,
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

.my-cont,
.key-features,
.quickstart {
  width: 1200px;
  margin: 0 auto;
}

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
  width: 1200px;
  margin: 0 auto;
  background-color: $backgroundHeader;

  img {
    width: 40%;
  }
}
#my-hr {
  color: $prgcolor;
}

.key-features {
  margin-top: 6rem;

  p {
    color: $prgcolor;
  }
  .my-awe {
    background-color: $backgroundIcons;
    color: $blueIcons;
    font-size: 19px;
    border-radius: 5px;
  }
  .my-card {
    width: 22%;
    border: 1px solid $backgroundIcons;
    .myReadMore {
      color: $blueIcons;
    }
  }
}
.my-width {
  width: 60%;
  height: auto;
  margin: 0 auto;
}
.my-npm-cont {
  background-color: $backgroundCont;

  .gray-layer {
    background-color: $graylayer;
  }
  .myEntity {
    color: $greenEntity;
    .my-gray {
      color: $graytext;
    }
  }
  .check-text {
    color: $prgcolor;
  }
}
.my-circle {
  color: $greenEntity;
}
.blueicons {
  color: $blueIcons;
}
</style>
