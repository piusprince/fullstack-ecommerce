module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", { process: "CLOUDINARY_NAME" }),
        api_key: env("CLOUDINARY_KEY", { process: "CLOUDINARY_KEY" }),
        api_secret: env("CLOUDINARY_SECRET", { process: "CLOUDINARY_SECRET" }),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
