<template>
    <Main>
        <template #content>
            <div class="container full-page align-items-start justify-content-center mt-5">
                <div class="row g-5" style="max-width: 960px;">
                    <div class="col-sm-4 border-right">
                        <h2 class="fs-5 mb-4">Categories & Filters</h2>
                        <ul class="list-group">
                            <li class="list-group-item">Demo List Item</li>
                            <li class="list-group-item">Demo List Item</li>
                            <li class="list-group-item">Demo List Item</li>
                            <li class="list-group-item">Demo List Item</li>
                            <li class="list-group-item">Demo List Item</li>
                        </ul>
                    </div>

                    <div class="col-sm-8">
                        <router-link to="/blog/post/latest" style="text-decoration: none;">
                            <div class="card mb-3">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <img src="../assets/imgs/news/demo.webp" class=" rounded-start" alt="...">
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">Nhà giáo VN</h5>
                                            <p class="card-text">This is a wider card with supporting text below as a
                                                page.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
        </template>
    </Main>
</template>

<script setup>
import Main from '../components/MainLayout.vue';
</script>