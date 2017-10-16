# README: Hahow Hero

- [Instructions by Hahow](http://hahow-recruit.herokuapp.com/frontend)

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
├── .eslintrc.js                # linter 設定
├── server.js                   # custom application server，讓 client 和 server 的 routing 都能正常運作
├── actions                     # 觸發畫面變動的 action。包括但不限於 redux 中的 action creator，
│   ├── fetchHeroProfile.js
│   ├── fetchHeroes.js
│   ├── submitHeroProfile.js
│   └── updateProfileAttr.js
├── components                  # Stateless component(redux 中的 dumb components，本身不持有 state)
│   ├── HeroCard.js
│   ├── HeroList.js
│   └── HeroProfile.js
├── constants                   # 所有在這個 Project 中用到的 constants（主要為 action types）
├── layouts                     # layout 的 component，同樣為 stateless，但跟一般 components 的使用情境差很多，所以抽出來放
│   └── Main.js
├── middlewares                 # 一些在 redux 中不適合放在 reducer 或是在 view layer 直接處理的邏輯會放在這
│   ├── api.js                  #   所有有 call api 的 action 都會經過這裡來處理
│   └── calculator.js           #   處理更新 hero profile 時會出現的驗證邏輯
├── pages                       # 每個 component 都代表一個頁面
│   ├── hero.js
│   └── heroes.js
├── reducers                    # redux 中用來生成 state 的 function
│   ├── hero.js
│   ├── index.js
│   └── profile.js
├── static                      # 放靜態資源的地方
└── store                       # Application 在畫面上的 state 都是根據這裡來顯示
```

# 你對於所有使用到的第三方library的理解，以及他們的功能簡介

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

# 在這份專案中你遇到的困難、問題，以及解決的方法
- 決定是否要將 profile 用 nested 的方式放在 heroes 這個 reducer 中
- fetch data asynchronously on server-side
  - async, await 解決 -> `store.dispatch` 可以回傳 Promise
- 剩餘點數
---

## Dev-Plan

### Setup
- [ ] README
  - [x] 我們該如何執行完成的package
  - [ ] 專案的架構，Web的架構邏輯
  - [ ] 你對於所有使用到的第三方library的理解，以及他們的功能簡介
  - [ ] 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
  - [ ] 在這份專案中你遇到的困難、問題，以及解決的方法
- [x] eslint
- [x] server setup
- [ ] deployment


### Routings

- [x] Hero List Page (網址: /heroes)
- [x] Hero Profile Page (網址: /heroes/:heroId)

### Features

- [x] `HeroList`: 在頁面上水平置中 (API: `GET https://hahow-recruit.herokuapp.com/heroes`)
  - [x] `HeroCard`: 由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
    - [x] 必須包含圖片和名字，且是可以點擊的連結
    - [x] 連結會連到單一Hero的 “Hero Profile Page“ ，`HeroList` 依然在相同位置，並且不因切換連結重新 render
  - [x] Show on HeroList Page
  - [x] Show on Hero Profile Page
    - [x] 當在 “Hero Profile Page“ 時要將現在所選中的 “Hero Card“ 用不同的顏色或圖案標示出來

- [x] `HeroProfile`
  - [x] Show on Hero Profile Page
  - [x] 會顯示 Hero 的能力值 (API: `GET https://hahow-recruit.herokuapp.com/users/:userId/profile`) ，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
  - [x] “Hero Profile“ 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料 (API: `PATCH https://hahow-recruit.herokuapp.com/users/1/profile`)，送出的能力值總和必須與拿到的時候相同
Hero 能力值不能小於零

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

actions:
- getHeroes
- getHeroProfile
- updateHeroProfile
-

