<template>
  <div class="product-box">
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div
            id="shop"
            class="shop grid-container clearfix"
            data-layout="fitRows"
          >
            <div class="product clearfix">
              <div class="product-image">
                <a href="#">
                  <img
                    style="width: 290px; height: 370px"
                    :src="hotel.img1"
                    alt=""
                  />
                </a>
                <a href="#">
                  <img
                    style="width: 290px; height: 370px"
                    :src="hotel.img2"
                    alt=""
                  />
                </a>
                <div class="product-overlay">
                  <router-link to="" class="add-to-cart">
                    <i class="icon-shopping-cart"></i><span></span>
                  </router-link>
                  <router-link
                    :to="{
                      name: 'HotelDetails',
                      params: { id: hotel.id, loc: hotel.location },
                    }"
                    class="item-quick-view"
                    data-lightbox="ajax"
                    ><i class="icon-zoom-in"></i><span></span
                  ></router-link>
                </div>
              </div>
              <div id="text">
                <div class="product-title">
                  <h3>
                    <a href="#">{{ hotel.name }}</a>
                  </h3>
                </div>
                <div class="product-price">
                  <ins>৳ {{ hotel.price }}</ins>
                </div>
                <div>
                  <a href="#" class="icon-map-marker2" style="color: #999999">{{
                    " " + hotel.location
                  }}</a>
                </div>
                <div class="product-rating"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["hotel"],
};
</script>

<style scoped>
#text {
  text-align: left;
}
.product-price {
  margin: 0;
}
.container {
  margin: 0;
  padding: 0;
}
.content-wrap {
  padding: 0;
}
.product {
  padding: 0 0 6% 0;
}
.add-to-cart i,
.item-quick-view i {
  font-size: 3rem;
  color: #5a5a5a;
}
.add-to-cart:hover,
.item-quick-view:hover {
  background-color: #ddd;
  color: #bdbdbd;
}
</style>
