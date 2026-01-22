<template>
    <Main>
        <template #content>
            <section class="demo full-page text-center">
                <div class="container">
                    <p class="demo__desc">This section is still under development!</p>
                </div>
            </section>
        </template>
    </Main>
</template>

<script setup>
import Main from '../components/MainLayout.vue';
</script>

<style>
@keyframes rainbowMove {
    0% {
        background-position: 0% 50%;
    }

    100% {
        background-position: 100% 50%;
    }
}

.demo__desc {
    font-size: 3.2rem;
    font-style: italic;
    background: linear-gradient(to right,
            darkorange,
            goldenrod,
            darkgreen,
            teal,
            navy,
            indigo,
            darkorange,
            goldenrod);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    background-size: 600% 100%;
    animation: rainbowMove 3s linear infinite;
}
</style>