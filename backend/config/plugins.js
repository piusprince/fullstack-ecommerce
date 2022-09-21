module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "piusprince"),
        api_key: env("CLOUDINARY_KEY", "934431228173379"),
        api_secret: env("CLOUDINARY_SECRET", "2YqTVYohtpJ7ERJgqDejfoZtx0w"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
