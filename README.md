# Node.js / MySQL プロジェクト環境構築

## 要点・まとめ

## Node.js-Express 手順書・始め方

1. ディレクトリ選択 > ターミナルにて
2. アプリ初期化 >「package.json」の作成
   ⇒ ディレクトリ直下にパッケージの設定情報を保存
   コマンド：npm init --yes
3. node 関連パッケージのインストール
   ⇒「express」、「ejs」をインストール
   コマンド：npm install express ejs
   ⇒「nodemon」をインストール
   npm install nodemon --save-dev
4. 必要最低限のファイル構成
   新しいディレクトリ：「view」>「index.ejs」
   新しいファイル：「app.js」
5. Web サーバー起動用コード[app.js]

```JavaScript:code
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => console.log(`Server on port ${port}!`));

app.get('/', (req, res) => res.send('Hello World!'));
```

6. サーバーを起動する

```
通常コマンド⇒ node app.js
「nodemon」コマンド⇒ npx nodemon app.js
ブラウザ上⇒localhost:3000
```

7. サーバーの停止
   Ctrl + C

## Node.js-Mysql 手順書・始め方

1. MySQL 本体のインストール(for Windows/Mac)

- Windows：システム環境変数の編集・追加
- MySQL 新規アカウント(root 以外)を作成し、権限設定をする
- 練習用データを登録する

2. npm install mysql

- npm install mysql2

3. DB サーバー起動用コード例[app.js]

```JavaScript:code
const mysql = require("mysql2");
const con = mysql.createConnection({
  host: "localhost",
  user: "xxxuser",
  password: "xxxx",
  database: "xxx_db",
});
```

4. DB サーバー起動

```JavaScript:code
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected");
});
```
