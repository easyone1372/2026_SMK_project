// navigation.ts
document.addEventListener("DOMContentLoaded", () => {
  // home.html의 메인 버튼들
  const workBtn = document.querySelector(
    'a[href="#work"]',
  ) as HTMLAnchorElement;
  const formBtn = document.querySelector(
    'a[href="#form"]',
  ) as HTMLAnchorElement;
  const creditBtn = document.querySelector(
    'a[href="#credit"]',
  ) as HTMLAnchorElement;

  // work.html의 헤더 버튼들
  const homeHeaderBtn = document.getElementById("home-btn") as HTMLElement;
  const workHeaderBtn = document.getElementById("work-btn") as HTMLElement;
  const formHeaderBtn = document.getElementById("form-btn") as HTMLElement;
  const creditHeaderBtn = document.getElementById("credit-btn") as HTMLElement;

  // home.html 메인 버튼 이벤트
  if (workBtn) {
    workBtn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      window.location.href = "work.html";
    });
  }

  if (formBtn) {
    formBtn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      window.location.href = "form.html";
    });
  }

  if (creditBtn) {
    creditBtn.addEventListener("click", (e: Event) => {
      e.preventDefault();
      window.location.href = "credit.html";
    });
  }

  // work.html 헤더 버튼 이벤트
  if (homeHeaderBtn) {
    homeHeaderBtn.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }

  if (workHeaderBtn) {
    workHeaderBtn.addEventListener("click", () => {
      window.location.href = "work.html";
    });
  }

  if (formHeaderBtn) {
    formHeaderBtn.addEventListener("click", () => {
      window.location.href = "form.html";
    });
  }

  if (creditHeaderBtn) {
    creditHeaderBtn.addEventListener("click", () => {
      window.location.href = "credit.html";
    });
  }
});
