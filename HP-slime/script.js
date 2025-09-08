let slimeHP = 10;

 // メッセージを表示する要素
const messageElement = document.querySelector("h2");

const blockHasColor = document.querySelectorAll(".blue,.blue2,.blue3,.black");
const slime = document.querySelector(".pixel_art");

function playSlimeAnimation() {
    slime.classList.remove("animation");
    void slime.offsetWidth; // アニメーションをリセットして再生
    slime.classList.add("animation");
}

function damageSlime() {
    if (slimeHP > 0) { // スライムが生きている場合にのみHPを減らす
        slimeHP -= 1;
    }
}

function selectMessage() {
    let message = ""; // メッセージ用の変数を初期化
    if (slimeHP <= 5 && slimeHP > 0) {
        messageElement.classList.add("message");
        message = "ちょっと疲れてきた..."; // HPが5以下の時のメッセージ
    }
    if (slimeHP == 0) {
        message = "もう動けないよ..."; // HPが0になった時のメッセージ
    }
    return message;
}

function viewMessage(message) {
    if (messageElement) {
        messageElement.textContent = message; // メッセージを要素に表示
    }
}

// ブロックがクリックされた時の処理
blockHasColor.forEach((element) => {
    element.addEventListener("click", () => {
        if (slimeHP > 0) { // スライムが生きている時にのみ処理を実行
            playSlimeAnimation();
            damageSlime();
            let slimeMessage = selectMessage(); // HPに応じたメッセージを取得
            viewMessage(slimeMessage); // メッセージを表示
        }
    });
});
