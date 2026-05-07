# 翻譯修正工作接手文件

> 此文件記錄一輪翻譯檔審計與修正工作的剩餘任務。前八個檔案已修完，剩 `website.json` 與 `app.json` 兩個大檔未完工。

## 工作原則

1. **zh-TW 為翻譯基準** —— 不要動 `docs/locales/zh-TW/*.json`，除非使用者明確要求。其餘語言以 zh-TW 為意涵權威。
2. **保留專屬名詞** —— `RiceCall`、`RC`、`NerdyHomeReOpen`、`RaidCall`、`Discord`、`GitHub`、`FAQ`、`NCSE`、`FM`、`URL`、`IP`、`ISP`、`ID`、`Markdown` 不翻譯。
3. **保留佔位符** —— `{{0}}`、`{{1}}`、`{{operator}}`、`{{target}}`、`{{channel}}`、`{{userName}}`、`{{userPermissionLevel}}`、`{{userGender}}`、`{{permissionText}}`、`{{time}}`、`{{date}}`、`{{version}}`、`{{releaseDate}}`、`{{nickname}}`、`{{count}}` 必須與 zh-TW 完全一致；不要把佔位符的單字翻譯（如俄文 `{{operator}}` 不可變成 `{{оператор}}`、波斯文不可變成 `{{اپراتور}}`、土耳其文不可變成 `{{operatör}}`）。
4. **多義詞先問** —— 不確定就問，不要瞎翻。
5. **zh-CN 詞彙策略** —— zh-CN 必須用大陸慣用詞，不只是繁→簡：見下方詞彙表。

---

## 已完成檔案（8/10）

- `position.json` ✅
- `rpc.json` ✅
- `system.json` ✅
- `badge.json` ✅
- `privacy.json` ✅
- `terms.json` ✅
- `message.json` ✅（zh-CN 與 ja-JP 整檔重寫；其他語言精準修正）
- `country.json` ✅

## 已知背景決定

- `machine-network`（position 角色）= 伺服器/基礎設施維運
- `official-staff`（position 角色）= 官方團隊成員/工作人員
- zh-CN 採用大陸慣用詞而非單純繁→簡轉換

---

## zh-CN 詞彙對照表（zh-TW → zh-CN）

| zh-TW | zh-CN | 備註 |
|------|------|------|
| 伺服器 | 服务器 | |
| 登入 | 登录 | |
| 登出 | 退出登录 | 「登出」也可，但「退出登录」更地道 |
| 使用者 | 用户 | |
| 帳號 | 账号 | 注意「帐」不是「账」 |
| 網路 / 网路 | 网络 | |
| 透過 | 通过 | |
| 影片 | 视频 | |
| 檔案 | 文件 | |
| 軟體 / 软体 | 软件 | |
| 硬體 / 硬体 | 硬件 | |
| 程式 | 程序 | |
| 程式碼 | 代码 | |
| 應用程式 / 应用程式 | 应用程序 | |
| 設定 | 设置 | |
| 預設 | 默认 | |
| 預覽 | 预览 | |
| 訊息 | 消息 | |
| 資訊 | 信息 | |
| 資料 | 数据 / 资料 | 視語境，技術數據用「数据」 |
| 視窗 / 视窗 | 窗口 | |
| 螢幕 | 屏幕 | |
| 全螢幕 | 全屏 | |
| 線上 / 线上 | 在线 | |
| 連線 / 连线 | 连接 | |
| 連結 / 连结 | 链接 | |
| 紀錄 / 纪录 | 记录 | |
| 暱稱 | 昵称 | |
| 介面 | 界面 | |
| 字型 | 字体 | |
| 麥克風 / 麦克风 | 麦克风 | |
| 揚聲器 / 扬声器 | 扬声器 | |
| 喇叭 | 扬声器 | 一致性 |
| 許可權 / 许可权 | 权限 | |
| 搜尋 / 搜寻 | 搜索 | |
| 不支援 / 不支援 | 不支持 | |
| 信箱 | 邮箱 | |
| 寄送 | 发送 | |
| 重設 | 重置 | |
| 註冊 / 注册 | 注册 | 注意「註」不是「注」 |
| 通訊 | 通讯 | |
| 連結（用語） | 链接 | |
| 聯絡 | 联系 | 「聯絡人/我們」→「联系人/我们」 |
| 套用 | 应用 | 動詞 apply |
| 影片 | 视频 | |
| 啟用 | 启用 | 一般保留「启」 |
| 啟動 | 启动 | |
| 怎麼 / 怎麽 | 怎么 | 注意「麼」不是「么」 |
| 為什麼 / 為什麽 | 为什么 | |
| 關係 | 关系 | 注意「關/関」 |
| 選單 | 菜单 | |
| 管道 | 渠道 | (語境上指「途徑」時) |
| 偵測 | 检测 | |
| 斷線 | 断线 / 断开 | |
| 信件 | 邮件 | |
| 圖示 | 图标 | |
| 字元 | 字符 | |
| 解析度 | 分辨率 | |
| 列印 | 打印 | |
| 檢視 | 查看 | |
| 高級 | 高级 | (技術語境) |

