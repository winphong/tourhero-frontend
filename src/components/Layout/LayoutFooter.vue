<script setup lang="ts">
import FacebookIcon from '../icons/FacebookIcon.vue'
import InstagramIcon from '../icons/InstagramIcon.vue'
import LinkedInIcon from '../icons/LinkedInIcon.vue'
import YoutubeIcon from '../icons/YoutubeIcon.vue'

const aboutUsItems = [
  { title: 'About Us', link: '#' },
  { title: 'TourHero blog', link: '#' },
  { title: 'Life at TourHeo', link: '#' },
  { title: 'Careers', link: '#' },
]

const termsItems = [{ title: 'Terms', link: '#' }]
const socialMediaItems = [
  { title: 'Instagram', link: '#', Icon: InstagramIcon },
  { title: 'Facebook', link: '#', Icon: FacebookIcon },
  { title: 'LinkedIn', link: '#', Icon: LinkedInIcon },
  { title: 'Youtube', link: '#', Icon: YoutubeIcon },
]
</script>

<template>
  <footer>
    <section class="border-t-2 mt-8 border-gray-100 px-6 sm:px-20 py-6 sm:py-8">
      <div class="grid grid-cols-10">
        <div class="grid col-span-3 gap-2">
          <p class="text-md font-semibold text-gray mb-4">ABOUT</p>
          <div v-for="item in aboutUsItems" :key="item.title">
            <a :href="item.link" class="text-md">{{ item.title }}</a>
          </div>
        </div>
        <div class="grid col-span-3">
          <div>
            <p class="text-md font-semibold text-gray mb-4">TERMS</p>
            <div v-for="item in termsItems" :key="item.title">
              <a :href="item.link" class="text-md">{{ item.title }}</a>
            </div>
          </div>
        </div>
        <div class="grid col-span-4">
          <div>
            <p class="text-sm font-semibold text-gray mb-4">FOLLOW US</p>
            <div class="flex flex-row gap-2">
              <div v-for="item in socialMediaItems" :key="item.title">
                <a :href="item.link" class="text-md">
                  <component :is="item.Icon" class="w-6 h-6 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="border-t-2 mt-6 mb-4 border-gray-200" />
      <p class="text-gray">© 2021 TourHero Pte. Ltd. All rights reserved</p>
    </section>
  </footer>
</template>
