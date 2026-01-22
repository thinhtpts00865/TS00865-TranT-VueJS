<template>
    <header>
        <nav class="navbar navbar-expand-sm navbar-light bg-body border-bottom py-3"
            style="height: var(--navbar-height);">
            <div class="container">
                <router-link to="/" class="navbar-brand">
                    <img src="../assets/imgs/FPT_logo_2010.svg.png" alt="" style="width: 80px;">
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse reset-icon" id="collapsibleNavbar">
                    <ul class="navbar-nav ms-4 me-auto gap-2">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="javascript:void(0)" role="button"
                                data-bs-toggle="dropdown">
                                <i class="fa-solid fa-list"></i> <span class="me-1">Bài viết</span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" to="/blog/post/latest">
                                        Bài viết mới nhất
                                    </router-link>
                                </li>
                                <li><router-link class="dropdown-item" to="/blog/post">Đăng bài viết</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-circle-info"></i> Giới thiệu</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-film"></i> Video</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><i class="fa-solid fa-calendar-days"></i> Sự kiện</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i class="fa-solid fa-language"></i> <span class="me-1">Ngôn ngữ</span></a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Tiếng Việt</a></li>
                                <li><a class="dropdown-item" href="#">Tiếng Anh</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                <i class="fa-solid fa-user"></i> <span class="me-1">Tài khoản</span></a>
                            <ul class="dropdown-menu">
                                <li>
                                    <router-link class="dropdown-item" to="/signup">Đăng ký</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/login">Đăng nhập</router-link>
                                </li>
                                <li>
                                    <router-link class="dropdown-item" to="/profile">Thông tin cá nhân</router-link>
                                </li>
                                <li><a class="dropdown-item" href="#">Quên mật khẩu</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>
        <slot name="content"></slot>
    </main>

    <footer style="height: var(--footer-height);" class="text-center text-light bg-black p-4">
        ©Copyright by FPT Polytechnic - TranT
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>