詳細範例詞庫亦見 `MEMORY.md` 中相關記憶條目。

---

## 剩餘任務 1：`website.json`（323 行）

### 跨語言通病

#### 全部 6 個非 en-US/zh-CN 語言（ja-JP、es-ES、pt-BR、ru-RU、tr-TR、fa-IR）：

- **`pages.home.interface.close`** —— 普遍被翻成名詞（"閉鎖/closure/closing/encerramento/закрытие/kapanış/بسته شدن"），應為按鈕用動詞「關閉」（Close, Cerrar, Fechar, Закрыть, Kapat, بستن）。
- **`pages.forget.account`** —— 被多語翻成「銀行帳號號碼」（pt-BR `número de conta`、fa-IR `شماره حساب`、ja-JP `口座番号`），應為「Account / 帳號 / アカウント」。

### en-US

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `pages.profile.badgeShowTime` | "Show to:" | "Display until:" | 應為「展示到何時」 |
| `pages.forget.sendingEmail` | "link" | "Sending..." | 漏字 |
| `pages.valid.usernameMaxLength` | "Usernames must be at least 4 characters long...." | "Usernames must be at most 16 characters long." | 反向（複製了 min-length） |
| `pages.profile.passwordReset` | "Reset" | "Change password" | zh-TW = 修改密碼 |

### zh-CN（需大量詞彙轉換 + 個別錯誤）

對照詞彙表，把以下字串裡所有對應 zh-TW 詞彙換成 zh-CN：
- `nav.openMenu`: 开启选单 → 打开菜单
- `pages.home.faq.items.q1.answer`: 登入 → 登录
- `pages.home.faq.items.q2.answer`: 视窗→窗口、设定→设置、装置→设备
- `pages.home.faq.items.q3.answer`: 关係 → 关系
- q4/q5/q7-q9 questions: 麼→么、登入→登录、视窗→窗口、回报→反馈
- `pages.home.faq.items.q5.answer`: 提供管道 → 提供渠道
- `pages.register.title`: 註冊 → 注册
- `pages.login.fields.account`: 帐号 → 账号（注意是「账」非「帐」）
- `pages.profile.uploadApply` / `uploadApplyNoCrop`: 套用 → 应用
- `pages.profile.newEmailTitle`: 新电子信箱 → 新电子邮箱
- `pages.forget.enterAccount`: 帐号→账号、寄送→发送、重设→重置、连结→链接、信箱→邮箱
- `pages.forget.account`: 帐号 → 账号
- `pages.forget.sendEmail`: "帐号寄送重设连结"（前面多了「帐号」）→ "发送重置链接"
- `pages.forget.sendingEmail`: 寄送中 → 发送中
- `pages.forget.backLogin`: 返回登入 → 返回登录
- `pages.valid.usernameMinLength` / `usernameMaxLength`: 使用者名称→用户名、码→位
- `pages.join.tryConnect`: 连线→连接
- `pages.join.unsupported`: 支援→支持
- `site.keywords`: 软体→软件、网路→网络

