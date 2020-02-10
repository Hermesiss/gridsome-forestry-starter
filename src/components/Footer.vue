<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            <p><a href="https://github.com/Hermesiss/portfolio" target="newtab">Source <font-awesome :icon="['fab', 'github']"/></a></p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
