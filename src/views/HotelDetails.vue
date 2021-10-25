<template>
  <div>
    <Navbar />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="postcontent nobottommargin clearfix" style="width: 800px">
            <div v-for="hotel in hotels" :key="hotel.id">
              <div v-if="this.id == hotel.id">
                <div id="posts" style="text-align: left">
                  <div class="entry clearfix">
                    <img :src="hotel.img1" alt="" />
                    <div class="entry-title">
                      <h2>
                        <a href="#">{{ hotel.name }}</a>
                      </h2>
                    </div>
                    <div class="entry-content short-description hotel">
                      <div><h4>Location:</h4></div>
                      <div>{{ hotel.location }}</div>
                    </div>
                  </div>
                  <div class="entry clearfix">
                    <div class="entry-content description">
                      <p>{{ hotel.description }}</p>
                    </div>
                  </div>
                  <div>
                    <vueper-slides :bullets="false" :fixed-height="true" fade>
                      <vueper-slide
                        v-for="slide in hotel.slider_img"
                        :key="slide"
                        :image="slide.img"
                      />
                    </vueper-slides>
                  </div>
                  <div class="entry-content">
                    <h4>Features:</h4>
                    <div v-for="feat in hotel.features" :key="feat">
                      <p>
                        <i class="fas fa-vector-square"></i>{{ feat.feature }}
                      </p>
                    </div>
                  </div>
                  <div class="entry-content price">
                    <h4>Price:</h4>
                  </div>
                  <div class="entry clearfix facebook">
                    <div class="entry-image">
                      <a
                        href="https://www.facebook.com/groups/foringerdol/"
                        class="entry-link"
                        target="_blank"
                      >
                        Join Our Facebook Group
                        <span
                          >https://www.facebook.com/groups/foringerdol/</span
                        >
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Sidebar
				============================================= -->
          <div class="sidebar nobottommargin col_last clearfix">
            <div class="sidebar-widgets-wrap">
              <div class="widget widget-twitter-feed clearfix">
                <h4>Facebook Feed</h4>
                <ul
                  class="iconlist twitter-feed"
                  data-username="envato"
                  data-count="2"
                >
                  <li></li>
                </ul>
                <a
                  href="https://www.facebook.com/travelforing/"
                  target="_blank"
                  class="btn btn-default btn-sm fright"
                  >Follow Us on Facebook</a
                >
              </div>
              <div class="widget clearfix">
                <h4>Tag Cloud</h4>
                <div class="tagcloud">
                  <a href="#">general</a>
                  <a href="#">videos</a>
                  <a href="#">music</a>
                  <a href="#">media</a>
                  <a href="#">photography</a>
                  <a href="#">parallax</a>
                  <a href="#">ecommerce</a>
                  <a href="#">terms</a>
                  <a href="#">coupons</a>
                  <a href="#">modern</a>
                </div>
              </div>
            </div>
          </div>
          <!-- .sidebar end -->
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer1.vue";
export default {
  props: ["id"],
  computed: {
    ...mapState("productbox", ["hotels"]),
  },
  components: {
    Navbar,
    Footer,
    VueperSlides,
    VueperSlide,
  },
};
</script>

<style scoped>
.vueperslides--fixed-height {
  height: 65vh;
  width: 800px;
}
.container {
  display: flex;
}
.entry-title {
  margin-top: 5%;
}
.entry-title h4 {
  text-align: center;
}
.entry {
  margin: 0;
  padding: 0;
}
.entry-content p {
  margin: 0;
  padding: 0.9% 0;
}
.entry-content h4 {
  margin: 0;
}
.hotel {
  display: flex;
  align-items: flex-end;
}
.hotel div {
  padding: 0% 1% 0% 0%;
}
.description p {
  padding-bottom: 5%;
}
.price {
  padding-bottom: 5%;
}
.entry-content i {
  font-size: 0.9rem;
  padding-right: 1%;
}
</style>
