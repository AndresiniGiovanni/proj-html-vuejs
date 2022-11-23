<template>
  <section class="section-footer">
    <div class="container section-w my-footer">
      <div class="d-flex justify-content-between pt-5">
        <div class="graytext w-25">
          <div class="">
            <img
              class="logo-light"
              :src="'/public/img/logo-light.png'"
              alt=""
            />
          </div>
          <p class="mt-4">
            Start working with Landrick that can provide <br />
            everything you need to generate awareness ,<br />
            drive traffic, connect.
          </p>
          <span><i class="fa-brands fa-facebook-f myfacebook"></i></span>
          <span><i class="fa-brands fa-instagram myinsta"></i></span>
          <span><i class="fa-brands fa-twitter mytweet"></i></span>
          <span><i class="fa-brands fa-linkedin-in mylink"></i></span>
        </div>
        <div class="text-white">
          <h5>Company</h5>
          <ul class="graytext list-unstyled my-ul mt-4">
            <li
              class="my-li"
              v-for="(list, index) in store.company"
              :key="index"
            >
              <i class="fa-solid fa-angle-right my-angle"></i>
              <a class="my-li graytext text-decoration-none" href="">
                {{ list.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="text-white">
          <h5>Usefull Links</h5>
          <ul class="graytext list-unstyled my-ul mt-4">
            <li v-for="(list, index) in store.usefull" :key="index">
              <i class="fa-solid fa-angle-right my-angle"></i>
              <a class="my-li graytext text-decoration-none" href="">
                {{ list.text }}
              </a>
            </li>
          </ul>
        </div>
        <div class="text-white">
          <h5>Newsletter</h5>
          <p class="mt-4 graytext">
            Sign up and receive the latest tips <br />
            via email.
          </p>
          <p class="graytext">
            Write your email <span style="color: red">&#42;</span>
          </p>
          <div class="my-form-input position-relative">
            <i
              class="fa-regular fa-envelope position-absolute mt-2 ms-3 graytext"
            ></i>
            <input
              class="form-control border-0 bg-transparent"
              placeholder="	&nbsp;Your email:"
              type="email"
              name="email"
              id=""
            />
          </div>
          <button class="btn my-btn">Subscribe</button>
        </div>
      </div>
    </div>
    <hr class="graytext mb-4" />
    <div class="d-flex justify-content-between section-w">
      <div class="graytext mb-4">
        <span>&#169;2020 Landrick. Design with &hearts; by Shreethemes </span>
      </div>
      <div class="">
        <img class="my-images" :src="'/public/img/american-ex.png'" alt="" />
        <img class="my-images" :src="'/public/img/discover.png'" alt="" />
        <img class="my-images" :src="'/public/img/master-card.png'" alt="" />
        <img class="my-images" :src="'/public/img/paypal.png'" alt="" />
        <img class="my-images" :src="'/public/img/visa.png'" alt="" />
      </div>
    </div>
  </section>
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

.section-footer {
  background-color: $footerbackground;
  margin-top: 5rem;
}
.my-footer {
  height: 400px;
}
.logo-light {
  width: 35%;
}
.myfacebook,
.myinsta,
.mytweet,
.mylink {
  border: 1px solid $border;
  border-radius: 6px;
}
.myfacebook {
  padding: 0.6rem 0.8rem;
  margin-right: 0.2rem;
}
.myinsta,
.mytweet,
.mylink {
  padding: 0.6rem 0.6rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.myinsta,
.mylink {
  padding: 0.6rem 0.7rem;
}
.my-ul {
  line-height: 2rem;
  .my-angle {
    font-size: 12px;
    padding-right: 4px;
  }
}
.my-li:hover {
  transition: 0.3s;
  color: white;
}
.my-form-input,
.my-btn {
  background-color: #27314f;
  border-radius: 8px;
}
.my-btn {
  width: 100%;
  padding: 0.4rem;
  margin-top: 2rem;
  color: $redIcons;
  box-shadow: 1px 3px 5px rgb(47 85 212 / 10%);
}
.my-images {
  width: 40px;
  margin: 3px;
  margin-top: -10px;
}
</style>
