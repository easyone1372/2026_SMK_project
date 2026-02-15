// work_klk.ts
class KlkAnimation {
    constructor() {
        this.animationComplete = false;
        this.imageBox = document.querySelector(".klk_image_box");
        this.fullImageBox = document.querySelector(".klk_full_image_box");
        this.init();
    }
    init() {
        // 애니메이션 완료 시간 계산 (마지막 애니메이션 완료 시점)
        // 앞 캐릭터 char_3: 5.2s + 0.8s = 6s
        setTimeout(() => {
            this.animationComplete = true;
            if (this.imageBox) {
                this.imageBox.classList.add("animation-complete");
            }
        }, 6000);
        // 이미지 박스 클릭/호버 이벤트
        if (this.imageBox && this.fullImageBox) {
            // 호버로 팝업 표시
            this.imageBox.addEventListener("mouseenter", () => {
                if (this.animationComplete) {
                    this.showFullImage();
                }
            });
            // 전역 마우스 이동 감지 - 이미지 박스의 좌우 범위 체크
            document.addEventListener("mousemove", (e) => {
                var _a;
                // 팝업이 열려있을 때만 체크
                if (((_a = this.fullImageBox) === null || _a === void 0 ? void 0 : _a.classList.contains("active")) && this.imageBox) {
                    const rect = this.imageBox.getBoundingClientRect();
                    const mouseX = e.clientX;
                    // 마우스가 이미지 박스의 좌우 범위를 벗어났는지 체크
                    if (mouseX < rect.left || mouseX > rect.right) {
                        this.hideFullImage();
                    }
                }
            });
            // 팝업 배경 클릭 시 닫기
            this.fullImageBox.addEventListener("click", (e) => {
                // 배경(fullImageBox)을 직접 클릭한 경우만 닫기
                if (e.target === this.fullImageBox) {
                    this.hideFullImage();
                }
            });
            // ESC 키로 팝업 닫기
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    this.hideFullImage();
                }
            });
        }
    }
    showFullImage() {
        if (this.fullImageBox) {
            this.fullImageBox.classList.add("active");
            // 스크롤 방지
            document.body.style.overflow = "hidden";
        }
    }
    hideFullImage() {
        if (this.fullImageBox) {
            this.fullImageBox.classList.remove("active");
            // 스크롤 복원
            document.body.style.overflow = "";
        }
    }
}
// DOM 로드 완료 후 초기화
document.addEventListener("DOMContentLoaded", () => {
    new KlkAnimation();
});
export default KlkAnimation;
//# sourceMappingURL=work_klk.js.map