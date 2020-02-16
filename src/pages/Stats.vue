<template>
  <Layout>
    <div class="container">
      <h1 class="stats-title">Coping with impostor syndrome</h1>
      <div class="stats">
        <div class="stat">
          <CodeStats class="stat-inner" username="Hermesis"/>
        </div>
        <div class="stat">
          <CodersRank class="stat-inner" username="hermesiss" />
        </div>
        <div class="stat">
          <embed
            class="stat-inner"
            src="https://wakatime.com/share/@Hermesis/1b4b4fd7-2b2d-41d8-bba4-26cc8132f213.svg"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Doughnut from "@/components/Doughnut.vue";
import CodersRank from "@/components/CodersRank.vue";
import CodeStats from "@/components/CodeStats.vue";

export default {
  components: {
    Doughnut,
    CodersRank,
    CodeStats
  }
};
</script>

<style scoped>
.legend > text {
  font-size: 2rem;
}
.stats-header {
  padding: 2rem 0 4rem 0;
}
.stats-title {
  font-size: 2rem;
  margin: 2rem 0 2rem 0;
  padding: 0;
  text-align: center;
}
.stats {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-items: center;
}
.stat > * {
  margin: 6px;
}

.stat {
  grid-column: auto / span 2;
  text-align: center;
  border: 1px solid #ffffff08;
  background-color: #ffffff01;
  margin: 1rem;
  border-radius: 5px;
}

@media (min-width: 920px) {
  .stat {
    grid-column: auto / span 1;
  }
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

