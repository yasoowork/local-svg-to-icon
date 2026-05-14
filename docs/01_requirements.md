# Requirements

---

# ■ Overview

Local SVG to Icon は、
SVG コードから favicon や PNG アイコンを生成する、
ブラウザ完結型の軽量ツールである。

---

# ■ Functional Requirements

## 1. SVG Input

ユーザーは SVG を入力できる。

入力方法：

- textarea への直接入力
- コピペ
- `.svg` ファイル Drag & Drop

---

## 2. SVG Preview

入力した SVG をリアルタイムでプレビュー表示する。

---

## 3. PNG Export

SVG から PNG を生成できる。

対応サイズ例：

### favicon

- 16x16
- 32x32
- 48x48
- 64x64

### App Icon

- 180x180 (iOS)
- 192x192 (Android)
- 512x512 (PWA)

任意サイズ指定にも将来的に対応可能とする。

---

## 4. favicon.ico Export

SVG から favicon.ico を生成できる。

---

## 5. Multi Export

複数サイズのアイコンを一括生成できる。

将来的には ZIP ダウンロードにも対応可能とする。

---

## 6. Preview Modes

以下のプレビューに対応する：

- Light mode
- Dark mode
- 背景透過チェック
- 角丸アイコンプレビュー
- Browser tab preview
- Small favicon preview

---

## 7. Padding Adjustment

アイコン周囲の余白を調整できる。

---

## 8. Error Handling

不正な SVG の場合：

- エラー表示
- プレビュー停止
- export 無効化

を行う。

可能であれば：

- line number
- parse error 内容

なども表示する。

---

## 9. Local Processing

すべての処理はブラウザ内で行う。

SVG や画像データをサーバーへ送信しない。

---

# ■ Non Functional Requirements

## 1. Lightweight

軽量動作を重視する。

不要な依存を増やしすぎない。

---

## 2. Fast UX

入力からプレビュー反映までを高速に行う。

---

## 3. Mobile Support

スマートフォン表示に対応する。

---

## 4. Accessibility

最低限の可読性・操作性を維持する。

---

# ■ UI Requirements

基本 UI は：

- SVG 入力
- プレビュー
- Download

を最短導線で配置する。

高度な設定は：

- Preview
- Export
- Layout

などに分離し、
必要時のみ表示する。

---

# ■ Tech Stack

想定：

- React
- TypeScript
- Vite

静的ホスティング：

- GitHub Pages

---

# ■ Future Ideas

- ZIP export
- SVG optimization
- favicon HTML snippet generation
- manifest.json generation
- Data URL export
- PNG / ICO → SVG 簡易トレース