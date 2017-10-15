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

# 你對於所有使用到的第三方library的理解，以及他們的功能簡介

# 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解

# 在這份專案中你遇到的困難、問題，以及解決的方法

---

## Dev-Plan

### Setup
- [ ] README
  - [x] 我們該如何執行完成的package
  - [ ] 專案的架構，Web的架構邏輯
  - [ ] 你對於所有使用到的第三方library的理解，以及他們的功能簡介
  - [ ] 你在程式碼中寫註解的原則，遇到什麼狀況會寫註解
  - [ ] 在這份專案中你遇到的困難、問題，以及解決的方法
- [ ] directory
- [ ] eslint
- [ ] server setup
- [ ] deployment


### Routings

- [ ] Hero List Page (網址: /heroes)
- [ ] Hero Profile Page (網址: /heroes/:heroId)

### Features

- [ ] `HeroList`: 在頁面上水平置中 (API: `GET https://hahow-recruit.herokuapp.com/heroes`)
  - [ ] `HeroCard`: 由左到右排列，如果在小尺寸螢幕上列表中的元素超出畫面就自動往下排列
    - [ ] 必須包含圖片和名字，且是可以點擊的連結
    - [ ] 連結會連到單一Hero的 “Hero Profile Page“ ，`HeroList` 依然在相同位置，並且不因切換連結重新 render
    - [ ]
  - [ ] Show on HeroList Page
  - [ ] Show on Hero Profile Page
    - [ ] 當在 “Hero Profile Page“ 時要將現在所選中的 “Hero Card“ 用不同的顏色或圖案標示出來

- [ ] `HeroProfile`
  - [ ] Show on Hero Profile Page
  - [ ] 會顯示 Hero 的能力值 (API: `GET https://hahow-recruit.herokuapp.com/users/:userId/profile`) ，並且在數值左右各有一個按鈕，負責做增減功能，另外有一個顯示剩餘的能力點數的地方，一開始預設值是 0
  - [ ] “Hero Profile“ 最下方有一個儲存按鈕，按下按鈕後，會將現在設定的能力值提交更新 server 上的資料 (API: `PATCH https://hahow-recruit.herokuapp.com/users/1/profile`)，送出的能力值總和必須與拿到的時候相同
Hero 能力值不能小於零


