export const BORDER_RADIUS = {
  /**
   * 用途: 打ち消し用（モバイルのときに角丸じゃなくなる、などを表現する）
   */
  none: 0,
  /**
   * 用途: バッジ, 高さ40px以下の要素
   */
  4: 4,
  /**
   * 用途: サムネイル
   */
  8: 8,
  /**
   * 用途: チュートリアルツールチップ
   */
  16: 16,
  /**
   * 用途: モーダル
   */
  24: 24,
  /**
   * 真円 or 左右が丸まっている矩形 を作る時に用いる
   *
   * 用途: ボタン
   */
  oval: 999999,
} as const
