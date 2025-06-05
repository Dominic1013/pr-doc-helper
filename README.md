# pr-doc-helper

這是一個用來快速輸出 Git PR 資訊的 Node.js CLI 小工具。  
適用於希望在每次送出 PR 前，快速整理好目前分支的 commit 訊息與 diff 內容，並保存成 Markdown 文件做為 PR 文件編寫依據。

---

## 目的

在大型專案開發中，PR 的內容經常需要清楚地說明「為什麼改、改了什麼、怎麼改」。  
本工具協助開發者快速整理出：

- PR 的分支名稱與建立時間
- 本分支相對於主分支（預設為 `origin/dev`）的所有 commit 訊息
- 本分支的完整變更（diff）

輸出結果會自動儲存在桌面的 `work/PR記錄/` 資料夾中，方便複製貼上到 PR、Notion、Jira 或 ChatGPT。

---

## 安裝與設定

### 1. 安裝 TypeScript 執行器

你需要先全域安裝 `tsx`：

```bash
npm install -g tsx



2. 複製本專案
將此 repo clone 或下載到你電腦上的任意位置（預設建議為 ~work/scripts/pr-helper/）：
若想改變路徑請至檔案中作更動
const desktop = `${homedir()}/Desktop`;
const outputDir = `${desktop}/work/PR記錄`;




git clone https://github.com/your-username/pr-doc-helper.git

npm install

使用方法
1. 進入你想要產出 PR 說明的 Git 專案資料夾

cd ~/Desktop/work/maauu-front-end


2. 執行 CLI 指令產出 PR 紀錄文件

tsx ~/Desktop/work/scripts/pr-helper/generate-pr-doc.ts


你會在桌面產出如下檔案：


~/Desktop/work/PR記錄/2025-06-05__fix_layout-bug.md


檔案內容包含該分支對 origin/dev 的所有 commit 與 diff。

使用範例
產出後你可以將 .md 文件拖曳到 ChatGPT，並搭配固定的 PR template 請求協助撰寫 PR 文件，如：


# Branch：{{BranchName}}

> 類型：refactor / fix / feat
> 建立時間：{{Date}}
> 優先級：Medium
> 狀態：Ready
注意事項
預設比較分支為 origin/dev，如需改為其他分支，可手動修改 generate-pr-doc.ts 中的指令。

若你從未 fetch 過 origin/dev，請先在專案中執行一次：

git fetch origin
```
