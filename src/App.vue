<template>
  <nav
    id="navigator"
    class="navbar"
    :class="{ navbaropen: opened }"
    style="
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    "
  >
    <span class="open-slide">
      <a href="#" @click="opened = !opened">
        <div>
          <i class="icons-sidebar bi bi-list" :class="{ topopen: opened }"></i>
        </div>
      </a>
    </span>
    <div
      style="
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        width: 60%;
        margin-left: -155px;
      "
    >
      <h3 style="padding: 0 0 0 15px; width: 30%; margin-left: -70px">
        Project individual
      </h3>
      <div class="p-inputgroup" style="width: 70%">
        <InputText
          placeholder="Search for Friends , Videos and more.."
          style="border-radius: 20px"
        />
      </div>
    </div>
    <ul class="navbar-nav" style="display: flex; align-items: center">
      <li><i class="icons-nav bi bi-cart4" style="color: #c7c218e8"></i></li>
      <li>
        <i
          class="icons-nav bi bi-chat-left-dots-fill"
          style="color: crimson"
        ></i>
      </li>
      <li>
        <i class="icons-nav bi bi-bell-fill" style="color: #1e5bcb"></i>
      </li>
    </ul>

    <img
      src="./assets//images/323952197_567233611560466_7304591525322997827_n.jpg"
      alt="avatar"
      style="
        width: 43px;
        height: 43px;
        border-radius: 20px;
        margin-left: -160px;
        margin-right: 30px;
      "
    />
    <!-- <Avatar
      icon="pi pi-user"
      class="mr-2"
      size="large"
      style="background-color: #2196f3; color: #ffffff"
      shape="circle"
    /> -->
  </nav>
  <div id="allTheNav" style="display: flex; width: 100%">
    <div id="side-menu" class="side-nav" :class="{ sidenavopen: opened }">
      <div
        class="list-a"
        style="
          display: flex;
          justify-content: left;
          align-items: center;
          padding-right: 20px;
        "
      >
        <router-link :to="{ name: 'home' }" style="display: flex"
          ><i
            class="icons-sidebar bi bi-house-fill"
            style="color: rgb(48, 48, 200); padding-right: 17px"
          ></i
          >Home</router-link
        >
      </div>
      <div
        class="list-a"
        style="
          display: flex;
          justify-content: left;
          align-items: center;
          padding-right: 20px;
        "
      >
        <router-link :to="{ name: 'page' }" style="display: flex"
          ><span
            ><i
              class="icons-sidebar bi bi-flag-fill"
              style="color: rgb(229, 196, 8); padding-right: 17px"
            ></i></span
          ><span>Pages</span></router-link
        >
      </div>
      <div
        class="list-a"
        style="
          display: flex;
          justify-content: left;
          align-items: center;
          padding-right: 20px;
        "
      >
        <router-link :to="{ name: 'page' }" style="display: flex"
          ><i
            class="icons-sidebar bi bi-people-fill"
            style="color: rgb(12, 94, 218); padding-right: 17px"
          ></i
          >Groups</router-link
        >
      </div>
      <div
        class="list-a"
        style="
          display: flex;
          justify-content: left;
          align-items: center;
          padding-right: 20px;
        "
      >
        <router-link :to="{ name: 'page' }" style="display: flex"
          ><i
            class="icons-sidebar bi bi-reddit"
            style="color: rgb(205, 11, 11); padding-right: 17px"
          ></i>
          Game</router-link
        >
      </div>
      <!-- <router-link :to="{ name: 'Employees' }">aaa</router-link> -->
    </div>
    <div id="main" :class="{ mainopen: opened }">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/sidebar/sidebarPage.vue";
import Header from "@/components/header/headerPage.vue";
import homePage from "./views/home/homePage.vue";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import AvatarGroup from "primevue/avatargroup"; //Optional for grouping
import { createApp } from "vue";
import { ref } from "vue";

const opened = ref(false);
// const toggleSidebar = () => {
//   sidebarIsVisible.value = !sidebarIsVisible.value;
//   console.log(sidebarIsVisible.value);
// };
const app = createApp({});
app.component("sidebarPage", Sidebar);
app.component("headerPage", Header);
</script>

<style scoped lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  font-family: "Arial", Serif;
  background-color: #f5f5f5;
  overflow-x: hidden;
}

.list-a:hover {
  background-color: antiquewhite;
  color: #000;
}

.icons-nav {
  font-size: 23px;
  padding: 0 7px;
}

.icons-sidebar {
  font-size: 23px;
  font-weight: 600;
}
.bi-list {
  font-size: 33px;
  font-weight: 500;
}
.navbar {
  background-color: white;
  overflow: hidden;
  height: 63px;
  z-index: 10;
}

.navbaropen {
  background-color: white;
  overflow: hidden;
  height: 63px;
  position: relative;
  z-index: 10;
  top: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.navbar a {
  float: left;
  display: block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar ul {
  margin: 8px 0 0 0;
  list-style: none;
}

.navbar a:hover {
  color: #000;
}

.side-nav {
  height: 100%;
  width: 58px;
  position: fixed;
  // z-index: 1;
  top: 63px;
  left: 0;
  background-color: white;
  opacity: 0.9;
  overflow-x: hidden;
  transition: 0.3s;
}

.sidenavopen {
  height: 100%;
  width: 200px;
  position: fixed;
  // z-index: 1;
  top: 63px;
  left: 0;
  background-color: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  opacity: 0.9;
  overflow-x: hidden;
  // padding-top: 63px;
  transition: 0.3s;
}

.side-nav a {
  padding: 10px 10px 10px 17px;
  text-decoration: none;
  font-size: 16px;
  color: rgb(107, 103, 103);
  display: block;
  transition: 0.3s;
  font-weight: 600;
}

.side-nav a:hover {
  color: #fff;
}

.side-nav .btn-close {
  position: absolute;
  top: 63px;
  right: 22px;
  font-size: 36px;
  margin-left: 50px;
  z-index: 0;
}

#main {
  transition: margin-left 0.3s;
  padding: 20px;
  overflow: hidden;
  width: calc(100%);
  left: 58px;
  position: relative;
}

.mainopen {
  transition: margin-left 0.3s;
  padding: 20px;
  overflow: hidden;
  width: 100%;
  margin-left: calc(200px - 58px);
  position: relative;
  left: 0;
}

nav {
  transition: margin-left 0.3s;
}

.bar {
  display: block;
  height: 5px;
  width: 35px;
  background: #000;
  margin: 5px auto;
}

.midopen {
  width: 0;
}
.bar {
  transition: all 0.3s ease;
}
.topopen {
  transform: translateY(10px) rotateZ(45deg);
}
.botopen {
  transform: translateY(-10px) rotateZ(-45deg);
}
</style>
