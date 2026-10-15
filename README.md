# RiceCall Static JSON

存放多語系和其他可公開讀取的 JSON 資料，建置後由靜態檔託管提供。這個專案沒有常駐 HTTP 程序、資料庫或應用程式 API。

Show 使用 `locales/<lang>/show.json`。語言代碼與 Website 一致：`zh-TW`、`zh-CN`、`en-US`、`ru-RU`、`pt-BR`、`es-ES`、`fa-IR`、`tr-TR`。

## 模組與子系統盤點

| 類別 | 能力與位置 | 為什麼在此專案 |
| --- | --- | --- |
| 資料模組 | 語系、國家與人員資料：`docs/locales/`、`docs/country.json`、`docs/staff.json` | 供其他 RiceCall 專案或公開網址讀取；`docs/locales/*/show.json` 提供 Show 的 Canvas 文字。 |
| 建置子系統 | `scripts/build.cjs` | 複製 `docs/` 到發佈目錄，產生檔案清單、SHA-256 與版本資訊。 |
| 整理工具 | `scripts/sort-json.cjs` | 統一 JSON 物件的鍵順序。 |
| 發布整合 | `.github/workflows/`、`crowdin.yml` | 自動建置／發佈及翻譯平台設定。 |

**共用候選：** 靜態資料打包、檔案雜湊清單與 JSON 排序工具。複製時須替換資料來源、語系清單和發布目的地；本專案不需要 Node 服務的 HTTP、Socket 或 database 目錄。

## 常用指令

```sh
yarn install --frozen-lockfile
yarn build
yarn sort
```
