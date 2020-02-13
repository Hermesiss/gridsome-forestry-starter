<template>
  <Layout>
    
    <div class="container">      
      <h1 class="stats-title">Coping with impostor syndrome</h1>
      <div class="stats">
      <Doughnut class="stat" />
      <CodersRank class="stat" username="hermesiss" />
      </div>
    </div>
  </Layout>
</template>

<script>
import Doughnut from "@/components/Doughnut.vue";
// <CodersRank username="hermesiss" />
import CodersRank from "@/components/CodersRank.vue";

//   components: {
//     CodersRank
//   }
export default {
  components: {
    Doughnut,
    CodersRank
  }
};
</script>

<style scoped>
.stats-header {
  padding: 2rem 0 4rem 0;
}
.stats-title {
  font-size: 4rem;
  margin: 0 0 4rem 0;
  padding: 0;
}
.stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-content: center;
}
.stat {
  grid-column: auto / span 2;
  text-align: center;
}

@media (min-width: 920px) {
  .stat {
    grid-column: auto / span 1;
  }
  /* .project:nth-child(3n+1) {
    grid-column: auto / span 2;
  } */
}
textarea:focus {
  border-color: var(--color-contrast-1);
}
input,
textarea {
  background: transparent;
  border: 1px solid var(--color-base-1);
  outline: none;
  border-radius: 0.3rem;
  padding: 0.8rem 1rem;
  color: inherit;
  font-size: 1rem;
  width: 100%;
}
textarea {
  resize: none;
  height: 140px;
}
.button {
  color: var(--color-base);
  background: var(--color-contrast);
  outline: none;
  border: 0;
  font-size: 0.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.3rem;
  margin-top: 2rem;
  cursor: pointer;
  transition: opacity 0.25s ease;
  font-size: 500;
  letter-spacing: 0.035em;
}
.button:hover {
  opacity: 0.6;
}
.button:focus {
  border: 1px solid var(--color-base-1);
}
</style>

