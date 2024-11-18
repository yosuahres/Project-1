import { defineStore } from "pinia";

export const useMesinStore = defineStore("alerts", {
  id: "store",
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      dataMesin: {
        // bloodPressure: 0, 
      },
      utils: {
        //status: "false",
      },
    };
  },
  actions: {
    // since we rely on `this`, we cannot use an arrow function
    resetDataMesin() {
      this.dataMesin = {
        // bloodPressure: 0,
      }
    },
    // randomizeCounter() {
    //   this.count = Math.round(100 * Math.random());
    // },
  },
});