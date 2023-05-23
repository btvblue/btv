document.addEventListener('DOMContentLoaded', () => {
  // Header //
  const header = document.querySelector('.header-container');
  const btnMenu = header.querySelector('.btn-menu');

  // 태블릿 상에서 메뉴 펼침, 접힘 버튼 클릭 이벤트리스너 //
  btnMenu.addEventListener('click', btnMenuHandler);

  // 이벤트 핸들러 //
  function btnMenuHandler(e) {
    const target = e.currentTarget;
    const header = document.querySelector('.header-container');
    const headerMenuList = header.querySelector('.header-menu-list-box');

    if (headerMenuList.style.hasOwnProperty('display')) {
      // 메뉴 펼침 //
      if (headerMenuList.style.display === 'none') {
        slideDown(headerMenuList, 400);
        headerMenuList.classList.add('expand');
        target.querySelector('img').setAttributes({
          src: '../../assets/images/btn_close_menu_nor.svg',
          alt: '메뉴 닫기',
        });
      }
      // 메뉴 접음 //
      else {
        slideUp(headerMenuList, 400);
        headerMenuList.classList.remove('expand');
        target.querySelector('img').setAttributes({
          src: '../../assets/images/btn_open_menu_nor.svg',
          alt: '메뉴 열기',
        });
      }
    }
  }

  // LNB Dropdown //
  const lnbContainer = document.querySelector('.lnb-container');
  const openBtns = lnbContainer.querySelectorAll('.btn-open');
  const breakPoint = 1468;
  setLnbPosition(window.innerWidth, breakPoint);

  // LNB 토글버튼 이벤트 리스너 적용 //
  if (openBtns) {
    for (const openBtn of openBtns) {
      openBtn.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const subListBox = target.closest('.lnb-list').querySelector('.lnb-sub-list-box');
        const lastListBox = subListBox.querySelector('.lnb-last-list-box');

        if (target.classList.contains('active')) {
          target.classList.remove('active');
          slideUp(subListBox, 400);
          lnbContainer.classList.remove('expand');

          // 마지막 깊이 메뉴가 있을 경우 함께 펼친다 //
          if (lastListBox) {
            const lastActive = lastListBox.querySelector('.active');

            if (lastActive) {
              slideUp(lastListBox, 400);
              const parent = lastActive.closest('.lnb-sub-list').querySelector('.btn-sub-open');
              parent.classList.remove('active');
            }
          }
        } else {
          target.classList.add('active');
          slideDown(subListBox, 400);
          lnbContainer.classList.add('expand');

          // 마지막 깊이 메뉴가 있을 경우 함께 접는다 //
          if (lastListBox) {
            const lastActive = lastListBox.querySelector('.active');

            if (lastActive) {
              slideDown(lastListBox, 400);
              const parent = lastActive.closest('.lnb-sub-list').querySelector('.btn-sub-open');
              parent.classList.add('active');
            }
          }
        }
      });
    }
  }

  // 마지막 Depth 토글 버튼 이벤트 리스너 적용 //
  const subOpenBtns = document.querySelectorAll('.btn-sub-open');
  if (subOpenBtns) {
    for (const subOpenBtn of subOpenBtns) {
      subOpenBtn.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const lastListBox = target.closest('.lnb-sub-list').querySelector('.lnb-last-list-box');
        if (target.classList.contains('active')) {
          target.classList.remove('active');
          // lastListBox.style.height = '0';
          lastListBox.style.marginTop = '0';
          lastListBox.style.marginBottom = '0';
          slideUp(lastListBox, 400);
        } else {
          target.classList.add('active');
          // lastListBox.style.height = 'auto';
          lastListBox.style.marginTop = '1.8rem';
          lastListBox.style.marginBottom = '1.8rem';
          slideDown(lastListBox, 400);
        }
      });
    }
  }

  // Quick Menu
  // 1. 현재 스크롤 위치에 active 되어야함
  // 2. 누르면 가야함
  const headerHeight = header.offsetHeight + 25;

  const quickMenu = document.querySelector('.quick-menu-container');
  const titles = document.querySelectorAll('h2, h3');

  if (quickMenu) {
    const listTitles = quickMenu.querySelectorAll('.list-title, .sub-list-title');

    for (const listTitle of listTitles) {
      listTitle.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const menuIndex = Array.prototype.slice.call(listTitles).indexOf(target);

        // 추출한 h2 제목 중 클릭한 퀵메뉴에 대응하는 타이틀을 선택한다 //
        const matchTitle = titles[menuIndex];

        // 스크롤 함수 실행 //
        smoothScroll(matchTitle, 500, headerHeight);
      });
    }

    // 윈도우 스크롤 이벤트 리스너 //
    window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      let scrollY = window.scrollY;
      let trigger = scrollY + windowHeight / 2;

      titles.forEach((title, index) => {
        const titleTop = title.offsetTop;
        if (titleTop < trigger) {
          listTitles.forEach((quickMenu, i) => {
            quickMenu.classList.remove('active');
          });

          listTitles[index].classList.add('active');
        }
      });
    });
  }

  // 콘텐츠 로드 완료, 리사이징 될 때 퀵메뉴가 콘텐츠와 겹치지 않도록 재설정 한다. //
  const mainContainer = document.querySelector('.main-container');
  let timer = null;
  window.addEventListener('resize', () => {
    if (quickMenu) setQuickMenuLeft(mainContainer, quickMenu);

    // 부하를 줄이기 위해 윈도우 창 크기 변경 후 한 번만 실행되도록 한다. //
    clearTimeout(timer);
    timer = setTimeout(function () {
      setLnbPosition(window.innerWidth, breakPoint);
    }, 100);
  });

  // 모든 요소 로드 완료 후 상황에 맞게 LNB와 Quick 메뉴의 형태를 적용한다. //
  window.addEventListener('load', () => {
    setLnbPosition(window.innerWidth, breakPoint);
    if (quickMenu) setQuickMenuLeft(mainContainer, quickMenu);
  });
});

