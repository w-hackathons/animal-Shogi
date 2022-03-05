// ゴリ押しで表示させる
$(function () {
  $("#0").click(function () {
    // cssで背景色を切り替え
    $("#1").toggleClass("selected");
    $("#3").toggleClass("selected");
    $("#4").toggleClass("selected");
  });
  $("#1").click(function () {
    $("#0").toggleClass("selected");
    $("#2").toggleClass("selected");
    $("#3").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#5").toggleClass("selected");
  });
  $("#2").click(function () {
    $("#1").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#5").toggleClass("selected");
  });
  $("#3").click(function () {
    $("#1").toggleClass("selected");
    $("#0").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#6").toggleClass("selected");
    $("#7").toggleClass("selected");
  });
  $("#4").click(function () {
    $("#0").toggleClass("selected");
    $("#1").toggleClass("selected");
    $("#2").toggleClass("selected");
    $("#3").toggleClass("selected");
    $("#5").toggleClass("selected");
    $("#6").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#8").toggleClass("selected");
  });
  $("#5").click(function () {
    $("#1").toggleClass("selected");
    $("#2").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#8").toggleClass("selected");
  });
  $("#6").click(function () {
    $("#3").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#9").toggleClass("selected");
    $("#10").toggleClass("selected");
  });
  $("#7").click(function () {
    $("#3").toggleClass("selected");
    $("#4").toggleClass("selected");
    $("#5").toggleClass("selected");
    $("#6").toggleClass("selected");
    $("#8").toggleClass("selected");
    $("#9").toggleClass("selected");
    $("#10").toggleClass("selected");
    $("#11").toggleClass("selected");
  });
  $("#8").click(function () {
    $("#4").toggleClass("selected");
    $("#5").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#10").toggleClass("selected");
    $("#11").toggleClass("selected");
  });
  $("#9").click(function () {
    $("#6").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#10").toggleClass("selected");
  });
  $("#10").click(function () {
    $("#6").toggleClass("selected");
    $("#7").toggleClass("selected");
    $("#8").toggleClass("selected");
    $("#9").toggleClass("selected");
    $("#11").toggleClass("selected");
  });
  $("#11").click(function () {
    $("#7").toggleClass("selected");
    $("#8").toggleClass("selected");
    $("#10").toggleClass("selected");
  });
});

// ２次元配列で隣接しているマスの座標を表示
const board = [
  [0, 0],
  [0, 1],
  [0, 2],
  [1, 0],
  [1, 1],
  [1, 2],
  [2, 0],
  [2, 1],
  [2, 2],
  [3, 0],
  [3, 1],
  [3, 2],
];
j = 0; //0([0,0]番目を選択した場合)
a = board[j][0];
b = board[j][1];

let array = [];
array.push(
  [a - 1, b - 1],
  [a - 1, b],
  [a - 1, b + 1],
  [a, b - 1],
  [a, b + 1],
  [a + 1, b - 1],
  [a + 1, b],
  [a + 1, b + 1]
);

let array2 = [];

for (let i = 0; i < array.length; i++) {
  let tmp = array[i];
  if (
    array[i][0] != -1 &&
    array[i][0] != 4 &&
    array[i][1] != -1 &&
    array[i][1] != 3
  ) {
    //console.log(tmp)
    array2.push(tmp);
  }
}
