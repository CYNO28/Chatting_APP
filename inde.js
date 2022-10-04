let Keys = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];

function fun(arr, ind, ans) {
  if (ind == arr.length) {
    console.log(ans.join(""));
    return;
  }

  for (let i = 0; i < Keys[arr[ind]].length; i++) {
    ans.push(Keys[arr[ind]][i]);
    fun(arr, ind + 1, ans);

    ans.pop();

    if (arr[ind] == 0 || arr[ind] == 1) return;
  }
}

let arr = [2, 3, 4];

fun(arr, 0, []);
