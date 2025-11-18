<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <my-component first="Your" last="Name"></my-component>

  <template-card first="walker" last="Texas Ranger" job="Ranger/semi-god"
    description-text="I usually smoke cigars and smash dickheads....but i'm all out of cigars" age="49"
    accomplishments="99" add-complementary-actions="true"></template-card>

  <status-badge message="You are logged in!" status="success"></status-badge>
  <status-badge message="You received Mail!" status="info"></status-badge>

  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
