export function generateRandomString(len = 20, arr = "12345abcde") {
  let ans = "";
  for (let i = len; i > 0; i--) {
    ans += arr[Math.floor(Math.random() * arr.length)];
  }
  return ans;
}