### ja-JP（多處嚴重詞義錯誤）

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `announcementCategory.update` | 関連製品の新規追加 | アップデート | 「新增關聯產品」是電商詞 |
| `announcementCategory.general` | 一般的に | 一般 | 副詞變類別名 |
| `nav.home` | 表紙 | ホーム | 「書封面」→主頁 |
| `pages.home.interface.close` | 閉鎖 | 閉じる | 名詞→動詞 |
| `pages.contact.jobs.customer-service` | 公式お知らせ | カスタマーサービス | 詞義錯 |
| `pages.profile.tabs.recent` | 最近の | 最近 | 後綴 の 沒接東西 |
| `pages.profile.editOpen` | 作成日 | 編集 | 「建立日期」→「編輯」 |
| `pages.profile.groupsTitle` | サーバー | ボイスグループ | zh-TW 是語音群 |
| `pages.profile.permanent` | 永遠 | 永久 | |
| `pages.profile.emailSendingLink` | 男性のメール送信中... | 送信中... | 亂碼 |
| `pages.profile.emailChangeAction` | 変化 | 変更 | |
| `pages.profile.emailBound` | メールバインド | メール連携済み | 失去過去式 |
| `pages.profile.permission` | 許可 | 権限 | |
| `pages.login.submitting` | 読み込み中... | ログイン中... | |
| `pages.forget.account` | 口座番号 | アカウント | 「銀行帳號」 |
| `pages.valid.usernameInvalidFormat` | "ユーザー名" | "ニックネーム" | zh-TW 是暱稱 |

### es-ES

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `pages.join.loading` | A partir de... | Iniciando... | 介係詞→動詞 |
| `pages.forget.sendingEmail` | Envío... | Enviando... | 名詞→動名詞 |

### pt-BR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `nav.home` | primeira página | Início | 不自然 |
| `pages.home.interface.close` | encerramento | Fechar | 名詞→動詞 |
| `pages.profile.tabs.joined` | Ingressos | Ingressados / Participando | 「票券」→「已加入」 |
| `pages.forget.account` | número de conta | Conta | 「帳號號碼」 |

### ru-RU

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `nav.home` | первая страница | Главная | 不自然 |
| `pages.home.interface.close` | закрытие | Закрыть | 名詞→動詞 |
| `pages.contact.jobs.COO-taiwan / russia / brazil` | Лидер (Тайвань) | Операционный директор (Тайвань) | 與其他 COO-* 用詞不一致 |
| `pages.forget.sendEmail` | Сбросить пароль | Отправить ссылку для сброса | 詞義錯 |

### tr-TR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `nav.home` | ön sayfa | Ana sayfa | |
| `pages.home.interface.close` | kapanış | Kapat | 名詞→動詞 |
| `pages.home.features.items.roomPerms.desc` | Sunucu kontrolleri | Sunucu/Host kontrolleri | 「主持人」 |
| `pages.login.forgetPassword` / `pages.forget.forgetTitle` | şifreyi unuttum | Şifremi unuttum | 大寫＋第一人稱所有格 |
| `pages.valid.usernameInvalidFormat` | ...harfler, sayılar ve özel karakterler | ...harfler, sayılar | 不該有「特殊字元」 |

### fa-IR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `nav.openMenu` | منوی باز | باز کردن منو | 「開的菜單」→「打開菜單」 |
| `pages.home.interface.close` | بسته شدن | بستن | 動名詞→動詞 |
| `pages.contact.jobs.COO-taiwan / russia / brazil` | "COO, Taiwan" 等 | مدیر ارشد عملیاتی تایوان 等 | 英文未譯 |
| `pages.login.forgetPassword` / `pages.forget.forgetTitle` | رمز عبور را فراموش کنید | رمز عبور را فراموش کرده‌اید؟ | 命令式→疑問式 |
| `pages.login.errors.invalid-account-or-password` | شماره حساب 開頭 | حساب 開頭 | 「銀行帳號」 |
| `pages.forget.account` | شماره حساب | حساب / نام کاربری | 「銀行帳號」 |
| `pages.join.opening` | آغاز رایس کال... | در حال شروع RiceCall... | RiceCall 不該音譯 |
| `pages.valid.usernameInvalidFormat` | ...نویسه‌های ویژه باشد | 移除「特殊字符」 | zh-TW 沒提特殊字元 |

---

## 剩餘任務 2：`app.json`（628 行）

### 跨語言通病：~25 個 key 仍是繁中（**所有 8 個非 zh-TW 語言**）

這些 key 在所有非 zh-TW 語言檔內都還是繁中，要全部翻成各語言：

