<template>
     <main class="auth-wrapper">

        <form class="auth-form">

                <h1>
                <span>ToDo</span>
                <strong>List</strong>
                </h1>

            <h2 class="h3 mb-4 fw-normal">Please sign up</h2>

                <div class="form-floating mb-2">
                <input type="text" class="form-control" id="name" placeholder="Enter Your name" />
                <label for="name">Name</label>
                </div>

                <div class="form-floating mb-2">
                <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                <label for="email">Email</label>
                </div>

                <div class="form-floating mb-2">
                <input type="password" class="form-control" id="password" placeholder="Password" />
                <label for="password">Password</label>
                </div>

                <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password_confirmation"
                placeholder="Password Confirmation" />
                <label for="password_confirmation">Password Confirmation</label>
                </div>

                <button class="w-100 btn btn-lg btn-primary" type="submit">Sign up</button>
        </form>

    </main>
</template>