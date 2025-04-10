// 色を変更する関数を定義
function changeColor() {
    const textElement = document.getElementById('text-element');
    textElement.classList.add('color-changed');
}

// ボタンを取得
const button = document.getElementById("color-change-button");

// イベントリスナーの登録
button.addEventListener("click", changeColor);

const button2 = document.getElementById("myButton");
button2.addEventListener("click", () => {
    alert("ボタンがクリックされました！");
});

const myForm = document.getElementById("myForm");
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault(); // フォームのデフォルト送信を止める

//   const usernameValue = document.getElementById("username").value;
//   const ageValue = document.getElementById("age").value;
//   const genderValue = document.getElementById("gender").value;
//   const messageValue = document.getElementById("message").value;

//   console.log(usernameValue, ageValue, genderValue, messageValue);
//   alert(usernameValue, ageValue, genderValue, messageValue);
// });

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const usernameValue = document.getElementById("username").value.trim();
    const ageValue = document.getElementById("age").value;
  
    if (usernameValue === "") {
      alert("ユーザー名を入力してください");
      return;
    }
    if (ageValue < 1) {
      alert("年齢は1以上で入力してください");
      return;
    }
  
    // すべてのバリデーションを通過した場合のみフォーム送信やデータ送信を行う
    console.log("バリデーションOK. 送信処理を続行...");
  });