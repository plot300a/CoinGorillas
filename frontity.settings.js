const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://coinwatch.thedailygrindsxm.com",
      title: "Coin Gorillas",
      description: "Crypto Currenty Highlights"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Hotels", "/t/hotels-resorts/"],
            ["Weddings", "/t/island-weddings/"],
            ["Shopping", "/t/shopping-in-sxm/"],
            ["Activities", "/t/vacation-activities/"],
            ["Villas & Condos", "/t/villas-condos/"],
            ["Music", "/c/sxm-music/"],
            ["Nearshore", "/c/nearshore-bpo/"],
            ["Wealth", "/c/wealth/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: false
          }
        }
      }
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          api: "https://coinwatch.thedailygrindsxm.com/wp-json/",
          categoryBase: "c",
          tagBase: "t"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
