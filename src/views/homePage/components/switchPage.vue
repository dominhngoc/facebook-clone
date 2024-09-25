<template>
   <div class="px-4">
    <div class="flex items-center justify-between">
        <!-- Left arrow and "Menu" text -->
        <div class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M15.707 5.293a1 1 0 010 1.414L10.414 12l5.293 5.293a1 1 0 01-1.414 1.414l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
            </svg>
            <span class="font-medium text-black">Menu</span>
        </div>

        <!-- Search icon -->
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 4a7 7 0 100 14 7 7 0 000-14zm0 0l6 6" />
            </svg>
        </div>
    </div>
    <div class="flex items-center justify-between space-x-4 rounded-lg p-4 shadow-md bg-white">
        <div class="flex items-center">
            <!-- Profile Image -->

            <img class="h-12 w-12 rounded-full mr-2" src="https://via.placeholder.com/150" alt="Profile" />
            <!-- Profile Info -->
            <div>
                <h3 class="text-[1.17em] font-normal">Ngọc Đỗ Minh</h3>
                <div class="text-[16px] text-[#65676b]">Xem trang cá nhân của bạn</div>
            </div>
        </div>

        <!-- Dropdown Icon -->
        <button class="flex h-8 w-8 items-center justify-center rounded-full border bg-[#E4E6EB]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="text-gray-[#050505] h-5 w-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    </div>
   </div>
</template>