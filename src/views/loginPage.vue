<template>
    <div class="h-screen bg-[rgba(240,242,245,1.0)] relative">
        <img @click="$router.push('/')" src="/assets/images/Login.jpg" alt="">
        <div class="absolute top-[258px] z-10 w-full px-6 rounded-3xl  ">
            <form>
        <!-- Floating placeholder for Phone or Email -->
        <div class="floating-placeholder-group">
          <input type="text" id="phone-email" placeholder=" " class="floating-placeholder-input focus:border-[#465A69] focus:ring-blue-500" />
          <label for="phone-email" class="floating-placeholder-label">Số di động hoặc email</label>
        </div>

        <!-- Floating placeholder for Password -->
        <div class="floating-placeholder-group">
          <input type="password" id="password" placeholder=" " class="floating-placeholder-input focus:border-[#465A69] focus:ring-blue-500" />
          <label for="password" class="floating-placeholder-label">Mật khẩu</label>
        </div>
      </form>
        </div>
    </div>
</template>

<style>
  .floating-placeholder-group {
          position: relative;
          margin-bottom: 0.7rem;
      }
      .floating-placeholder-input {
          width: 100%;
          height: 55px;
          padding: 1rem 1rem 0.5rem 1rem; /* Extra padding at bottom for label space */
          border: 1px solid #cbd5e1;
          border-radius: 0.5rem;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
      }
      .floating-placeholder-label {
          position: absolute;
          top: 1rem;
          left: 1rem;
          pointer-events: none;
          transition: 0.2s ease all;
          color: #465A69;
          transform-origin: top left;
      }
      .floating-placeholder-input:focus + .floating-placeholder-label,
      .floating-placeholder-input:not(:placeholder-shown) + .floating-placeholder-label {
          top: 0.7rem; /* Move label above border */
          font-size: 0.75rem;
          padding: 0 0.25rem;
          color: #465A69;
      }
</style>