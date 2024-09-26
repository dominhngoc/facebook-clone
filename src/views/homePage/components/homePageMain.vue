<template>
    <div class="flex items-center justify-between bg-white px-3 py-4 rounded-md  w-full">
        <!-- User avatar and text -->
        <div class="flex items-center space-x-2">
            <!-- Profile image -->
            <div class="relative">
                <img class="w-12 h-12 rounded-full ml-1" src="/assets/images/avatar.jpg" alt="User Avatar">
                <!-- Green online indicator -->
                <span
                    class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></span>
            </div>
            <!-- Message content -->
            <div class="status-comment bg-[#F0F2F5] text-black rounded-full">
                <span style="color:#050505;  font-size:16px;   margin-left: 18px;
">Đăng cập nhật trạng thái</span>
            </div>
        </div>

        <!-- Image icon with text -->
        <div class="flex flex-col items-center mr-4 space-y-2">
           <img src="/assets/images/Icon anh.svg" alt="">
            <span class="">Ảnh</span>
        </div>
    </div>
    <section>
        <img src="/assets/images/newfeed.png" alt="">
    </section>
</template>

<style>
.status-comment {
    width: 243px;
    height: 36px;
    display: flex;
    align-items: center;
    font-weight: normal;
}
</style>