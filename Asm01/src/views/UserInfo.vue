<template>
    <Main>
        <template #content>
            <section class="container full-page align-items-start pt-5">
                <div class="row gx-5 gy-3">
                    <div class="col-sm-12">
                        <div class="row gx-5 mb-3">
                            <div class="col-sm-4">
                                <h1 class="fs-3">Danh mục</h1>
                            </div>
                            <div class="col-sm-8">
                                <h1 class="fs-3">Thông tin cá nhân</h1>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-4">
                        <div class="list-group list-group-flush">
                            <a href="#" style="font-size: 16px;"
                                class="list-group-item list-group-item-action py-3 active" aria-current="true">
                                Thông tin cá nhân
                            </a>
                            <a href="#" style="font-size: 16px;" class="list-group-item list-group-item-action py-3">Bài
                                viết
                                của tôi</a>
                            <a href="#" style="font-size: 16px;"
                                class="list-group-item list-group-item-action py-3">Lịch sử
                                xem</a>
                            <a href="#" style="font-size: 16px;"
                                class="list-group-item list-group-item-action py-3 text-danger" data-bs-toggle="modal"
                                data-bs-target="#deleteAccount">Xóa tài khoản</a>
                        </div>
                    </div>

                    <div class="col-sm-8">
                        <form class="row g-3 row-cols-1">
                            <div class="col-sm-6">
                                <label for="firstName" class="form-label">First Name</label>
                                <input type="text" class="form-control" id="firstName">
                            </div>
                            <div class="col-sm-6">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input type="text" class="form-control" id="lastName">
                            </div>
                            <div class="col">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1"
                                    aria-describedby="emailHelp">
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.
                                </div>
                            </div>
                            <div class="">
                                <button type="submit" class="btn btn-primary mt-2">Lưu thay đổi</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <div class="modal fade" id="deleteAccount" tabindex="-1" aria-labelledby="deleteAccountLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="deleteAccountLabel">Delete Account</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Are you sure?
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary bg-danger">Delete</button>
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