```
already-in-server, app-only-feature, approve-friend, audio-latency, latency,
diagnosis-api-ws-test, diagnosis-finished, diagnosis-initialize,
diagnosis-logs, diagnosis-reports, diagnosis-sfu-check, diagnosis-sfu-test,
export-report, friend-activity, invite, invite-friend-to-server,
invite-friend-to-server-confirm, invite-total-for, join-server-invitation,
maximize, minimize, network-diagnosis, restore, rtc-disconnect-message,
select-all, server-invitation-content (prefix/suffix), show-to,
start-test, testing
```

zh-TW 內容請從 `docs/locales/zh-TW/app.json` 對照。

### en-US（除上述繁中通病外）

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `personal-exclusive` | My groups | Personal exclusive | 詞義錯 |
| `password-invalid-format` | "...can only contain @$!%*#?& as special characters" | "...cannot contain special characters other than @$!%*#?&" | 反向 |
| `not-public` | This is a private channel | The user has not made it public | 詞義錯 |
| `search-user` / `search-user-placeholder` | Enter the server ID or name | Search user | 詞義錯（變成 server） |
| `please-input-password` | Repeat password | Please enter password | 詞義錯 |

### zh-CN（量大，整檔重寫較快）

zh-CN 仍有大量繁中字＋台灣詞。建議用 `Read` 整檔讀進來，然後對照詞彙表全文 search-replace 後 `Write` 整檔。重點修正：

- 所有上述 25 個繁中 key（換成 zh-CN）
- `mic-taken`: 已拿麥 → 已拿麦
- `change-server`、`prod-server`、`test-server`、`confirm-change-server-to-dev`: 伺服器 → 服务器
- 所有 `登入`、`使用者`、`视窗`、`讯息`、`纪录`、`连线`、`字型`、`设定`、`应用程式`、`搜寻`、`软体`、`程式`、`帐号`、`许可权` 全文替換
- `quick-enter-server`: 缺少 `{{0}}` 佔位符（zh-TW 是「按Enter鍵快速進入 {{0}}」）
- `non-online-message`: 抄到 `non-friend-warning-message` 內容
- `logout`: 登出 → 退出登录

### ja-JP（**多處被貼到完全錯領域的字串，疑似電商或別的 app**）

下面是嚴重錯誤的 key（極可能是別的應用的字串貼錯）：

| Key | 現值 | 應為 |
|-----|-----|------|
| `add` | 属性値のタイプ | 追加 |
| `error` | 受信者が必要です | エラー |
| `edit` | 作成日 | 編集 |
| `none` | カテゴリ名を設定してください | なし |
| `name` | 製品属性の詳細の編集 | 名前 |
| `home` | ご注文の詳細はここをクリック | ホーム |
| `update` | 関連製品の新規追加 | 更新 |
| `member` | 税込 | メンバー |
| `permission` | ユーザー情報 | 役職 / 権限 |
| `description` | 返信テキスト | 説明 |
| `basic-setting` | 表示モード変更を許可 | 基本設定 |
| `please-input-password` | 旧パスワードが違います | パスワードを入力してください |
| `future` | 戻る | 後 / 後で |
| `ago` | フォワード | 前 |
| `gn` | 作動不能 | オフライン |
| `broadcast` | ラジオ | 放送 |
| `recommend` | ブースト | おすすめ |
| `recommend-server` | ラジオ局おすすめのボイスグループ | おすすめのボイスグループ |
| `customer-service` | 公式お知らせ | カスタマーサービス |
| `control-queue` | 一息を | マイク制御 |
| `reject` | 同意しない | 拒否 |
| `reject-all` | すべて元に戻す | すべて拒否 |
| `confirm-delete-channel` / `friend` / `friend-group` | "{{0}} をブロックしてもよろしいですか？" | 應為「刪除...嗎？」非「封鎖...嗎？」|
| `confirm-unblock-user` | {{0}} をブロックしてもよろしいですか？ | {{0}} のブロックを解除してもよろしいですか？ |
| `password-max-length` / `min-length` | アカウントは20文字 | パスワードは20文字 |
| `favorited-servers` | お気に入りのグループはありません | お気に入りのグループ |
| `recent-servers` | 最近グループを訪問していない | 最近訪問したグループ |
| `no-joined-servers` | お気に入りのグループはありません | 参加したグループはありません |
| `move-down-queue` | もっと高く上げろ | キュー位置を下げる |
| `chat-mode` | 僅用於中文 | チャットモード |
| `community` | 包括的な | 総合 |
| `family/friends` | 私達のパートナー | 友達 |
| `public-server` | セミパブリックサーバー | 公開グループ |
| `second` | 2番 | 秒 |
| `mix-mode-classic` | 聖堂 | 講堂 / コンサートホール |
| `enable` | 開始 | 有効化 |
| `mic-controlled` | キューが停止しました | マイク制御中 |
| `remove-channel-mod` / `remove-channel-admin` / `remove-admin` / `unset-channel-admin` / `unset-channel-mod` / `unset-server-admin` | グループ管理者として削除 | 各角色不同：移除頻道管理員 / 移除二級頻道管理員 / 移除群管理員 |
| `set-channel-admin` / `set-channel-mod` / `set-server-admin` | チャンネルモデレーター | 應加上「設定為...」動詞 |

