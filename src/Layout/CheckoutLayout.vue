<template>
  <Navbar />
  <CheckoutForm />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar"
import CheckoutForm from "../components/CheckoutForm"
import Footer from "../components/Footer1"
export default {
    components: {
        CheckoutForm,
        Navbar,
        Footer
    }
}
</script>

<style>

</style>