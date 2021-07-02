const settings = {
  name: "codesandbox-frontity",
  state: {
    frontity: {
      url: "https://coinwatch.thedailygrindsxm.com",
      title: "Coin Gorillas",
      description:
        "Bitcoin, Dogecoin, Ethereum, Crypto News, Trends & Price Data"
    }
  },
  packages: [
    {
      name: "@frontity/mars-theme",
      state: {
        theme: {
          menu: [
            ["Crypto TV", "/c/crypto-coins-tv/"],
            ["News", "/c/crypto-currency-news/"],
            ["Raoul Pal", "/t/raoul-pal"],
            ["Crypto Currency 101", "/c/crypto-101/"]
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
    "@frontity/html2react",
    "@frontity/wp-comments"
  ]
};

export default settings;