### es-ES

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `edit-channel-order` | Administrador de canales | Modificar orden de canales | 詞義錯 |
| `input-device` | Introducir dispositivo | Dispositivo de entrada | 「輸入裝置」變動詞 |
| `in-queue-position` | {{0}} | Posición {{0}} | zh-TW 是「第...位」 |
| `wealth` | Contribución | Riqueza | 與 contribution 重複 |
| `future` | Atrás | Después | 反向 |
| `ago` | Adelante | Anterior / Atrás | 反向 |
| `confirm-terminate-membership` | ¿...eliminar tu membresía en {{0}}? | ...eliminar la membresía de {{0}}? | 主詞錯 |

### pt-BR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `cannot-add-yourself` | Diretor Técnico | Não é possível adicionar a si mesmo como amigo | **嚴重**：「技術總監」 |
| `rare` | Cru | Raro | 「生的」 |
| `password-invalid-format` | ...só pode conter @$!%*#?& | ...não pode conter caracteres especiais além de @$!%*#?& | 反向 |
| `has-new-message` | {{0}} então nova mensagem | {{0}} novas mensagens | 亂碼 |
| `community` | abrangente | Comunidade | |
| `join-current-channel` | Entrou no canal atual | Entrar no canal atual | 過去式→不定式 |
| `join-current-server` | Juntou-se ao grupo de voz | Entrar no grupo de voz | 過去式→不定式 |
| `not-public` | Este é um canal privado | Não foi tornado público | |
| `test-server` | Servidor oficial de teste | Servidor de teste | 多了 oficial |
| `my-servers` | Meus grupo | Meus grupos | typo |
| `mix-app-source-label` | Software de reverb | Mixar som de software | 詞義錯 |
| `mix-effect-label` | Habilitar mixagem | Habilitar reverberação | 反向 |
| `take-mic-directly` | Modo livre | Pegar microfone diretamente | 詞義錯 |
| `mix-all-source-label` | Transmitir todos os sons | Mixar todos os sons | 「傳送」→「混音」 |
| `speaking-with-mix` | Transmitindo som... | Falando com mixagem... | |

### ru-RU

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `account-min-length` | Максимальная длинна имени... 4 символа | Минимальная длина... 4 символа | **反向** + typo (длинна→длина) |
| `account-max-length` | Максимальная длинна... | Максимальная длина... | typo |
| `guest-text-max-length-label` | Максимальная длинна... | Максимальная длина... | typo |
| `password-invalid-format` | ...должен содержать @$!%*#?& | ...не может содержать спец. символы кроме @$!%*#?& | 反向 |
| `username-required` | Никнейм | Имя пользователя обязательно | 太簡略 |
| `entertainment-groups` | Razvlekatel'naya golosovaya chat-gruppa | Развлекательная голосовая группа | **拼音未翻譯** |
| `entertainment-mode` | Высокое | Развлекательный режим | 「高」 |
| `chat-mode` | Стандартное | Режим чата | 「標準」 |
| `text-broadcast` | Текстовое | Текстовое объявление | 截斷 |
| `voice-broadcast` | Голосовое | Голосовое объявление | 截斷 |
| `message-only-label` | Канал-категория | Этот канал только для отображения сообщений | 詞義錯 |
| `mix-effect-label` | Звуковой эффект | Включить реверберацию | |
| `not-public-joined-servers.top` / `not-public-recent-servers.top` | 與其他 not-public-* 不一致 | 統一 | |
| `unprocessed` | Осталось | Не обработано | 「剩餘」 |
| `mic-muted` | Выключить | Микрофон выключен | |
| `mic-taken` | Включен | Микрофон взят | |
| `take-mic` | Включить | Взять микрофон | |
| `join-current-channel` | Введите текущий канал | Войти в текущий канал | 「鍵入」→「進入」 |
| `reason-abuse` | злоупотреблять | Оскорбления | 動詞→名詞 |
| `nickname-hint` | 1-10 символов | 1-32 символа | 數字錯 |
| `back` | возвращаться | Назад | 不定式→名詞 |
| `future` | Через | После | |

