<template>
  <q-layout>
    <q-page-container class="main-container row justify-center items-center">
      <div class="column items-center">
        <div class="col">
          <img src="../../../assets/rmlogo.png" class="logo" />
        </div>
        <div class="col">
          <q-btn
            @click="explore()"
            color="primary"
            padding="md lg"
            no-caps
            size="xl"
            label="Explorar"
            push
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const explore = async () => {
  router.push({ name: 'home-page' });
};
</script>

<style lang="scss">
.logo {
  width: 350px;
}
.main-container {
  background-image: url('../../../assets/patron.jpeg');
  background-size: cover;
  height: 100vh;
}
</style>
