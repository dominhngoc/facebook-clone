<template>
  <div v-if="showProgess" class="progress-container">
    <div class="progress-bar" :style="progressBarStyle"></div>
  </div>
  <div class="h-screen bg-[rgba(240,242,245,1.0)] relative">
    <img @click="passLogin" src="/assets/images/Login.jpg" alt="">
    <div class="absolute top-[203px] z-10 w-full px-6 rounded-3xl  ">
      <form>
        <!-- Floating placeholder for Phone or Email -->
        <div class="floating-placeholder-group">
          <input type="text" id="phone-email" placeholder=" "
            class="floating-placeholder-input focus:border-[#465A69] focus:ring-blue-500" />
          <label for="phone-email" class="floating-placeholder-label">Số di động hoặc email</label>
        </div>

        <!-- Floating placeholder for Password -->
        <div class="floating-placeholder-group">
          <input type="password" id="password" placeholder=" "
            class="floating-placeholder-input focus:border-[#465A69] focus:ring-blue-500" />
          <label for="password" class="floating-placeholder-label">Mật khẩu</label>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const showProgess = ref(false)
const progress = ref(0); // Progress percentage
const duration = 2000; // 5 seconds duration hardcoded

// Computed property to change the background color based on progress
const progressBarStyle = computed(() => {
  return {
    width: progress.value + '%',
    backgroundColor: 'white'
  };
});
//
const passLogin = () => {
  showProgess.value = true;
  startProgress();
  setTimeout(() => {
    router.push('/')
  }, (duration));
}
// Function to start the progress animation
const startProgress = () => {
  const intervalTime = 50; // Update every 50 milliseconds
  const totalSteps = duration / intervalTime;

  const interval = setInterval(() => {
    progress.value += 100 / totalSteps;
    if (progress.value >= 100) {
      clearInterval(interval);
      progress.value = 100; // Ensure it stops at 100%
    }
  }, intervalTime);
};

// Start the progress when the component is mounted
onMounted(() => {
 
});
</script>
<style>
.floating-placeholder-group {
  position: relative;
  margin-bottom: 0.7rem;
}

.floating-placeholder-input {
  width: 100%;
  height: 55px;
  padding: 1rem 1rem 0.5rem 1rem;
  /* Extra padding at bottom for label space */
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

.floating-placeholder-input:focus+.floating-placeholder-label,
.floating-placeholder-input:not(:placeholder-shown)+.floating-placeholder-label {
  top: 0.7rem;
  /* Move label above border */
  font-size: 0.75rem;
  padding: 0 0.25rem;
  color: #465A69;
}


.progress-container {
  width: 100%;
  height: 3px;
  background-color: #4b74b7;
  /* Initial background color */
}

/* The bar that fills up */
.progress-bar {
  height: 100%;
  /* Full height of container */
  background-color: white;
  /* Fill color changes to white */
  width: 0%;
  /* Initial width */
  transition: width 0.1s ease-in-out, background-color 0.1s ease-in-out;
}
</style>