### tr-TR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `save` | **Kale**（城堡！）| Kaydet | **嚴重** |
| `mic-order` | Mai Xu | Mikrofon sırası | **拼音「麥序」未翻譯** |
| `account-min-length` | Şifre en az 4 karakter | Hesap en az 4 karakter | 「密碼」應為「帳號」 |
| `email-invalid-format` | Geçerli bir e | Geçerli bir e-posta adresi girin | 截斷 |
| `server-name-placeholder` | Şifre 6-30 karakter... | Grup adı 6-30 karakter... | 「密碼」應為「群名稱」 |
| `confirm-unblock-user` | "engellemek istediğinizden emin misiniz?" | "engelini kaldırmak istediğinizden emin misiniz?" | 反向 |
| `not-public-recent-servers.bottom` | GenelSon Ziyaretler | Genel Son Ziyaretler | 缺空格 |
| `future` | Geri | Sonra | 反向 |
| `invite-member-label` | Üye Daveti Nick | Aşağıdaki kullanıcıları davet edeceksiniz | 亂碼 |
| `system-notify` | (newline) Sistem Bildirğesi | Sistem Bildirimi | 開頭換行 + typo |
| `username` | "Kullanıcı Adı\n" | Kullanıcı Adı | 結尾換行 |
| `public-server` | Yarı kamusal gruplar | Açık grup | 「半公開」 |
| `xp` | integral | Puan | 詞義錯 |
| `confirm-terminate-membership` | {{0}} üyeliğinizi iptal etmek | {{0}}'in üyeliğini iptal etmek | 主詞錯 |
| `mic-controlled` | Buğdayla suçlanan | Mikrofon kontrol altında | 「被麥子指控」（亂碼） |
| `mic-taken` | Mikrofonu aldım bile. | Mikrofon alındı | 第一人稱過去式 |
| `back` | geri dönmek | Geri | 不定式→名詞 |

### fa-IR

| Key | 現值 | 改為 | 原因 |
|-----|-----|------|------|
| `server-name-placeholder` | رمز عبور باید بین ۶ تا ۳۰ کاراکتر... | نام گروه باید بین ۶ تا ۳۰... | 「密碼」應為「群名稱」 |
| `passwords-do-not-match` | رمز عبوری که وارد کردید نامعتبر است | رمزهای عبور وارد شده مطابقت ندارند | 「無效」應為「不匹配」 |
| `terminate-self-membership` | حذف نقش عضویت این فرد | حذف عضویت خودم | 主詞錯（「這個人」應為「自己」） |
| `search-friend-placeholder` / `search-server-placeholder` / `search-user` / `search-user-placeholder` | 「請輸入伺服器名稱或 ID」（多 key 都同樣文字） | 各 key 應有不同提示 | |
| `second` | دوم | ثانیه | 「第二」應為「秒」 |
| `readme` | "...در ضمن این مسنجر توسط فرحان هایپر ترجمه شده است" | （刪除翻譯員署名）| **未授權翻譯員署名** |
| `edit-nickname` | ویرایش نام | ویرایش نام مستعار گروه | 太籠統 |

---

## 建議工作流程

1. **website.json 先做**（323 行，問題較少）
   - 一次處理一個語言，依上方表格逐項修
   - 跨語言通病（`pages.home.interface.close`、`pages.forget.account`）可一次掃過所有語言
2. **app.json 再做**（628 行，問題量大）
   - 先把 25 個跨語言通病繁中 key 在所有 8 語言補上各自翻譯
   - 然後逐語言處理該語言的個別錯誤
   - ja-JP 的「電商貼錯字串」極多，可能需要全面審視，建議單獨拉一輪
   - zh-CN 量大，建議讀整檔再 Write 全寫

## 已建立的記憶條目

`memory/` 目錄已存：
- `project_locale_baseline.md` —— 基準與 zh-CN 策略

---

最後更新：2026-05-08（Claude session by Josh）
