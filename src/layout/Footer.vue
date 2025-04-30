<template>
  <footer class="bg-[#f0f0f0]">
    <div>
      <Logo class="pt-8" />
      <p class="text-gray-400 pt-4">
        We have clothes that suits your style and which you’re proud to wear.
        From women to men.
      </p>
      <!-- Social -->
      <div class="flex gap-3 pt-4">
        <div class="relative group p-3 cursor-pointer">
          <div
            class="absolute inset-0 rounded-full border-y-2 border-gray-500 transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-75"
          ></div>
          <TwitterIcon
            class="relative z-10 duration-700 group-hover:text-blue-700 size-5"
          />
        </div>
        <div class="relative group p-3 cursor-pointer">
          <div
            class="absolute inset-0 rounded-full border-y-2 border-gray-500 transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-75"
          ></div>
          <FacebookIcon
            class="relative z-10 duration-700 group-hover:text-blue-700 size-5"
          />
        </div>
        <div class="relative group p-3 cursor-pointer">
          <div
            class="absolute inset-0 rounded-full border-y-2 border-gray-500 transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-75"
          ></div>
          <InstagramIcon
            class="relative z-10 duration-700 group-hover:text-blue-700 size-5"
          />
        </div>
        <div class="relative group p-3 cursor-pointer">
          <div
            class="absolute inset-0 rounded-full border-y-2 border-gray-500 transition-transform duration-1000 group-hover:rotate-180 group-hover:scale-75"
          ></div>
          <GithubIcon
            class="relative z-10 duration-700 group-hover:text-blue-700 size-5"
          />
        </div>
      </div>
      <!-- Links -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(section, sectionKey) in footerLinks" :key="sectionKey">
          <div>
            <p class="uppercase p-4">{{ section.title }}</p>
            <div class="grid grid-cols-1 gap-3">
              <a
                :href="link.href"
                v-for="(link, linkIndex) in section.links"
                :key="linkIndex"
                >{{ link.text }}</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- separator -->
    <div></div>
    <!--  -->
    <div class="flex justify-center text-gray-400 p-4">
      <div>
        <p>Shop.co c 2000-2003, All Rights Reserved</p>
        <div class="flex gap-3 p-4">
          <p>Visa</p>
          <p>MasterCard</p>
          <p>PayPal</p>
          <p>Apple Pay</p>
          <p>Google Pay</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-vue-next";
const footerLinks = [
  {
    title: "COMPANY",
    links: [
      { text: "About", href: "#" },
      { text: "Features", href: "#" },
      { text: "Works", href: "#" },
      { text: "Career", href: "#" },
    ],
  },
  {
    title: "HELP",
    links: [
      { text: "Customer Support", href: "#" },
      { text: "Delivery Details", href: "#" },
      { text: "Terms & Conditions", href: "#" },
      { text: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "FAQ",
    links: [
      { text: "Account", href: "#" },
      { text: "Manage Deliveries", href: "#" },
      { text: "Orders", href: "#" },
      { text: "Payment", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { text: "Free eBook", href: "#" },
      { text: "Development Tutorial", href: "#" },
      { text: "How to - Blog", href: "#" },
      { text: "YouTube Playlist", href: "#" },
    ],
  },
];
</script>
