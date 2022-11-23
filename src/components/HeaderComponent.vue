<template>
  <section class="land-header">
    <div class="pt-3  navbar navbar-light fixed-top bg-light">
      <div class="container-fluid my-cont">
        <div>
          <img :src="'/public/img/logo-dark.png'" alt="" />
        </div>
        <div>
          <ul class="list">
            <li
              class="ms-4 me-4 mt-2 text-uppercase"
              v-for="(item, index) in headerList"
              :key="index"
            >
              {{ item.name }} <i class="fa-solid fa-chevron-down"></i>
            </li>
          </ul>
        </div>
        <div>
          <ul class="logos">
            <li class="me-3">
              <i class="fa-solid fa-magnifying-glass d-inline"></i>
            </li>
            <li class="ms-1 me-1 mylibrand">
              <i class="fa-brands fa-github p-2 mybrands"></i>
            </li>
            <li class="ms-1 me-1 mylibrand">
              <i class="fa-brands fa-stack-overflow p-2 mybrands"></i>
            </li>
            <li class="ms-1 me-1 mylibrand">
              <i class="fa-regular fa-user p-2 mybrands"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      headerList: [
        {
          name: "home",
        },
        {
          name: "landing",
        },
        {
          name: "pages",
        },
        {
          name: "docs",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
.land-header {
  background-color: $backgroundHeader;
}
.my-cont {
  width: 1200px;
  margin: 0 auto;
  
}
img {
  width: 10rem;
}

li {
  display: inline-block;
  font-size: 14px;
}
.logos {
  li {
    i {
      font-size: 20px;
    }

    .mybrands {
      background-color: $backgroundIcons;
      color: $blueIcons;
      border-radius: 7px;
    }
    .mybrands:hover {
      transition: 0.5s;
      background-color: #2f55d4;
      color: white;
    }
  }
}
</style>
