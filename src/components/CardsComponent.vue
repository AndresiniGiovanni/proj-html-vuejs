<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="col-4 card me-3 ms-4 my-cards"
        v-for="(text, index) in store.priceCard"
        :key="index"
      >
        <div class="blueicons plan my-circle mt-3 text-capitalize">
          {{ text.type }}
        </div>
        <div class="position-absolute best">{{ text.sticker }}</div>
        <h3 class="mt-3 bold">&#36; {{ text.price }}</h3>
        <p class="graytext text-capitalize">{{ text.month }}</p>
        <p class="graytext text-capitalize">{{ text.prg }}</p>
        <ul class="list-unstyled text-capitalize mylist graytext mt-3">
          <li>
            <i class="fa-regular fa-circle-check blueicons me-1"></i>
            {{ text.full }}
          </li>
          <li>
            <i class="fa-regular fa-circle-check blueicons me-1"></i>
            {{ text.security }}
          </li>
          <li>
            <i class="fa-regular fa-circle-check blueicons me-1"></i>
            {{ text.files }}
          </li>
          <li>
            <i class="fa-regular fa-circle-check blueicons me-1"></i>
            {{ text.domain }}
          </li>
          <li>
            <i class="fa-regular fa-circle-check blueicons me-1"></i>
            {{ text.security }}
          </li>
        </ul>
        <button class="btn my-btn btn-danger mt-2 text-capitalize">
          {{ text.button }}
        </button>
        <p class="text-capitalize mt-3 graytext">{{ text.credit }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;
@use "../assets/styles/main.scss" as *;

.plan {
  padding: 0.5rem;
  width: 5.5rem;
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  border-radius: 20px;
  border: 1px solid $border;
}

.my-cards {
  width: 30%;
  margin-bottom: 3rem;
}
.best {
  top: +10px;
  right: -10px;
  width: 75px;
  background-color: #f17425;
  color: white;
  text-transform: capitalize;
  text-align: center;
  transform: rotate(40deg);
  font-size: 14px;
}
.my-cards:hover {
  transition: 1s;
  transform: scale(1.1);
}

.mylist {
  line-height: 1.8rem;
}
</style>
