// Utilities
import { defineStore } from 'pinia'

export const useGymStore = defineStore('gym', {
  state: () => ({
    gyms: [],
    gym:{},
  }),
  actions: {
    async getGyms() {
      try {
        let gymArray = this.gyms;
        const response = await fetch("https://ejercitatebackend-production.up.railway.app/api/gyms");
        if (response.status === 200) {
          const data = await response.json();
          [...gymArray, data];
          return data;
        } else {
          return;
        }

      }
      catch (error) {
        throw new Error(error.message);
      }
    },
    async getGym(id: string) {
      try {
        const response = await fetch(`https://ejercitatebackend-production.up.railway.app/api/gyms/${id}`);
        if (response.status === 200) {
          const data = await response.json();
          this.gym = data;
          return data;
        } else {
          return;
        }
      }
      catch (error) {
        throw new Error(error.message);
      }
    }
  }
})
