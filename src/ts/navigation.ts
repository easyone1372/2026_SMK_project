// navigation.ts
const navBtnEvent = document.addEventListener("DOMContentLoaded", () => {
  const homeBtn = document.getElementById("home-btn") as HTMLAnchorElement;
  const workBtn = document.getElementById("work-btn") as HTMLAnchorElement;
  const formBtn = document.getElementById("form-btn") as HTMLAnchorElement;
  const creditBtn = document.getElementById("credit-btn") as HTMLAnchorElement;

  // work_page 폴더 안인지 확인
  const isInWorkPage = window.location.pathname.includes("/work_page/");
  const prefix = isInWorkPage ? "../" : "./";

  const navigateWithTransition = (url: string) => {
    document.body.classList.add("page-transitioning");
    setTimeout(() => {
      window.location.href = url;
    }, 150);
  };

  if (homeBtn) {
    homeBtn.addEventListener("click", () => {
      navigateWithTransition(`${prefix}index.html`);
    });
  }

  if (workBtn) {
    workBtn.addEventListener("click", () => {
      navigateWithTransition(
        isInWorkPage ? "./work.html" : "./work_page/work.html",
      );
    });
  }

  if (formBtn) {
    formBtn.addEventListener("click", () => {
      navigateWithTransition(`${prefix}form.html`);
    });
  }

  if (creditBtn) {
    creditBtn.addEventListener("click", () => {
      navigateWithTransition(`${prefix}credit.html`);
    });
  }
});

export default navBtnEvent;
