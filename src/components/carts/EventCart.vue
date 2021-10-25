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
                <a href="#"
                  ><img
                    style="width: 290px; height: 370px"
                    :src="event.img1"
                    alt="Checked Short Dress"
                /></a>
                <a href="#"
                  ><img
                    style="width: 290px; height: 370px"
                    :src="event.img2"
                    alt="Checked Short Dress"
                /></a>
                <div class="product-overlay">
                  <router-link to="#" class="add-to-cart">
                    <i class="icon-shopping-cart"></i><span></span>
                  </router-link>
                  <a
                    href="include/ajax/shop-item.html"
                    class="item-quick-view"
                    data-lightbox="ajax"
                    ><i class="icon-zoom-in"></i><span></span
                  ></a>
                </div>
              </div>
              <div class="pt-3" id="text">
                <div class="product-title">
                  <h4>
                    <a href="#">{{ event.name }}</a>
                  </h4>
                </div>
                <div class="product-price">
                  <ins>৳ {{ event.price }}</ins>
                </div>
                <div class="product-rating"></div>
              </div>
            </div>
          </div>
          <!-- #shop end -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["event"],
  methods: {
    book() {
      localStorage.setItem("name", this.$props.event.name);
      localStorage.setItem("price", this.$props.event.price);
      localStorage.setItem("img", this.$props.event.img1);
    },
  },
};
</script>

<style scoped>
#text {
  text-align: left;
}
.product-price {
  margin: 0;
}
.product-title h4 {
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
