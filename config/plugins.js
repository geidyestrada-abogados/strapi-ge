//module.exports = () => ({});

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 1000000, // tamaño límite para archivos en bytes
      providerOptions: {},
    },
  },
});
