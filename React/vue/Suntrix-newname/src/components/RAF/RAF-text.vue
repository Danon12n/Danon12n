<template>
  <div class="lc">
    <div class="text__content">
      <div class="logo">
        <svg
          width="172"
          height="146"
          viewBox="0 0 172 146"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.95166"
            y="60.5347"
            width="30.3265"
            height="97.166"
            rx="15.1632"
            transform="rotate(-30.1379 0.95166 60.5347)"
            fill="#23D2E2"
          />
          <path
            d="M114.83 120.563C108.721 131.474 93.0173 131.474 86.9083 120.563L53.109 60.191C47.138 49.5257 54.8469 36.3749 67.0699 36.3749L134.669 36.3749C146.892 36.3749 154.601 49.5257 148.629 60.191L114.83 120.563Z"
            fill="#807CFF"
          />
        </svg>
      </div>
      <b>SUNTRIX RP</b>
      <p>
        Добро пожаловать на сервер, какой-то приветсвенный текст состоящий из
        2-3 строчек, буквально для общего фона.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
// НЕ ПЕРЕИСПОЛЬЗУЕМЫЕ СТИЛИ/КОМПОНЕНТ!
.lc {
  width: 50vw;
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  .text__content {
    max-width: 560px;
    * {
      color: white;
    }
    b {
      padding-top: 5.5px;
      font-weight: bold;
      font-size: 100px;
      line-height: 121px;
    }
    p {
      padding-top: 5px;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }
  }
}

</style>