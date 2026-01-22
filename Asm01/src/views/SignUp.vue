<template>
    <Main>
        <template #content>
            <section class="container full-page" style="max-width: 500px;">
                <div class="wrapper border rounded shadow-sm p-4" style="width: 100%;">
                    <h1 class="fs-2 text-center mb-5">Sign Up</h1>
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
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="col">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <div class="col">
                            <label for="exampleInputConfirmPassword1" class="form-label">Confirm Password</label>
                            <input type="password" class="form-control" id="exampleInputConfirmPassword1">
                        </div>
                        <div class="col">
                            <button type="submit" class="btn btn-primary mt-2">Sign Up</button>
                        </div>
                    </form>
                </div>
            </section>
        </template>
    </Main>
</template>

<script setup>
import Main from '../components/MainLayout.vue';
</script>