// 윈도우 가로 크기에 따라 LNB 형태를 변경하는 함수 //
function setLnbPosition(width, breakPoint) {
  const header = document.querySelector('.header-container');
  const headerListBox = header.querySelector('.header-menu-list-box');
  const lnb = document.querySelector('.lnb-container');

  const list = lnb.querySelector('.active:not(.btn-open, .btn-sub-open)');
  const parent = list.closest('.lnb-list');
  const parentSiblings = parent.siblings();
  const subList = parent.querySelector('.lnb-sub-list-box');

  // Tablet //
  if (width < breakPoint) {
    parentSiblings.forEach((menu, i) => {
      if (menu !== parent) menu.style.display = 'none';
    });

    subList.style.removeProperty('display');
    headerListBox.style.display = 'none';

    if (parent.querySelector('.btn-open.active')) {
      parent.querySelector('.btn-open.active').classList.remove('active');
    }
  }
  // PC //
  else {
    parentSiblings.forEach((menu, i) => {
      menu.style.removeProperty('display');
    });

    // Slide Down 함수를 실행하
    subList.style.display = 'block';
    headerListBox.style.removeProperty('display');
    parent.querySelector('.btn-open').classList.add('active');
  }
}

// 윈도우 가로 크기에 따라 퀵메뉴 left 위치를 재설정 하는 함수
function setQuickMenuLeft(container, menu) {
  const mainLeft = container.offsetLeft;
  const mainWidth = container.offsetWidth;
  const mainRight = mainLeft + mainWidth;
  const menuLeft = menu.getBoundingClientRect().left;

  if (menuLeft <= mainRight) {
    menu.style.left = `${mainRight}px`;
  } else {
    menu.style.removeProperty('left');
  }
}

// 스크롤 애니메이션 함수 //
function smoothScroll(target, duration, defaultTop) {
  const targetPosition = target.offsetTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition - defaultTop;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, Math.floor(run));
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
