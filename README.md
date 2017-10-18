# README: Hahow Hero

- [Instructions by Hahow](http://hahow-recruit.herokuapp.com/frontend)
- [hahow.dennyku.com](https://hahow.dennyku.com)
# 我們該如何執行完成的package

- nodejs version: v7.8.0

## Development

```
$> npm install && npm run dev
```

And visit [http://localhost:3000](http://localhost:3000)

## Production

```
$> npm install && npm build && npm start
```

# 專案的架構，Web的架構邏輯

```
├── README.md                   # 就是個 README
├── package.json                # 關於這個 package 的相依套件、各種 scripts⋯⋯等等
├── server.js                   # custom application server，讓 client 和 server 的 routing 都能正常運作
├── .eslintrc.js                # linter 設定
├── actions                     # 觸發畫面變動的 action。包括但不限於 redux 中的 action creator，
├── components                  # Stateless component(redux 中的 dumb components，本身不持有 state)
├── constants                   # 所有在這個 Project 中用到的 constants（主要為 action types）
├── layouts                     # layout 的 component，同樣為 stateless，但跟一般 components 的使用情境差很多，所以抽出來放
├── middlewares                 # 一些在 redux 中不適合放在 reducer 或是在 view layer 直接處理的邏輯會放在這
│   ├── api.js                  #   所有有 call api 的 action 都會經過這裡來處理
│   └── calculator.js           #   處理更新 hero profile 時會出現的驗證邏輯
├── pages                       # 每個 component 都代表一個頁面
├── reducers                    # redux 中用來生成 state 的 function
├── static                      # 放靜態資源的地方，但是在 production 時會去 cdn 拿資料，不會從 express server 直接 host
└── store                       # Application 在畫面上的 state 都是根據這裡來顯示
```

# 你對於所有使用到的第三方library的理解，以及他們的功能簡介

- next.js:
  - 功能：React 的 render 框架 (包括 SSR 以及 router 的管理)
  - 優點：
    - zeit
    - 能很好的跟 webpack 或 babel 做整合
    - 相較於自幹的 SSR，next.js 讓程式碼看起來清爽很多（各種 dehydrate 及 rehydrate）
  - 缺點：
    - 在跟 redux 協作時必須要引入 `next-redux-wrapper` 這種 wrapper，不過它做的事情其實只是在 `getInitialProps` 中去把 store 裡的東西打進 component 而已。


- redux:
  - 畫面狀態管理
  - 畫面的 state 由唯一一個 store 裡的 state 決定，而 store 的 state 由 reducer function 決定
  - 除此之外 redux 周邊也有各種生態系，並且要寫自己的 middleware 也很簡單
  - unit test 比較簡單

- React:
  - 負責跟 DOM 互動，以及提供各種好用的 Synthetic event、life cycle methods, etc.

- jest:
  - 測試


# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

- 因為各種原因導致程式沒辦法一讀就懂的時候才會寫：
  1. 程式寫得很亂（雖然是會加上 TODO: refactor 啦⋯⋯）
  2. 邏輯比較瑣碎複雜一些（見該專案的 middleware）

# 在這份專案中你遇到的困難、問題，以及解決的方法

- 決定是否要將 profile 用 nested 的放在 hero 底下（見下方的例子）
  - 後來決定移出來的原因是 profile 感覺是一個有可能會有越來越多 hierarchy 的資料

```
{
  id,
  name,
  profile: {
    str, agi, int, luk,
    remain
  }
}
```

- fetch data asynchronously on server-side
  - async, await 解決 -> `store.dispatch` 可以回傳 Promise

- 剩餘點數
  - 移到 middleware (calculator) 處理

- 開場動畫（只是覺得 marvel 一定要有這東西，沒有想到會這麼麻煩 XDD）
 - 結束後要把那張 gif 處理掉 setTimeout 把東西變成 display: none
 - 一開始`onLoad`
 - 用 onLoad Event 來解決，比較 tricky 的點是在 Server side 時不要去 render 圖片
 - render mp4 instead gif
 - 但是手機 video tag autoplay 和 loop 基本上被封印，所以在行動裝置上還是得上個 gif

---

## Dev-Plan

### Setup
- [x] README
  - [x] 我們該如何執行完成的package
  - [x] 專案的架構，Web的架構邏輯
  - [x] 你對於所有使用到的第三方library的理解，以及他們的功能簡介
  - [x] 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
  - [x] 在這份專案中你遇到的困難、問題，以及解決的方法
- [x] eslint
- [x] deployment

### State

```
{
  hero: {
    status,
    error,
    data: [{
      id,
      name,
      image
    }]
  },
  profile: {
    status,
    error,
    data: {
      [id]: {
        str,
        agi,
        luk,
        int,
        remain
      }
    }
  }
}
```

### View
- [Iron Man Login Form CSS Version by khoazany](https://codepen.io/khoazany/pen/qbGng)

