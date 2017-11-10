(function () {
  let 변수들;
  let 입력창 = document.getElementById('input-var');

  const 랜덤변수출력 = function () {
    const 출력물 = 변수들[Math.floor(Math.random() * 변수들.length)];
    document.getElementById('random-content').innerHTML = 출력물.content;
    document.getElementById('content-type').innerHTML = 출력물.type;
  };

  const 최초변수들생성 = function () {
    변수들 = [
      { id: 3, content: 'Kim_soojeong', type: 'snake_case' },
      { id: 2, content: 'macBook', type: 'camelCase' },
      { id: 1, content: 'Lim-giwan', type: 'kebab-case' }
    ];
  };

  const 변수체크출력 = function (e) {
    console.log(e);
    document.getElementById('input-chk').innerHTML = e;
  };

  const 아이디생성기 = function () {
    return Math.max.apply(null, 변수들.map(variable => variable.id)) + 1;
  };

  const 변수들추가 = function (케이스타입) {
    let 추가할거 = [{ id: 아이디생성기(), content: 입력창.value, type: 케이스타입 }];
    변수들 = 추가할거.concat(변수들);
    입력창.value = '';
    console.log(변수들);
  };

  const 변수체크 = function (e, n) {
    const regexrCamel = /[A-Z]/g;
    const regexrSnake = /_/g;
    const regexrKebab = /-/g;
    let resultChk;
    let 케이스타입;
    if (regexrCamel.test(e.value)) {
      // 카멜케이스
      resultChk = '혹시 Java개발자? camelCase!';
      케이스타입 = 'camelCase';
    } else if (regexrKebab.test(e.value)) {
      // 케밥케이스
      resultChk = '유행을 아시는군요. kebab-case!';
      케이스타입 = 'kebab-case';
    } else if (regexrSnake.test(e.value)) {
      // 스네이크케이스
      resultChk = '아재? snake_case!';
      케이스타입 = 'snake_case';
    } else {
      // 기타
      resultChk = '최선입니까?';
      케이스타입 = 'custom case';
    }
    if (n) {
      변수체크출력(resultChk);
    } else {
      변수들추가(케이스타입);
    }
  };

  document.getElementById('input-var').addEventListener('input', e => {
    변수체크(e.target, true);
  });
  window.addEventListener('load', () => {
    최초변수들생성();
  });
  document.getElementById('input-var').addEventListener('keyup', e => {
    if (e.keyCode !== 13 || 입력창.value === '') return;
    변수체크(입력창, false);
  });
  document.getElementById('print-random').addEventListener('click', () => {
    랜덤변수출력();
  });
}());
