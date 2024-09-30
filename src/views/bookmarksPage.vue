<template>
    <div class="h-screen bg-[rgba(240,242,245,1.0)] ">
        <div class="flex items-center justify-between fixed">
            <img @click="$router.push('/')" src="/assets/images/headline-bookmark.png" alt="afs">
        </div>
        <div class="flex items-center justify-between">
            <img @click="$router.push('/')" src="/assets/images/headline-bookmark.png" alt="afs">
        </div>
       <div>
        <div  @click="$router.push('/me')"  class="flex items-center justify-between space-x-4 rounded-lg p-4 mx-[15px] bg-white">
            <div class="flex items-center">
                <!-- Profile Image -->

                <img class="h-11 w-11 rounded-full mr-2" style="margin-top:2px" src="/assets/images/avatar.jpg"
                    alt="Profile" />
                <!-- Profile Info -->
                <div>
                    <h3 class="text-[1.17em] font-normal">Ngọc Đỗ Minh</h3>
                    <div class="text-[16px] text-[#65676b]">Xem trang cá nhân của bạn</div>
                </div>
            </div>

            <!-- Dropdown Icon -->
            <button class="flex h-10 w-10 items-center justify-center rounded-full border bg-[#E4E6EB]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    class="text-gray-[#050505] h-7 w-7">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
        </div>
       </div>
        <div>
            <img src="/assets/images/content-bookmark.png" alt="">
        </div>
    </div>
</template>