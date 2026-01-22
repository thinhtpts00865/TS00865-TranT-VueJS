<template>
    <Main>
        <template #content>
            <section class="container full-page d-block py-4">
                <div class="row">
                    <div class="col-sm-2"></div>

                    <div class="col-sm-8">
                        <h1 class="fs-1 my-5">Đăng bài viết</h1>
                        <form>
                            <div class="mb-3">
                                <input type="text" class="form-control border-0 shadow-none p-2 ps-0 fs-2" id="title"
                                    placeholder="Tiêu đề...">
                            </div>
                            <div class="mb-3">
                                <textarea rows="2" name="" id="sapo"
                                    class="form-control border-0 shadow-none p-2 ps-0 fs-5"
                                    placeholder="Tiêu đề phụ..."></textarea>
                            </div>
                            <div class="mb-3">
                                <textarea rows="4" name="" id="content"
                                    class="form-control border-0 shadow-none p-2 ps-0"
                                    placeholder="Nội dung..."></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#submitStatus">
                                Đăng bài
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <div class="modal fade" id="submitStatus" tabindex="-1" aria-labelledby="submitStatusLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="submitStatusLabel">Status</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Success / Failure
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Main>
</template>

<script setup>
import Main from '../components/MainLayout.vue';
</script>