<script>
import ROSLIB from "roslib";
import { useMesinStore } from "./stores/store.js";

export default {
  setup() {
    const MESIN_STATE = useMesinStore();
    return {
      MESIN_STATE
    };
  },
  data() {
    return {
      ros: null,                                          
      listener: null,

      //data yang di publish
      // toPC: null,
    };
  },
  async beforeMount() {
    await this.init();
    this.subscribe();
  },
  created() {
    this.MESIN_STATE.resetDataMesin();
  },
  methods: {
    async init() {
      this.ros = new ROSLIB.Ros({
        url: "ws://localhost:9090", // Sesuaikan URL dengan alamat ROS Bridge Anda
      });

      this.listener = new ROSLIB.Topic({
        ros: this.ros,
        name: "/chatter",
        messageType: "std_msgs/String",
      });
    },
    subscribe() {
      let that = this;
      that.listener.subscribe(function (message) {
        // that.MACHINE_STATE.dataMachine = message;
      });
    },
    publish() {
      this.publisher.publish(this.toPC);
    },
    beforeDestroy() {
      // Berhenti mendengarkan topik sebelum komponen dihancurkan
      if (this.listener) {
        this.listener.unsubscribe();
      }
    },
  },
};
</script>

<template>
  <router-view> </router-view>
</template>