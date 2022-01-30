import { apiStorageFiles } from "../configuration/axios/api-storage_files";

export const imageService = {
  getAll: async () => {
    try {
      const response = await apiStorageFiles({
        url: "/images",
        method: "get",
      });

      return {
        data: response.data,
        status: response.status,
        error: false,
      };
    } catch (error) {
      return {
        data: null,
        status: error.response.status,
        error: true,
      };
    }
  },

  save: async (data) => {
    try {
      const response = await apiStorageFiles({
        url: "/images",
        method: "post",
        data
      })

      return {
        data: response.data,
        status: response.status,
        error: false
      }
    } catch (error) {
      return {
        data: null,
        status: error.response.status,
        error: true,
      };
    }
  }
};
