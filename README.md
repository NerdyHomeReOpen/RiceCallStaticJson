# RiceCall Static JSON

[English](docs/README.en.md)

## 專案概述

此 repository 存放 RiceCall 多語系及其他公開 JSON 資料，建置後由靜態檔託管提供。它沒有常駐 HTTP 程序、資料庫或應用程式 API。Show 使用 `locales/<lang>/show.json`。

Show 使用的語言代碼為 `zh-TW`、`zh-CN`、`en-US`、`ru-RU`、`pt-BR`、`es-ES`、`fa-IR`、`tr-TR`；其他語系資料仍可用於 App 或 Website。

## 專案架構

可發布原始資料在 `docs/`；`scripts/build.cjs` 複製它們到 `dist/`，並產生包含檔案路徑、SHA-256、版本與時間的 manifest。下游專案經公開網址讀取 `dist/locales/` 的 JSON。

## 模組與子系統

| 類別 | 位置 | 職責 |
| --- | --- | --- |
| 語系資料 | `docs/locales/` | App、Website、Show、訊息等翻譯。 |
| 其他資料 | `docs/country.json`、`docs/staff.json` | 公開國家與人員資料。 |
| 建置子系統 | `scripts/build.cjs` | 複製資料並建立 manifest 與雜湊。 |
| 整理與發布 | `scripts/sort-json.cjs`、`.github/workflows/`、`crowdin.yml` | 鍵排序、翻譯平台與部署整合。 |

## 完整建置與執行

1. 安裝 Node.js 與 Yarn 1.22.22；本專案不需要 `.env` 或資料庫。
2. 安裝依賴並建置：

   ```bash
   yarn install --frozen-lockfile
   yarn build
   ```

3. 檢查 `dist/manifest.json` 與 `dist/locales/`，將整個 `dist/` 發布到靜態檔主機。下游使用公開 base URL 讀取，例如 `locales/zh-TW/show.json`。只有要主動整理來源 JSON 鍵順序時才執行 `yarn sort`；`yarn format` 會改寫來源檔。

## 延伸文件

語系檔的鍵是跨專案讀取契約。程式鍵使用 `server` 指 RiceCall 語音群；使用者可見的各語言譯文依當地用語保留 group。舊 `*-groups` 鍵與新 `*-servers` 鍵暫時並存以維持相容。
